import { cronJobs } from "convex/server";
import { api } from "./_generated/api";

const crons = cronJobs();

crons.weekly(
  "send weekly newsletter",
  {
    hourUTC: 9, // 9 AM
    minuteUTC: 0, // 0 minutes past the hour
    dayOfWeek: "monday", // Monday
  },
  api.emails.sendWeeklyNewsletter
);

export default crons;