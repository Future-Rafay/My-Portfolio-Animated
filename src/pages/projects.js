import AnimatedText from "@/components/AnimatedText";
import Brain from "@/components/Brain";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { useScroll } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";
import FeaturedProject1Image from "../../public/images/projects/fashion-studio-website.jpg";
import Image from "next/image";

const FeaturedProject = ({ title, link, type, summary, image, gitHubLink }) => {
    return (
        <article className="relative w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12">
            <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[104%] rounded-[2.65rem] rounded-br-3xl bg-dark" />
            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
            >
                <Image src={image} alt={title} className="w-full h-auto" />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-3"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold ">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={gitHubLink} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="bg-dark text-light p-2 px-6 rounded-lg font-semibold text-lg ml-4"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ title, type, image, link, gitHubLink }) => {
    return (
        <article className="relative w-full flex flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-8">
            <div className="absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[2.1rem] rounded-br-3xl bg-dark" />
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <Image src={image} alt={title} className="w-full h-auto" />
            </Link>
            <div className="w-full flex flex-col items-start mt-4">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-3"
                >
                    <h2 className="my-2 w-full text-left text-2xl font-bold ">{title}</h2>
                </Link>
                <div className="mt-2 w-full flex items-center justify-between">
                    <Link
                        href={link}
                        target="_blank"
                        className="bg-dark text-light p-1 px-6 rounded-lg font-semibold text-lg"
                    >
                        Visit
                    </Link>
                    <Link href={gitHubLink} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

const projects = () => {
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({ container: containerRef });

    return (
        <>
            <Head>
                <title>Future Rafay | Projects</title>
                <meta name="description" content="My Projects" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center">

                <Layout className="pt-16">
                    <AnimatedText
                        text="Imagination Trumps Knowledge!"
                        className="mb-24"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-36">
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Featured Project"
                                title="Crypto Screener Application"
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                link="/"
                                gitHubLink="/"
                                image={FeaturedProject1Image}
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                type="Project"
                                title="Crypto Screener Application"
                                link="/"
                                gitHubLink="/"
                                image={FeaturedProject1Image}
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                type="Project"
                                title="Crypto Screener Application"
                                link="/"
                                gitHubLink="/"
                                image={FeaturedProject1Image}
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Featured Project"
                                title="Crypto Screener Application"
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                link="/"
                                gitHubLink="/"
                                image={FeaturedProject1Image}
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                type="Project"
                                title="Crypto Screener Application"                              
                                link="/"
                                gitHubLink="/"
                                image={FeaturedProject1Image}
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                type="Project"
                                title="Crypto Screener Application"                             
                                link="/"
                                gitHubLink="/"
                                image={FeaturedProject1Image}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default projects;
