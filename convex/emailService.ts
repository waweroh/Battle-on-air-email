import { Resend } from "resend";
import { render } from '@react-email/render';
import { WeeklyNewsletterEmail } from "../src/app/emails/weeklyNews";
import { WelcomeEmail } from "../src/app/emails/WelcomeEmail";
import { PromotionalEmail } from "../src/app/emails/promotionalEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export type EmailType = "welcome" | "weekly-newsletter" | "promotional";

export async function sendEmail({ 
  to, 
  name, 
  type 
}: { 
  to: string; 
  name: string; 
  type: EmailType;
}) {
  try {
    let EmailTemplate;
    switch (type) {
      case "welcome":
        EmailTemplate = WelcomeEmail;
        break;
      case "weekly-newsletter":
        EmailTemplate = WeeklyNewsletterEmail;
        break;
      case "promotional":
        EmailTemplate = PromotionalEmail;
        break;
      default:
        throw new Error(`Unknown email type: ${type}`);
    }

    const html = await render(EmailTemplate({ name }));

    return await resend.emails.send({
      from: "Battle on Air <onboarding@resend.dev>",
      to: [to],
      subject: `${type.charAt(0).toUpperCase() + type.slice(1)} Email`,
      html
    });
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}