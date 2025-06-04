// "use client";
// import { useQuery } from "convex/react";
// import { api } from "../../convex/_generated/api";
// import { WelcomeEmail } from "./emails/WelcomeEmail";
// import { PromotionalEmail } from "./emails/promotionalEmail";
// import { WeeklyNewsletterEmail } from "./emails/weeklyNews";
// import { CldUploadButton } from "next-cloudinary";

// export default function Page() {
//   const subscribers = useQuery(api.subscribers.getSubscribers);

//   const sendEmail = async () => {
//     try {
//       const response = await fetch("/api/emails", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: "John Doe",
//         }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Email sent successfully!");
//       } else {
//         alert("Failed to send email: " + data.error);
//       }
//     } catch (error) {
//       alert("Error sending email: " + error);
//     }
//   };

//   return (
//     <div className='flex flex-col gap-8 p-4'>
//       <div className='flex justify-end mb-4'>
//         <button
//           onClick={sendEmail}
//           className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
//         >
//           Send Test Email
//         </button>
//       </div>

//       <main>
//         <CldUploadButton uploadPreset='battleonair' />
//       </main>

//       <section>
//         <h2 className='text-xl font-bold mb-4'>Welcome Email Preview</h2>
//         <div className='border rounded-lg p-4'>
//           <WelcomeEmail name='John Doe' />
//         </div>
//       </section>

//       <section>
//         <h2 className='text-xl font-bold mb-4'>Promotional Email Preview</h2>
//         <div className='border rounded-lg p-4'>
//           <PromotionalEmail name='John Doe' />
//         </div>
//       </section>

//       <section>
//         <h2 className='text-xl font-bold mb-4'>Weekly Newsletter Preview</h2>
//         <div className='border rounded-lg p-4'>
//           <WeeklyNewsletterEmail name='John Doe' />
//         </div>
//       </section>

//       <div>
//         <h1>Subscribers</h1>
//         {subscribers?.map((sub) => <div key={sub._id}>{sub.email}</div>)}
//       </div>
//     </div>
//   );
// }
"use client";
import { useQuery, useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
// import { FunctionReference } from "convex/server";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Get the mutation function
  const sendMemberEmail = useAction(api.emails.sendWeeklyNewsletter);

  // Get existing subscribers
  const subscribers = useQuery(api.subscribers.getSubscribers);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendMemberEmail({
        name: name,
        emails: email,
      });
      // Clear form
      setName("");
      setEmail("");
      alert("Member created successfully!");
    } catch (error) {
      console.error("Failed to create member:", error);
      alert("Failed to create member");
    }
  };

  return (
    <div className='flex flex-col gap-8 p-4'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='name' className='block text-sm font-medium'>
            Name
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='mt-1 block w-full rounded-md border p-2'
            required
          />
        </div>
        <div>
          <label htmlFor='email' className='block text-sm font-medium'>
            Email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-1 block w-full rounded-md border p-2'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        >
          Add Member
        </button>
      </form>

      {/* Display subscribers */}
      <div className='mt-8'>
        <h2 className='text-xl font-bold mb-4'>Current Members</h2>
        {subscribers?.map((sub) => (
          <div key={sub._id} className='p-4 border rounded mb-2'>
            <p>Name: {sub.name}</p>
            <p>Email: {sub.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Removed the unused `useAction` function as it is not needed.
