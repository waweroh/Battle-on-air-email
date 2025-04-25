import { WelcomeEmail } from "./emails/welcome";
import { PromotionalEmail } from "./emails/promotionalEmail";
import { WeeklyNewsletterEmail } from "./emails/weeklyNews";

export default function Home() {
  return (
    <div className='flex flex-col gap-8 p-4'>
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
