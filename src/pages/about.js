import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilepictwo from "../../public/images/profile/Ai-Rafay.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const about = () => {
    return (
        <>
            <Head>
                <title>Future Rafay | About Page</title>
                <meta
                    name="description"
                    content="Explore my professional background, key skills, and personal journey in web development. Learn what drives me to create user-focused, engaging experiences."
                />
            </Head>
            <main className="flex flex-col w-full items-center justify-center dark:text-light ">
                <Layout className="pt-16">
                    <AnimatedText
                        text="The Story So Far"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 xs:text-xs sm:text-sm md:text-base md:col-span-8">
                            <h2 className="mb-4 font-bold text-xl uppercase text-dark/75 dark:text-light">
                                Meet Abdul Rafay
                            </h2>
                            <p className="font-medium mb-4">
                                Hi, I’m Abdul Rafay, a Student, Front End Web Developer with a
                                passion for creating engaging, user-focused experiences on the
                                web.
                            </p>
                            <p className="font-medium mb-4">
                                My journey in web development began with an entry test at GIAIC.
                                Since then, I’ve carved a path by honing my skills in
                                technologies like Next.js, TypeScript, and JavaScript, building
                                projects that blend creativity with functionality.
                            </p>
                            <p className="font-medium mb-4">
                                When I’m not coding, you’ll find me at the playground, exploring
                                the world, reading, or spending time with friends. I also enjoy
                                giving back by sharing tips with beginners and experimenting
                                with new technologies.
                            </p>
                            <p className="font-medium">
                                I’m always excited to take on new challenges that push my
                                creative and technical boundaries. Let’s create something
                                incredible together!
                            </p>
                        </div>
                        <div
                            className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-4 xl:col-span-4  
                        md:order-1 md:col-span-8"
                        >
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image
                                priority
                                sizes="(max-width: 768px) 100vw , (max-width: 1200px) 50vw , 50vw"
                                src={profilepictwo}
                                alt="AI Generated Rafay"
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                        <div
                            className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3
                        "
                        >
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="text-7xl font-bold inline-block md:text-6xl sm:text-5xl xs:text-4xl text-dark dark:text-light">
                                    11+
                                </span>
                                <h2 className="text-dark/75 text-xl font-medium capitalize dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    satisfied clients
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="text-7xl font-bold inline-block md:text-6xl sm:text-5xl xs:text-4xl text-dark dark:text-light">
                                    8+
                                </span>
                                <h2 className="text-dark/75 text-xl font-medium capitalize dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    projects completed
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="text-7xl font-bold inline-block md:text-6xl sm:text-5xl xs:text-4xl text-dark dark:text-light">
                                    7+
                                </span>
                                <h2 className="text-dark/75 text-xl font-medium capitalize dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Months of experiance
                                </h2>
                            </div>
                        </div>
                    </div>
                </Layout>
                <Skills />
                <Experience />
                <Education />
            </main>
        </>
    );
};

export default about;
