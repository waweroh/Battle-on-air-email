import { Resend } from "resend";
import { WeeklyNewsletterEmail } from "@/app/emails/weeklyNews";
import { WelcomeEmail } from "@/app/emails/WelcomeEmail";
import { PromotionalEmail } from "@/app/emails/promotionalEmail";

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
  const emailComponents = {
    welcome: WelcomeEmail,
    "weekly-newsletter": WeeklyNewsletterEmail,
    promotional: PromotionalEmail
  };

  const EmailComponent = emailComponents[type];

  return await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [to],
    subject: `${type.charAt(0).toUpperCase() + type.slice(1)} Email`,
    react: EmailComponent({ name }),
  });
}