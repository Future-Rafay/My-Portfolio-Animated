import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilepic from "../../public/images/profile/Future-Rafay.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Future-Rafay | Home Page</title>
        <meta
          name="description"
          content="I’m a web developer focused on creativity and functionality. Explore my portfolio, from my recent projects to insights on my development process."
        />
      </Head>
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 flex flex-col items-center justify-between self-center lg:w-full lg:text-center md:md:order-2">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
        
                "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled Front-End developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in Next.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/myResume.pdf"
                  target="_blank"
                  className="flex items-center justify-center p-2.5 px-6 bg-dark text-light rounded-lg text-lg font-semibold border-2 border-transparent border-solid hover:bg-light hover:text-dark hover:border-dark 
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className="ml-4 w-6" />
                </Link>
                <Link
                  href="/contact"
                  target="_blank"
                  className="text-dark dark:text-light text-lg ml-4 underline font-semibold capitalize md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-1/2 md:w-full">
              <Image
                priority
                sizes="(max-width: 768px) 100vw , (max-width: 1200px) 50vw , 50vw"
                src={profilepic}
                alt="Future-Rafay"
                className="w-full h-auto lg:hidden md:inline-block md:w-full md:mb-14 md:md:order-1"
                width="w-full"
                height="h-full"
              />
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute inline-block w-28 left-8 bottom-8 md:hidden lg:!absolute xl:w-16">
          <Image
            src={lightbulb}
            alt="Light Bulb Image"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
