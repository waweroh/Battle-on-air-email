import { query } from "./_generated/server";

export const getSubscribers = query({
  args: {},
  handler: async (ctx) => {
    // This will query your existing users table
    const subscribers = await ctx.db
      .query("users")  // Use your existing table name
      .filter((q) => q.eq(q.field("isSubscribed"), true))
      .collect();

    return subscribers;
  },
});