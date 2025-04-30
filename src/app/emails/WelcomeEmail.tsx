import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Tailwind,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Button,
  Img,
  Link,
} from "@react-email/components";

interface WelcomeEmailProps {
  name: string;
}

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => {
  const previewText = `Welcome to Battle on Air, ${name}! Get ready to test your trivia skills.`;

  return (
    <Html lang='en'>
      <Head>
        <meta name='color-scheme' content='light dark' />
        <meta name='supported-color-schemes' content='light dark' />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className='bg-white font-sans text-[14px] leading-[20px] text-black m-0 p-0'>
          <Container className='mx-auto my-0 p-4 w-[600px]'>
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
            {/* Header / Welcome Greeting */}
            
            {/* <Text className='text-[14px] mb-4'>
              Hi {name},<br />
              I’m **Alex**, the founder of Battle on Air. I’m thrilled to have
              you join our trivia community. Our vision is to bring people
              together through fun, competitive live trivia games. Every quiz is
              a new adventure, and we built Battle on Air to make each one
              exciting and memorable.
            </Text> */}

            {/* Crew League Introduction */}
            <Heading className='text-[18px] font-semibold text-black mb-2 mt-10'>
              🚩 Crew League – Play in Teams!
            </Heading>
            <Section className='mb-6'>
              <Img
                src='/crewleague.png'
                alt='Crew League Banner'
                width='600'
                height='200'
                className='w-full rounded-lg'
              />
            </Section>
            <Text className='text-[14px] mb-4'>
              The Crew League lets you team up with friends and compete
              together. Join a crew, pool your knowledge, and climb the
              leaderboard as a team. It’s not just about winning quizzes—it’s
              about building a community. We can’t wait to see the crew you
              assemble and how high you can rank!
            </Text>
            {/* Call-to-Action Button to Join Crew League */}
            <Section className='text-center mb-6'>
              <Button
                href='https://battleonair.com/crew-league'
                className='bg-[#ffa332] text-[#114b5f] text-[16px] font-bold py-3 px-6 rounded no-underline'
              >
                Join the Crew League
              </Button>
            </Section>
            <Section className='bg-[#e4fde1] p-6 rounded-lg mb-6 mt-5 relative overflow-visible'>
              <Text className='text-[16px] italic text-[#114b5f] leading-[24px] text-center'>
                “The best part about Battle on Air isn’t just the trivia – it’s
                the community we’re building together.”
                <br />
                <strong>- Alex, Founder</strong>
              </Text>

              {/* Founder’s Avatar Half-Inside Bubble */}
              <Img
                src='https://images.unsplash.com/photo-1707676602290-acfdedc6b41d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Founder Avatar'
                width='60'
                height='60'
                className='absolute bottom-[-30px] right-4 rounded-full border-2 border-[#4bb8ff] object-cover ring-2 ring-white aspect-square'
              />
            </Section>
            {/* Support and Closing */}
            <Text className='text-[14px] mb-4 mt-10'>
              If you have any questions or need help getting started, just hit
              reply or email us at
              <Link
                href='mailto:support@battleonair.com'
                className='text-[#4bb8ff] no-underline'
              >
                {" "}
                support@battleonair.com
              </Link>
              . We’re here to help you make the most of Battle on Air!
            </Text>
            <Text className='text-[14px] mb-2'>
              Good luck and have fun,
              <br />
              **Alex** and the Battle on Air Team
            </Text>
            {/* Footer with Social Media Icons and Unsubscribe */}
            <Section className='border-t border-gray-300 pt-4 text-center text-[12px] text-gray-600'>
              {/* Social media icons (using placeholder URLs and alt text) */}
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
              <Text className='text-[12px] text-gray-600 mt-2'>
                You’re receiving this email because you joined Battle on Air. If
                this wasn’t you or you’d like to stop receiving emails, you can{" "}
                <Link
                  href='<%- unsubscribeUrl %>'
                  className='text-gray-600 no-underline'
                >
                  unsubscribe
                </Link>{" "}
                at any time.
              </Text>
              <Text className='text-[12px] text-gray-600'>
                © 2025 Battle on Air • 123 Trivia Way, New York, NY 10001
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;
