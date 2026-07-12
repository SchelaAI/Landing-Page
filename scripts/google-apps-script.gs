/**
 * Google Apps Script for the Schela early access form.
 *
 * Setup:
 * 1. Create a Google Sheet (or use an existing one).
 * 2. Extensions → Apps Script → paste this file.
 * 3. Deploy → New deployment → Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the deployment URL into GOOGLE_APPS_SCRIPT_URL in .env.local
 */

var SHEET_NAME = "Early Access";
var HEADERS = [
  "Timestamp",
  "Name",
  "Email",
  "Role",
  "Company",
  "Team Size",
  "Channels",
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = getOrCreateSheet_();
    ensureHeaders_(sheet);

    sheet.appendRow([
      new Date().toISOString(),
      data.name || "",
      data.email || "",
      data.role || "",
      data.company || "",
      data.teamSize || "",
      (data.channels || []).join(", "),
    ]);

    return jsonResponse_({ success: true });
  } catch (err) {
    return jsonResponse_({ success: false, error: String(err) });
  }
}

function getOrCreateSheet_() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }
  return sheet;
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    return;
  }

  var firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  var hasHeaders = firstRow.some(function (cell) {
    return String(cell).trim() !== "";
  });

  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
