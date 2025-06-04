import * as React from 'react';
import { Html, Head, Preview, Tailwind, Body, Container, Section, Heading, Text, Button, Link, Img } from '@react-email/components';

interface WeeklyNewsletterProps {
  name: string;
  crewName?: string;
  crewRank?: number;
}

export const WeeklyNewsletterEmail = ({ crewName, crewRank }: WeeklyNewsletterProps) => {
  const previewText = "This week’s trivia lineup is here! Don’t miss our upcoming games.";

  // Example schedule data – in practice this might be passed in or fetched
  const schedule = [
    { day: "Tuesday", date: "May 20", time: "12:00 PM ", theme: "Logo" },

    {
      day: "",
      date: "",
      time: "9:00 PM ",
      theme: "Global Geography",
    },
    {
      day: "Thursday",
      date: "May 22",
      time: "3:00 PM ",
      theme: "Odd one out ",
    },
    {
      day: "",
      date: "",
      time: "9:00 PM ",
      theme: "Know your Flags",
    },
    {
      day: "Sunday",
      date: "May 25",
      time: "3:00 PM ",
      theme: "True or False",
    },
    {
      day: "",
      date: "",
      time: "9:00 PM ",
      theme: "Bible Trivia",
    },
  ];

  return (
    <Html lang='en'>
      <Head>
        <meta name='color-scheme' content='light dark' />
        <meta name='supported-color-schemes' content='light dark' />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className='bg-white font-sans text-[14px] leading-[20px] text-black m-0 p-0'>
          <Container className='mx-auto p-4 w-[600px]'>
            {/* Banner Image */}
            <Section className='mb-6'>
              <a href='#'>
                <Img
                  src='https://res.cloudinary.com/dhhhrvooa/image/upload/v1747820315/db3oyhplr27iek6vms5h.png'
                  alt='Battle on Air Welcome Banner'
                  width='600'
                  height='200'
                  className='w-full rounded-lg bg-cover bg-center h-32 '
                />
              </a>
            </Section>
            {/* Header */}
            {/* <Heading className='text-[20px] font-bold text-[#114b5f] mb-4'>
              Hey here’s your weekly trivia update! 🗞️
            </Heading> */}
            {/* Crew League Reminder/Status */}
            <Section className='mb-4'>
              {crewName ? (
                <Text className='text-[14px] mb-2'>
                  <strong>Crew League Update:</strong> Your crew **{crewName}**
                  is currently ranked <strong>#{crewRank}</strong>! 🙌 Keep it
                  up by playing together this week and climbing the leaderboard.
                  Every game you play earns crew points.
                </Text>
              ) : (
                // ...existing code...

                <Text className='text-[14px] mb-2 text-gray-800'>
                  <strong>
                    🏆 &quot;Crew League&apos;s heating up — and your crew needs
                    a hero (yes, you)!&quot;
                  </strong>{" "}
                  This week on BattleOnAir, the trivia battlefield is buzzing
                  and crews are climbing. Whether you&apos;re leading the charge
                  or just here for good vibes and guesses, every round earns
                  points. Show up, rep your crew, and let&apos;s turn trivia
                  into triumph! 🎯🔥
                </Text>

                // ...existing code...
              )}
            </Section>

            {/* Call-to-Action (optional, e.g., view full schedule) */}

            <Section className='text-center mb-12'>
              <Button
                href='https://battleonair.com/league'
                className='bg-[#ffa332] text-[#114b5f] text-[14px] font-semibold py-4 px-4 rounded no-underline'
              >
                Join the Crew League Now
              </Button>
            </Section>

            {/* riddle */}

            <Section
              style={{
                backgroundColor: "#e4fde1",
                padding: "24px",
                borderRadius: "12px",
                marginTop: "20px",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              {/* Founder Introduction */}
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#114b5f",
                  marginBottom: "16px",
                }}
              >
                Riddle me this:
              </Text>

              {/* Founder Message */}
              <Text
                style={{
                  fontSize: "16px",
                  fontStyle: "italic",
                  color: "#114b5f",
                  lineHeight: "24px",
                  textAlign: "center",
                }}
              >
                🧩 I have cities, but no houses. I have mountains, but no trees.
                I have water, but no fish. You can travel across me, but you’ll
                never leave your seat. What am I?
              </Text>
            </Section>

            {/* This Week's Schedule */}
            <Section className='mb-4'>
              <Heading className='text-[18px] font-semibold text-black mb-2'>
                📅 Week 5/12 of Battle on air Trivia Games ({schedule.length}{" "}
                total):
              </Heading>
            </Section>
            <Section className='mb-4'>
              <table className='w-full border border-collapse text-left text-[14px]'>
                <thead>
                  <tr className='bg-[#f4f4f4]'>
                    <th className='border border-gray-600 px-3 py-2'>Day</th>
                    <th className='border border-gray-600 px-3 py-2'>Date</th>
                    <th className='border border-gray-600 px-3 py-2'>Time</th>
                    <th className='border border-gray-600 px-3 py-2'>Theme</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((game, idx) => (
                    <tr key={idx} className='odd:bg-white even:bg-[#fafafa]'>
                      <td className='border border-gray-800 px-3 py-2'>
                        {game.day}
                      </td>
                      <td className='border border-gray-800 px-3 py-2'>
                        {game.date}
                      </td>
                      <td className='border border-gray-800 px-3 py-2'>
                        {game.time}
                      </td>
                      <td className='border border-gray-800 px-3 py-2'>
                        {game.theme}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>

            {/* Divider Line */}
            <Section className='mb-6'>
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid #e5e7eb",
                  margin: "24px 0",
                }}
              />
            </Section>

            {/* other trivia games  */}

            {/* Support and Footer */}
            <Text className='text-[14px] mb-4'>
              Good luck in this week’s games! If you have any questions, reach
              out anytime at
              <Link
                href='mailto:support@battleonair.com'
                className='text-[#4bb8ff] no-underline'
              >
                {" "}
                support@battleonair.com
              </Link>
              .
            </Text>
            <Section className='border-t border-gray-300 pt-4 text-center text-[12px] text-gray-600'>
              <Text className='mb-2'>
                <Link
                  href='https://www.tiktok.com/search?q=battle%20on%20air&t=1747836175901'
                  className='mx-1 text-gray-600 no-underline'
                >
                  Tiktok
                </Link>{" "}
                |
                <Link
                  href='https://www.instagram.com/battleonair_/'
                  className='mx-1 text-gray-600 no-underline'
                >
                  Instagram
                </Link>
              </Text>
              <Text className='mb-2'>
                Thank you for subscribing to our weekly emails
              </Text>
              <Text>© 2025 Battle on Air •</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WeeklyNewsletterEmail;
