import { query } from "./_generated/server";
import { v } from "convex/values";

export const getSubscribers = query({
  args: {},
  handler: async (ctx) => {
    // This will query your existing users table
    const subscribers = await ctx.db
      .query("trivia_members")  // Use your existing table name
      .filter((q) => q.eq(q.field("isSubscribed"), true))
      .collect();

    return subscribers.map((subscriber) => ({
      _id: subscriber._id,
      name: subscriber.name,
      email: subscriber.email,
      lastEmailSent: subscriber.lastEmailSent,
    }));
  },
});