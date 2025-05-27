import { mutation } from "./_generated/server";
import { api } from "./_generated/api";
import { sendEmail } from "../lib/emailService"; // You'll create this next

export const sendWeeklyNewsletter = mutation({
  args: {},
  handler: async (ctx) => {
    // Get subscribers using our query
    const subscribers = await ctx.runQuery(api.subscribers.getSubscribers);

    for (const subscriber of subscribers) {
      try {
        // Send email using returned data
        await sendEmail({
          to: subscriber.email,
          name: subscriber.name,
          type: "weekly-newsletter"
        });

        // Update lastEmailSent using _id
        await ctx.db.patch(subscriber._id, {
          lastEmailSent: new Date().toISOString()
        });
      } catch (error) {
        console.error(`Failed to send email to ${subscriber.email}:`, error);
      }
    }
  }
});