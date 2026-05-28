import { Resend } from "resend";

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Missing environment variable: RESEND_API_KEY");
    }

    const body = await request.json();
    const { formType, name, email, phone, subject, message } = body;

    if (!formType || !name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return Response.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    const mailTo = process.env.MAIL_TO || "contact@dabotics.com";
    const mailFrom =
      process.env.RESEND_FROM || "Dabotics Website <onboarding@resend.dev>";

    let emailSubject = subject || "New message from Dabotics website";
    let html = "";

    if (formType === "demo-for-schools") {
      const { school, country, state, demoPrograms = [] } = body;

      if (!school?.trim() || !phone?.trim()) {
        return Response.json(
          { error: "School name and phone are required for demo requests." },
          { status: 400 }
        );
      }

      emailSubject = `School Demo Request — ${school}`;
      html = `
        <h2>School Demo Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>School / Organisation:</strong> ${escapeHtml(school)}</p>
        <p><strong>Country:</strong> ${escapeHtml(country || "—")}</p>
        <p><strong>State:</strong> ${escapeHtml(state || "—")}</p>
        <p><strong>Demo programs:</strong> ${
          demoPrograms.length
            ? demoPrograms.map(escapeHtml).join(", ")
            : "None selected"
        }</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `;
    } else if (formType === "reach-out") {
      emailSubject = subject?.trim()
        ? `Reach Out — ${subject}`
        : `Reach Out — ${name}`;
      html = `
        <h2>Reach Out / Contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject || "—")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `;
    } else {
      return Response.json({ error: "Invalid form type." }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: mailFrom,
      to: [mailTo],
      replyTo: email,
      subject: emailSubject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    const message =
      err.message?.includes("RESEND_API_KEY")
        ? "Email is not configured. Add RESEND_API_KEY to your environment."
        : "Failed to send message. Please try again or email contact@dabotics.com directly.";
    return Response.json({ error: message }, { status: 500 });
  }
}
