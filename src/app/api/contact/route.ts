import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  try {
    await resend.emails.send({
      from: 'Ferre TP <onboarding@resend.dev>',
      to: 'arnaud.boubli19@gmail.com',
      subject: 'Nouveau message du site ferre-tp.com',
      html: `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0;padding:0;background:#f5f5f5;">
  <tr>
    <td align="center">

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
        style="max-width:640px;background:#ffffff;font-family:Arial,sans-serif;">

        <tr>
          <td style="background:#1f2937;color:#ffffff;padding:24px;text-align:center;">
            <h2 style="margin:0;font-size:22px;">FERRE TP</h2>
            <p style="margin:6px 0 0;font-size:14px;">
              Nouveau message du site ferre-tp.com
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding:24px;color:#333333;font-size:15px;line-height:1.5;">

            <p style="margin:0 0 12px;">
              <strong>Nom :</strong><br>
              ${data.name}
            </p>

            <p style="margin:0 0 12px;">
              <strong>Email :</strong><br>
              ${data.email}
            </p>

            <p style="margin:0 0 8px;">
              <strong>Message :</strong>
            </p>

            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#f3f4f6;padding:16px;border-radius:4px;white-space:pre-line;">
                  ${data.message}
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <tr>
          <td style="background:#f9fafb;padding:16px;text-align:center;font-size:12px;color:#666;">
            Message envoyé depuis ferre-tp.com
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur envoi mail' }, { status: 500 });
  }
}
