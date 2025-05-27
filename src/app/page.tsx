"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { WelcomeEmail } from "./emails/WelcomeEmail";
import { PromotionalEmail } from "./emails/promotionalEmail";
import { WeeklyNewsletterEmail } from "./emails/weeklyNews";
import { CldUploadButton } from "next-cloudinary";

export default function Page() {
  const subscribers = useQuery(api.subscribers.getSubscribers);

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

      <main>
        <CldUploadButton uploadPreset='battleonair' />
      </main>

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

      <div>
        <h1>Subscribers</h1>
        {subscribers?.map((sub) => <div key={sub._id}>{sub.email}</div>)}
      </div>
    </div>
  );
}
