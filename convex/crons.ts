import { cronJobs } from "convex/server";
import { api } from "./_generated/api";

const crons = cronJobs();

crons.weekly(
  "send weekly newsletter",
  {
    hourUTC: 9, // Sends at 9 AM UTC
    minuteUTC: 0,
    dayOfWeek: "monday", // Sends every Monday
  },
  api.emails.sendWeeklyNewsletter, // Points to our newsletter sending mutation
  { emails: "example@example.com", name: "Weekly Newsletter" } // Provide required arguments
);
// crons.interval(
//   "test weekly newsletter",
//   { minutes: 1 },
//   api.emails.sendWeeklyNewsletter,
//   {}
// );


export default crons;