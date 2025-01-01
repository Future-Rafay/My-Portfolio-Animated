import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilepic from "../../public/images/profile/rafay.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import About from "./about";
import ProjectPage from "./projects";
import ArticalPage from "./articles";
import { motion } from 'framer-motion';

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
                  className="text-dark dark:text-light text-lg ml-4 underline font-semibold capitalize md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-1/2 md:w-full flex items-center justify-center">
              <motion.div
                className="w-[80%] h-auto lg:hidden md:inline-block md:w-full md:mb-14 md:md:order-1 rounded-full shadow-2xl"
                whileHover={{
                  filter: "grayscale(0%)",  // Remove grayscale on hover
                  y: -10,  // Move up on hover
                  rotateX: -5,  // Tilt effect along the X-axis
                  rotateY: 10,  // Tilt effect along the Y-axis
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                    type: "spring",  // Apply spring effect for bounciness
                    stiffness: 400,  // High stiffness for a snappy effect
                    damping: 10,  // Low damping for bounciness
                  },
                }}
                initial={{ filter: "grayscale(100%)" }} // Start with grayscale
                whileTap={{
                  scale: 0.98,  // Slight scale down on tap
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  },
                }}
              >
                <Image
                  priority
                  sizes="(max-width: 768px) 100vw , (max-width: 1200px) 50vw , 50vw"
                  src={profilepic}
                  alt="Future-Rafay"
                  className="rounded-full"
                  width="w-full"
                  height="h-full"
                />
              </motion.div>
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
      <About />
      <ProjectPage />
      <ArticalPage />
    </>
  );
}
