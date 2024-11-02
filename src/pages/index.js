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
        <meta name="description" content="I’m a web developer focused on creativity and functionality. Explore my portfolio, from my recent projects to insights on my development process." />
      </Head>
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled Front-End developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in Next.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center justify-center p-2.5 px-6 bg-dark text-light rounded-lg text-lg font-semibold border-2 border-transparent border-solid hover:bg-light hover:text-dark hover:border-dark 
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  "
                >
                  Resume <LinkArrow className="ml-4 w-6" />
                </Link>
                <Link
                  href="mailto:rafaynadeem77@gmail.com"
                  target="_blank"
                  className="text-dark dark:text-light text-lg ml-4 underline font-semibold capitalize"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <Image
                  priority
                  sizes="(max-width: 768px) 100vw , (max-width: 1200px) 50vw , 50vw"
                  src={profilepic}
                  alt="Future-Rafay"
                  width="w-full"
                  height="h-full"
                />
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute inline-block w-28 left-8 bottom-8">
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
