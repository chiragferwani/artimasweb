/**
 * Resend Email Utility for Event Registration Confirmation
 */

export interface SendRegistrationEmailParams {
  toEmail: string;
  recipientName: string;
  eventName: string;
  registrationId: string;
  teamName: string;
  collegeName: string;
  teamSize: number;
  paymentStatus: string;
}

const RESEND_API_KEY =
  import.meta.env.VITE_RESEND_API_KEY || 're_ZfTZwnM6_KQ4AcXsqBzTgmtNtLZ5qMmrY';

/**
 * Sends a registration confirmation email using Resend API.
 * Any email delivery error is caught so it NEVER blocks or affects Google Sheets registration.
 */
export async function sendRegistrationConfirmationEmail(
  params: SendRegistrationEmailParams
): Promise<{ success: boolean; id?: string; error?: string }> {
  const {
    toEmail,
    recipientName,
    eventName,
    registrationId,
    teamName,
    collegeName,
    teamSize,
    paymentStatus,
  } = params;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0d0e12; color: #f3f0ee; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #161822; border: 1px solid #2a2d3d; border-radius: 16px; overflow: hidden; }
          .header { background: linear-gradient(135deg, #1c1f2e 0%, #0d0e12 100%); padding: 32px 24px; text-align: center; border-bottom: 1px solid #2a2d3d; }
          .brand { font-size: 24px; font-weight: 800; color: #f5d76e; letter-spacing: 2px; text-transform: uppercase; margin: 0; }
          .subbrand { font-size: 12px; color: #9e9a94; letter-spacing: 1px; text-transform: uppercase; margin-top: 6px; }
          .content { padding: 32px 24px; }
          .title { font-size: 20px; font-weight: 700; color: #ffffff; margin: 0 0 16px; }
          .text { font-size: 15px; line-height: 1.6; color: #c4c1bc; margin: 0 0 24px; }
          .card { background: #0d0e12; border: 1px solid #2a2d3d; border-radius: 12px; padding: 20px; margin-bottom: 24px; }
          .row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #1f2230; font-size: 14px; }
          .row:last-child { border-bottom: none; }
          .label { color: #9e9a94; }
          .value { color: #ffffff; font-weight: 600; text-align: right; }
          .badge { display: inline-block; background: rgba(245, 215, 110, 0.15); border: 1px solid #f5d76e; color: #f5d76e; padding: 4px 12px; border-radius: 999px; font-weight: 700; font-size: 12px; }
          .whatsapp-box { background: rgba(37, 211, 102, 0.1); border: 1px solid rgba(37, 211, 102, 0.3); border-radius: 12px; padding: 20px; text-align: center; margin-bottom: 24px; }
          .whatsapp-btn { display: inline-block; background: #25d366; color: #ffffff; font-weight: 700; font-size: 14px; text-decoration: none; padding: 12px 24px; border-radius: 999px; margin-top: 12px; }
          .footer { padding: 20px 24px; text-align: center; font-size: 12px; color: #6e6b66; border-top: 1px solid #2a2d3d; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="brand">ARTIMAS 2026</h1>
            <div class="subbrand">Dept. of CSE (AI & ML) · PCCOE Pune</div>
          </div>
          <div class="content">
            <h2 class="title">Registration Confirmed! 🎉</h2>
            <p class="text">
              Hello <strong>${recipientName}</strong>,<br><br>
              Your registration for <strong>${eventName}</strong> at Artimas 2026 has been successfully confirmed.
            </p>
            
            <div class="card">
              <div class="row">
                <span class="label">Registration ID:</span>
                <span class="value"><span class="badge">${registrationId}</span></span>
              </div>
              <div class="row">
                <span class="label">Event:</span>
                <span class="value">${eventName}</span>
              </div>
              <div class="row">
                <span class="label">Team / Participant:</span>
                <span class="value">${teamName}</span>
              </div>
              <div class="row">
                <span class="label">College:</span>
                <span class="value">${collegeName}</span>
              </div>
              <div class="row">
                <span class="label">Team Size:</span>
                <span class="value">${teamSize} Member(s)</span>
              </div>
              <div class="row">
                <span class="label">Payment Status:</span>
                <span class="value">${paymentStatus}</span>
              </div>
            </div>

            <div class="whatsapp-box">
              <div style="color: #ffffff; font-weight: 600; font-size: 15px; margin-bottom: 6px;">Stay Connected with the Council</div>
              <div style="color: #9e9a94; font-size: 13px;">Join the official WhatsApp group for schedule updates, rulebooks, and queries:</div>
              <a href="https://chat.whatsapp.com/DgwPI9EgaAQ1Z1epQcUZ40?s=qt&p=a&mlu=4&ilr=4" class="whatsapp-btn">Join WhatsApp Group ↗</a>
            </div>

            <p class="text" style="font-size: 13px; color: #9e9a94; margin-bottom: 0;">
              Please keep your Registration ID handy during offline verification on the event day. If you have any questions, feel free to reply to this email or reach us through the website contact page.
            </p>
          </div>
          <div class="footer">
            © 2026 Department of Computer Science & Engineering (AI & ML), PCCOE Pune. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: toEmail,
        subject: `[Confirmed] Artimas 2026 Registration: ${eventName} (${registrationId})`,
        html: htmlContent,
      }),
    });

    const data = await response.json();
    return { success: response.ok, id: data.id };
  } catch (err: unknown) {
    console.error('Resend email error (non-fatal):', err);
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to send email',
    };
  }
}

export default sendRegistrationConfirmationEmail;
