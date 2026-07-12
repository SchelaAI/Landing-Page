import { validateEarlyAccessPayload } from "@/lib/early-access";
import {
  appendEarlyAccessRow,
  isGoogleSheetsConfigured,
} from "@/lib/google-sheets";

export async function POST(request: Request) {
  try {
    if (!isGoogleSheetsConfigured()) {
      return Response.json(
        {
          error:
            "Early access form is not connected to Google Sheets yet. Configure GOOGLE_APPS_SCRIPT_URL or service account credentials.",
        },
        { status: 503 }
      );
    }

    const body = await request.json();
    const validation = validateEarlyAccessPayload(body);

    if (!validation.ok) {
      return Response.json({ error: validation.error }, { status: 400 });
    }

    await appendEarlyAccessRow(validation.data);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Early access submission failed:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Unable to save your submission. Please try again.";

    return Response.json({ error: message }, { status: 500 });
  }
}
