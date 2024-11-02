import React, { useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import FeaturedArticle1 from "../../public/images/articles/create modal component in react using react portals.png";
import FeaturedArticle2 from "../../public/images/articles/create loading screen in react js.jpg";
import Article1 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import Article3 from "../../public/images/articles/pagination component in reactjs.jpg";
import Article2 from "../../public/images/articles/smooth scrolling in reactjs.png";
import Article4 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import Article6 from "../../public/images/articles/What is higher order component in React.jpg";
import Article5 from "../../public/images/articles/What is Redux with easy explanation.png";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX)
        y.set(event.pageY)
    }

    function handleMouseLeave() {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link
            href={link}
            target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            className="capatalize font-bold text-xl hover:underline"
        >
            {title}
            <FramerImage
                style={{ x:-x , y:y }}
                initial={{opacity :0}}
                whileInView={{opacity : 1 , transition:{duration: 0.4}}}
                ref={imgRef}
                src={img}
                alt={title}
                className="w-96 h-auto hidden absolute rounded-lg z-10"
            />
        </Link>
    );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className="relative col-span-1 w-full p-6 bg-light border border-solid border-dark rounded-2xl rounded-bl-3xl dark:bg-dark dark:border-light ">
            <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.2rem] rounded-br-3xl bg-dark" />
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden inline-block rounded-lg"
            >
                <FramerImage
                priority
                  sizes="(max-width: 768px) 100vw , (max-width: 1200px) 50vw , 50vw"
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capatalize text-2xl font-bold my-2 mt-4 hover:underline">
                    {title}
                </h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary font-semibold text-xl dark:text-primaryDark">{time}</span>
        </li>
    );
};

const Articles = ({ img, title, link, time }) => {
    return (
        <motion.li className="relative w-full p-4 py-6 my-8 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 last:mb-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light"
        initial={{ y :200}}
        whileInView={{ y: 0 , transition:{duration:0.8 , ease:"easeInOut"}}}
        viewport={{once : true}}
        >
            <MovingImage title={title} link={link} img={img} />
            <span className="text-primary font-semibold text-lg pl-4 dark:text-primaryDark">{time}</span>
        </motion.li>
    );
};

const articles = () => {
    return (
        <>
            <Head>
                <title>Future Rafay | Articles Page</title>
                <meta
                    name="description"
                    content="A collection of articles on coding, programming frameworks, and tech best practices. Stay informed with expert tips and development trends."
                />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="In-Depth Insights" className="mb-16" />
                    <ul className="grid grid-cols-2 gap-16">
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min"
                            link="/"
                            img={FeaturedArticle1}
                        />
                        <FeaturedArticle
                            title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
                            summary="Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience."
                            time="10 min"
                            link="/"
                            img={FeaturedArticle2}
                        />
                    </ul>
                    <h2 className="font-bold text-5xl w-full text-center mt-32 my-16">
                        All Articles
                    </h2>
                    <ul>
                        <Articles
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            time="8 min"
                            link="/"
                            img={Article1}
                        />
                        <Articles
                            title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
                            time="10 min"
                            link="/"
                            img={Article2}
                        />
                        <Articles
                            title="Creating An Efficient Modal Component In React Using Hooks And Portals"
                            time="9 min"
                            link="/"
                            img={Article3}
                        />
                        <Articles
                            title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
                            time="10 min"
                            link="/"
                            img={Article4}
                        />
                        <Articles
                            title="Redux Simplified: A Beginner's Guide For Web Developers"
                            time="9 min"
                            link="/"
                            img={Article5}
                        />
                        <Articles
                            title="What Is Higher Order Component (Hoc) In React?"
                            time="5 min"
                            link="/"
                            img={Article6}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    );
};

export default articles;
