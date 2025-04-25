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
    { day: "Monday", date: "April 28", time: "7:00 PM ET", theme: "General Knowledge" },
    { day: "Wednesday", date: "April 30", time: "7:00 PM ET", theme: "Movie Trivia Night" },
    { day: "Saturday", date: "May 3", time: "6:00 PM ET", theme: "Sports Special" },
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
              <Img
                src='/boabanner1.png'
                alt='Battle on Air Welcome Banner'
                width='600'
                height='200'
                className='w-full rounded-lg'
              />
            </Section>
            {/* Header */}
            <Heading className='text-[20px] font-bold text-[#114b5f] mb-4'>
              Hey {name}, here’s your weekly trivia update! 🗞️
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
                📅 This Week’s Trivia Games:
              </Heading>
            </Section>
            <Section className='mb-4'>
              <Heading className='text-[18px] font-semibold text-black mb-2'>
                📅 This Week’s Trivia Games:
              </Heading>
              {schedule.map((game, idx) => (
                <Text key={idx} className='text-[14px] mb-1'>
                  •{" "}
                  <strong>
                    {game.day}, {game.date}
                  </strong>{" "}
                  @ {game.time} – {game.theme}
                </Text>
              ))}
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
                Don’t want to receive weekly updates?{" "}
                <Link
                  href='<%- unsubscribeUrl %>'
                  className='text-gray-600 no-underline'
                >
                  Unsubscribe
                </Link>
              </Text>
              <Text>
                © 2025 Battle on Air • 123 Trivia Way, New York, NY 10001
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WeeklyNewsletterEmail;
