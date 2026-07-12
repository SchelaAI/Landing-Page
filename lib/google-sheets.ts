import { google } from "googleapis";
import type { EarlyAccessPayload } from "./early-access";

const HEADERS = [
  "Timestamp",
  "Name",
  "Email",
  "Role",
  "Company",
  "Team Size",
  "Channels",
];

function payloadToRow(data: EarlyAccessPayload): string[] {
  return [
    new Date().toISOString(),
    data.name,
    data.email,
    data.role,
    data.company ?? "",
    data.teamSize,
    data.channels.join(", "),
  ];
}

function getSheetConfig() {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const sheetName = process.env.GOOGLE_SHEET_TAB_NAME || "Early Access";

  if (!spreadsheetId) {
    throw new Error("GOOGLE_SHEET_ID is not configured.");
  }

  return { spreadsheetId, sheetName };
}

function getServiceAccountAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n"
  );

  if (!email || !privateKey) {
    throw new Error(
      "Google service account credentials are not configured."
    );
  }

  return new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

async function ensureHeaders(
  spreadsheetId: string,
  sheetName: string,
  auth: InstanceType<typeof google.auth.JWT>
) {
  const sheets = google.sheets({ version: "v4", auth });
  const range = `${sheetName}!A1:G1`;

  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  if (!existing.data.values?.length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [HEADERS] },
    });
  }
}

async function appendViaServiceAccount(data: EarlyAccessPayload) {
  const { spreadsheetId, sheetName } = getSheetConfig();
  const auth = getServiceAccountAuth();
  const sheets = google.sheets({ version: "v4", auth });

  await ensureHeaders(spreadsheetId, sheetName, auth);

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:G`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [payloadToRow(data)],
    },
  });
}

async function appendViaAppsScript(data: EarlyAccessPayload) {
  const url = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!url) {
    throw new Error("GOOGLE_APPS_SCRIPT_URL is not configured.");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = (await response.json().catch(() => null)) as
    | { success?: boolean; error?: string }
    | null;

  if (!response.ok || !result?.success) {
    throw new Error(result?.error || "Google Apps Script submission failed.");
  }
}

export async function appendEarlyAccessRow(data: EarlyAccessPayload) {
  if (process.env.GOOGLE_APPS_SCRIPT_URL) {
    await appendViaAppsScript(data);
    return;
  }

  await appendViaServiceAccount(data);
}

export function isGoogleSheetsConfigured() {
  const hasAppsScript = Boolean(process.env.GOOGLE_APPS_SCRIPT_URL);
  const hasServiceAccount = Boolean(
    process.env.GOOGLE_SHEET_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
  );

  return hasAppsScript || hasServiceAccount;
}
