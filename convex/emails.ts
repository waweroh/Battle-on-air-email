import { action } from "./_generated/server";
import { api } from "./_generated/api";
import { v } from "convex/values";

export const sendWeeklyNewsletter = action({
  args: v.object({
    name: v.string(),
    // emails: v.array(v.string()),
    emails: v.string(),
  }),
  returns: v.object({
    success: v.number(),
    failed: v.number(),
    errors: v.array(
      v.object({
        email: v.string(),
        error: v.string(),
        
      })
    ),
  }),
  handler: async (ctx) => {
    const subscribers = await ctx.runQuery(api.subscribers.getSubscribers);
    const API_URL =
      "https://a1ea-41-80-118-185.ngrok-free.app/api/emails";

    const results: {
      success: number;
      failed: number;
      errors: { email: string; error: string }[];
    } = {
      success: 0,
      failed: 0,
      errors: [],
    };

    for (const subscriber of subscribers) {
      try {
        const response = await fetch(`${API_URL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: subscriber.name,
            email: subscriber.email,
            type: "weekly-newsletter",
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to send email");
        }

        results.success++;
      } catch (error) {
        results.failed++;
        results.errors.push({
          email: subscriber.email,
          error: (error as Error).message,
        });
      }
    }

    return results;
  },
});
