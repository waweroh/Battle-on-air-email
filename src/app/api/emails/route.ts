import WeeklyNewsletterEmail from "@/app/emails/WeeklyNews";
import { WelcomeEmail } from "@/app/emails/WelcomeEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// This is the correct App Router format with named export
export async function POST(request: Request) {
  try {
    // Get the name 
    const { name } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["scadmsez@gmail.com"],
      subject: "Welcome",
      react: WelcomeEmail({ name }),
    });

    if (error) { 
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
