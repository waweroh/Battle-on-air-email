import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  trivia_members: defineTable({
    name: v.string(),
    email: v.string(),
    isSubscribed: v.boolean(),
    lastEmailSent: v.optional(v.string()),
    createdAt: v.string(),
  }),
});