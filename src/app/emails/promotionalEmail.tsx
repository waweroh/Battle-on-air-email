import * as React from 'react';
import { Html, Head, Preview, Tailwind, Body, Container, Section, Heading, Text, Button, Img, Link } from '@react-email/components';

interface PromotionalEmailProps {
  name: string;
}

export const PromotionalEmail = ({ name }: PromotionalEmailProps) => {
  const previewText = "New in Battle on Air: Trivia Streak Challenge + Bonus Points this week!";

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
              <a href="">
                <Img
                  src='https://res.cloudinary.com/dhhhrvooa/image/upload/v1746789746/vtrbjayqc8qvockn5kqf.png'
                  alt='Battle on Air Welcome Banner'
                  width='600'
                  height='200'
                  className='w-full rounded-lg'
                />
              </a>
            </Section>
            {/* Header / Feature Announcement */}
            <Heading className='text-[22px] font-bold text-[#114b5f] mb-4'>
              Hey {name}! We’ve got something new for you 🎁
            </Heading>
            {/* Feature Highlight Section */}
            <Section className='mb-4'>
              <Heading className='text-[18px] font-semibold text-black mb-2'>
                🔥 Introducing: Trivia Streak Challenge
              </Heading>
              <Text className='text-[14px] mb-3'>
                Maintain a winning streak and earn extra rewards! With the new
                **Trivia Streak Challenge**, every day you participate in a
                quiz, your streak grows.
              </Text>
              <Text className='text-[14px] mb-3'>
                <strong>Special Offer:</strong> For **this week only**, every
                player who reaches a 3-day streak will get **500 bonus points**
                added to their account. 🏅 Don’t miss out on this chance to
                boost your score and help your crew by simply playing daily!
              </Text>
            </Section>
            {/* Call-to-Action */}
            <Section className='text-center mb-6'>
              <Button
                href='https://battleonair.com/trivia-streak'
                className='bg-[#ffa332] text-[#114b5f] text-[16px] font-bold py-3 px-6 rounded no-underline'
              >
                Start Your Trivia Streak!
              </Button>
            </Section>
            {/* Closing and Support */}
            <Text className='text-[14px] mb-4'>
              Gather your wits and dive in – the streak challenge is on. We
              can’t wait to see how far you go! If you have any questions or
              feedback about this new feature, reply to this email or reach us
              at
              <Link
                href='mailto:support@battleonair.com'
                className='text-[#4bb8ff] no-underline'
              >
                {" "}
                support@battleonair.com
              </Link>
              .
            </Text>
            <Text className='text-[14px] mb-2'>
              Happy quizzing,
              <br />
              The Battle on Air Team
            </Text>
            {/* Footer */}
            <Section className='border-t border-gray-300 pt-4 text-center text-[12px] text-gray-600'>
              <Text className='mb-2'>
                <Link
                  href='https://tiktok.com/battleonair'
                  className='mx-1 text-gray-600 no-underline'
                >
                  TikTok
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
                To stop receiving these emails, you can{" "}
                <Link
                  href='<%- unsubscribeUrl %>'
                  className='text-gray-600 no-underline'
                >
                  unsubscribe
                </Link>{" "}
                at any time.
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

export default PromotionalEmail;
