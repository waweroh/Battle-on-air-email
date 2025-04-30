"use client";
import { WelcomeEmail } from "./emails/WelcomeEmail";
import { PromotionalEmail } from "./emails/PromotionalEmail";
import { WeeklyNewsletterEmail } from "./emails/WeeklyNews";

export default function Home() {
  const sendEmail = async () => {
    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "John Doe",
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email: " + data.error);
      }
    } catch (error) {
      alert("Error sending email: " + error);
    }
  };

  return (
    <div className='flex flex-col gap-8 p-4'>
      <div className='flex justify-end mb-4'>
        <button
          onClick={sendEmail}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Send Test Email
        </button>
      </div>

      <section>
        <h2 className='text-xl font-bold mb-4'>Welcome Email Preview</h2>
        <div className='border rounded-lg p-4'>
          <WelcomeEmail name='John Doe' />
        </div>
      </section>

      <section>
        <h2 className='text-xl font-bold mb-4'>Promotional Email Preview</h2>
        <div className='border rounded-lg p-4'>
          <PromotionalEmail name='John Doe' />
        </div>
      </section>

      <section>
        <h2 className='text-xl font-bold mb-4'>Weekly Newsletter Preview</h2>
        <div className='border rounded-lg p-4'>
          <WeeklyNewsletterEmail name='John Doe' />
        </div>
      </section>
    </div>
  );
}
