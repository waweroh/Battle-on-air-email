import * as React from 'react';
import { Html, Head, Preview, Tailwind, Body, Container, Section, Heading, Text, Button, Link, Img } from '@react-email/components';

interface WeeklyNewsletterProps {
  name: string;
  crewName?: string;
  crewRank?: number;
}

export const WeeklyNewsletterEmail = ({ name, crewName, crewRank }: WeeklyNewsletterProps) => {
  const previewText = "This week’s trivia lineup is here! Don’t miss our upcoming games.";

  // Example schedule data – in practice this might be passed in or fetched
  const schedule = [
    { day: "Monday", date: "April 28", time: "7:00 PM ", theme: "General Knowledge" },
    { day: "Wednesday", date: "April 30", time: "7:00 PM ", theme: "Movie Trivia Night" },
    { day: "Saturday", date: "May 3", time: "6:00 PM ", theme: "Sports Special" },
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
                  src='https://res.cloudinary.com/dhhhrvooa/image/upload/v1747741635/jla5buacmdr73cojo1rk.png'
                  alt='Battle on Air Welcome Banner'
                  width='600'
                  height='200'
                  className='w-full rounded-lg'
                />
              </a>
            </Section>
            {/* Header */}
            <Heading className='text-[20px] font-bold text-[#114b5f] mb-4'>
              Hey here’s your weekly trivia update! 🗞️
            </Heading>
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
                <Text className='text-[14px] mb-2'>
                  <strong>Crew League:</strong> Join a crew to compete as a
                  team! Team up with friends to earn points and win collective
                  prizes. It’s more fun together –{" "}
                  <Link
                    href='https://battleonair.com/crew-league'
                    className='text-[#4bb8ff] no-underline'
                  >
                    learn more and join a crew here
                  </Link>
                  .
                </Text>
              )}
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
                      <td className='border border-gray-600 px-3 py-2'>
                        {game.day}
                      </td>
                      <td className='border border-gray-600 px-3 py-2'>
                        {game.date}
                      </td>
                      <td className='border border-gray-600 px-3 py-2'>
                        {game.time}
                      </td>
                      <td className='border border-gray-600 px-3 py-2'>
                        {game.theme}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>

            {/* Call-to-Action (optional, e.g., view full schedule) */}
            <Section className='text-center mb-6'>
              <Button
                href='https://battleonair.com/schedule'
                className='bg-[#ffa332] text-[#114b5f] text-[14px] font-semibold py-2 px-4 rounded no-underline'
              >
                View Full Schedule
              </Button>
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

            <Section className='mb-6'>
              <Heading className='text-[16px] font-medium text-gray-700 mb-2'>
                🔍 Other Trivia You Might Like:
              </Heading>
              <table className='w-full border border-collapse text-left text-[13px]'>
                <thead>
                  <tr className='bg-[#f9f9f9]'>
                    <th className='border border-gray-200 px-3 py-2 text-gray-600'>
                      Day
                    </th>
                    <th className='border border-gray-200 px-3 py-2 text-gray-600'>
                      Event
                    </th>
                    <th className='border border-gray-200 px-3 py-2 text-gray-600'>
                      Time
                    </th>
                    <th className='border border-gray-200 px-3 py-2 text-gray-600'>
                      Platform
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-white'>
                    <td className='border border-gray-200 px-3 py-2'>
                      Tuesday
                    </td>
                    <td className='border border-gray-200 px-3 py-2'>
                      Trivia Titans: Music Madness
                    </td>
                    <td className='border border-gray-200 px-3 py-2'>
                      8:30 PM
                    </td>
                    <td className='border border-gray-200 px-3 py-2'>
                      <Link
                        href='https://triviatitans.com'
                        className='text-[#4bb8ff] underline'
                      >
                        TriviaTitans.com
                      </Link>
                    </td>
                  </tr>
                  <tr className='bg-[#fdfdfd]'>
                    <td className='border border-gray-200 px-3 py-2'>
                      Thursday
                    </td>
                    <td className='border border-gray-200 px-3 py-2'>
                      BrainBrawl: Science Slam
                    </td>
                    <td className='border border-gray-200 px-3 py-2'>
                      9:00 PM
                    </td>
                    <td className='border border-gray-200 px-3 py-2'>
                      <Link
                        href='https://brainbrawl.io'
                        className='text-[#4bb8ff] underline'
                      >
                        BrainBrawl.io
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Text className='text-[12px] italic text-gray-500 mt-2'>
                Note: These are external trivia events we think you might enjoy.
                BattleOnAir is not affiliated with these platforms.
              </Text>
            </Section>

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
                  href='https://tiktok.com/battleonair'
                  className='mx-1 text-gray-600 no-underline'
                >
                  Tiktok
                </Link>{" "}
                |
                <Link
                  href='https://twitter.com/battleonair'
                  className='mx-1 text-gray-600 no-underline'
                >
                  Twitter
                </Link>{" "}
                |
                <Link
                  href='https://instagram.com/battleonair'
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
