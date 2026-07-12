export type EarlyAccessPayload = {
  name: string;
  email: string;
  role: string;
  company?: string;
  teamSize: string;
  channels: string[];
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEarlyAccessPayload(
  body: unknown
): { ok: true; data: EarlyAccessPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const input = body as Record<string, unknown>;
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const role = typeof input.role === "string" ? input.role.trim() : "";
  const company =
    typeof input.company === "string" ? input.company.trim() : undefined;
  const teamSize =
    typeof input.teamSize === "string" ? input.teamSize.trim() : "";
  const channels = Array.isArray(input.channels)
    ? input.channels.filter((c): c is string => typeof c === "string")
    : [];

  if (!name) return { ok: false, error: "Full name is required." };
  if (!email) return { ok: false, error: "Email is required." };
  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!role) return { ok: false, error: "Role is required." };
  if (!teamSize) return { ok: false, error: "Team size is required." };
  if (!channels.length) {
    return { ok: false, error: "Select at least one outreach channel." };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      role,
      company: company || undefined,
      teamSize,
      channels,
    },
  };
}
