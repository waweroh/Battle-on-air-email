// import PromotionalEmail from "@/app/emails/promotionalEmail";
import WeeklyNewsletterEmail from "@/app/emails/weeklyNews";
// import { WelcomeEmail } from "@/app/emails/WelcomeEmail";
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
      react: WeeklyNewsletterEmail({ name }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

//file exclude convex

// import { NextResponse } from "next/server";
// import { ConvexHttpClient } from "convex/browser";
// import { api } from "../../../../convex/_generated/api";

// // Initialize Convex client
// const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// export async function POST(request: Request) {
//   try {
//     // Get the name from request
//     const { name, email } = await request.json();

//     // Call Convex mutation
//     const result = await convex.mutation(api.emails.sendWeeklyNewsletter, {
//       name,
//       emails: email,
//     }) as { success: boolean; error?: string } | null;

//     if (result === null || !result.success) {
//       return NextResponse.json({ error: result?.error || "Unknown error" }, { status: 400 });
//     }

//     return NextResponse.json({ success: true }, { status: 200 });
//   } catch (error) {
//     console.error("Failed to send email:", error);
//     return NextResponse.json(
//       { error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// import { WeeklyNewsletterEmail } from "@/app/emails/weeklyNews";
// import { WelcomeEmail } from "@/app/emails/WelcomeEmail";
// import { PromotionalEmail } from "@/app/emails/promotionalEmail";

// const resend = new Resend(process.env.RESEND_API_KEY);

// // This is the correct App Router format with named export
// export async function POST(request: Request) {
//   try {
//     // Get email details from request
//     const {
//       name,
//       email,
//       type = "weekly-newsletter",
//     }: {
//       name: string;
//       email: string;
//       type: "welcome" | "weekly-newsletter" | "promotional";
//     } = await request.json();

//     if (!email) {
//       return NextResponse.json(
//         { error: "Email address is required" },
//         { status: 400 }
//       );
//     }

//     // Select template based on type
//     const templates = {
//       welcome: WelcomeEmail,
//       "weekly-newsletter": WeeklyNewsletterEmail,
//       promotional: PromotionalEmail,
//     };

//     const Template =
//       templates[type as "welcome" | "weekly-newsletter" | "promotional"];

//     // Send email using Resend
//     const { data, error } = await resend.emails.send({
//       from: "Battle on Air <onboarding@resend.dev>",
//       to: [email], // Use the email from the request
//       subject: getEmailSubject(type, name),
//       react: Template({ name }),
//     });

//     if (error) {
//       console.error("Resend error:", error);
//       return NextResponse.json({ error }, { status: 400 });
//     }

//     return NextResponse.json(
//       {
//         success: true,
//         messageId: data?.id || null,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("API route error:", error);
//     return NextResponse.json(
//       { error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }

// function getEmailSubject(type: string, name: string): string {
//   switch (type) {
//     case "welcome":
//       return `Welcome to Battle on Air, ${name}!`;
//     case "weekly-newsletter":
//       return "Your Weekly Trivia Update 🎯";
//     case "promotional":
//       return "Special Offer from Battle on Air 🎮";
//     default:
//       return "Battle on Air Update";
//   }
// }