"use server";

import { Resend } from "resend";

export async function joinWaitlist(email: string): Promise<{ success: boolean; error?: string }> {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No API key configured — log and return success silently
    console.log("[waitlist]", email);
    return { success: true };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "waitlist@humanents.ch",
      to: "dheres@humanents.ch",
      subject: "New waitlist signup — humanents.ch",
      text: `New signup: ${email}`,
      html: `<p>New waitlist signup: <strong>${email}</strong></p>`,
    });
    return { success: true };
  } catch (err) {
    console.error("[waitlist error]", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
