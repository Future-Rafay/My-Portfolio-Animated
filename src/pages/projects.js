import AnimatedText from "@/components/AnimatedText";
// import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Project1Image from "../../public/images/projects/todo-app.png";
import Project2Image from "../../public/images/projects/weather-app.png";
import Project3Image from "../../public/images/projects/amazon.png";
import Project4Image from "../../public/images/projects/toyota-web.png";
import Project5Image from "../../public/images/projects/resumebuilder.miltestone4.png";
import Project6Image from "../../public/images/projects/blog-web.png";
import FeaturedProject1Image from "../../public/images/projects/e-commerce-web1.png";
import FeaturedProject2Image from "../../public/images/projects/bubble-game-2.png";
import FeaturedProject4Image from "../../public/images/projects/portfolio-customCSS.png";
import FeaturedProject5Image from "../../public/images/projects/snakeGame.png";
import FeaturedProject6Image from "../../public/images/projects/vivedCart.png";




const FramerImage = motion(Image);

const FeaturedProject = ({ title, link, type, summary, image, gitHubLink }) => {
    return (
        <article className="relative w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
            <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[104%] rounded-[2.65rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 md:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <FramerImage
                    priority
                    sizes="(max-width: 768px) 100vw , (max-width: 1200px) 50vw , 50vw"
                    src={image}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-3 text-dark dark:text-light"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-lg xs:my-0 text-dark dark:text-light">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-xs xs:text-[8px]">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
                    {/* <Link href={gitHubLink} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link> */}
                    <Link
                        href={link}
                        target="_blank"
                        className="bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 rounded-lg font-semibold text-lg  sm:px-3 sm:text-sm"
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
        <article className="relative w-full flex flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 sm:p-5 xs:p-4">
            <div className="absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[2.1rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%]  xs:h-[102%] xs:rounded-[1.5rem]" />
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    src={image}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                />
            </Link>
            <div className="w-full flex flex-col items-start mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-3"
                >
                    <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light lg:text-2xl md:text-xl sm:text-lg">
                        {title}
                    </h2>
                </Link>
                <div className="mt-2 w-full flex items-center justify-between">
                    <Link
                        href={link}
                        target="_blank"
                        className="bg-dark text-light p-1 px-6 rounded-lg font-semibold text-lg dark:bg-light dark:text-dark md:text-base md:px-3"
                    >
                        Visit
                    </Link>
                    {/* <Link href={gitHubLink} target="_blank" className="w-10 lg:w-8 ">
                        <GithubIcon />
                    </Link> */}
                </div>
            </div>
        </article>
    );
};

const projects = () => {
    return (
        <>
            <Head>
                <title>Future Rafay | Projects</title>
                <meta
                    name="description"
                    content="A showcase of my work, featuring innovative web development projects crafted with modern frameworks. Discover how I blend design and technology to create engaging solutions."
                />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Imagination Trumps Knowledge!"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-36 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                type="E commerce Website"
                                title="Vivid Cart website"
                                summary="VividCart is a dynamic e-commerce platform designed to redefine online shopping. Built with cutting-edge technologies like Next.js, TypeScript, Tailwind CSS, and shadcn/ui, it delivers a seamless and visually captivating user experience."
                                link="https://vivid-cart-e-commerce.vercel.app/"
                                gitHubLink="https://github.com/Future-Rafay/nextjs-milestone-3-basic-ecommerce-site"
                                image={FeaturedProject6Image}
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Web Game"
                                title="Snake Game"
                                summary="The Snake Game is a dynamic and engaging project built using Next.js, JavaScript, and styled with Tailwind CSS, showcasing my skills in frontend development and responsive design. The game features smooth controls, a vibrant grass-themed UI with a cheerful yellow emoji snake 🟡, and exciting food mechanics, including randomly spawning items like apples 🍎 and cookies 🍪. Fully responsive, it offers a seamless experience across all devices, from desktops to mobiles. Through this project, I honed my problem-solving skills, improved my understanding of responsive layouts, and deepened my expertise in creating user-friendly interfaces. Special thanks to AI tools for guiding me throughout this rewarding journey. "
                                link="https://snake-game-abdul-rafays-projects-87eac4f7.vercel.app/"
                                gitHubLink="/"
                                image={FeaturedProject5Image}
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Project"
                                title="Blog website"
                                summary="FR blogs is a modern content platform built with Sanity.io, Next.js, TypeScript, and Tailwind CSS, offering a seamless and engaging reading experience. Featuring dynamic content management, responsive design, dark mode integration, and SEO optimization, this blog combines functionality with aesthetics to deliver insightful content in a visually appealing interface. It’s a testament to my ability to create scalable, user-centric web applications with cutting-edge technologies."
                                link="https://blog-web-nextjs-sanity-shadcn.vercel.app/"
                                gitHubLink="/"
                                image={Project6Image}
                            />
                        </div>
                        {/* <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Tool Project"
                                title="CV dara Resume Builder App"
                                summary="CV Dara is a web-based application that simplifies creating and customizing professional resumes. Built with HTML, JavaScript, and CSS, it features a user-friendly form where users can input personal information, education, experience, and skills. This data is dynamically rendered into a styled resume template for a polished final result. With data persistence, users can easily revisit and update their resumes. CV Dara highlights practical front-end development skills, focusing on responsive design, dynamic data handling, and enhancing user experience, making it an efficient tool for anyone needing a quick, customizable resume solution."
                                link="https://resume-builder-milestone4-one.vercel.app/"
                                gitHubLink="/"
                                image={Project5Image}
                            />
                        </div> */}
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Featured Project"
                                title="E Commerce Web"
                                summary="Prime Emporium is a premium e-commerce platform offering a sleek, dark-themed design for an elegant shopping experience. The homepage features a powerful tagline, Elevate Your Lifestyle with Prime Emporium, and invites users to explore high-quality products. The Prime Mens Wear section showcases sophisticated fashion with minimalistic product cards and high-quality images. The refined color palette of charcoal gray, champagne, and burgundy adds sophistication. The website includes essential features like a search bar, cart icon, and organized categories, ensuring easy navigation. Prime Emporium is not just a store but a destination for those seeking to elevate their wardrobe and lifestyle."
                                link="https://e-commerce-web-abdul-rafays-projects-87eac4f7.vercel.app/"
                                gitHubLink="/"
                                image={FeaturedProject1Image}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Project"
                                title="Amazon Home page clone"
                                link="https://amazon-clone-abdul-rafays-projects-87eac4f7.vercel.app/"
                                gitHubLink="/"
                                image={Project3Image}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Project"
                                title="Toyota Showroom Web"
                                link="https://toyota-showroom-web-custom-css.vercel.app/"
                                gitHubLink="/"
                                image={Project4Image}
                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                type="Featured Project"
                                title="Bubble Game"
                                summary="Bubble Game is an interactive web-based game where players click on bubbles that match a target number. The game includes a start menu and a timer to track time and score. Players enjoy engaging sound effects for events like a timer end or successful bubble click. With a responsive design, it adapts seamlessly to various devices. The game features a visually appealing color theme with light blue and aqua bubbles, dark navy UI, and bright yellow highlights for the score and timer, offering a fun and dynamic user experience."
                                link="https://bubble-game-abdul-rafays-projects-87eac4f7.vercel.app/"
                                gitHubLink="/"
                                image={FeaturedProject2Image}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Project"
                                title="Todo List App"
                                link="https://todo-app-abdul-rafays-projects-87eac4f7.vercel.app/"
                                gitHubLink="/"
                                image={Project1Image}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Project"
                                title="Weather App"
                                link="https://weather-app-abdul-rafays-projects-87eac4f7.vercel.app/"
                                gitHubLink="/"
                                image={Project2Image}
                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                type="Porfolio"
                                title="My another Portfolio"
                                summary="This portfolio is clone of my origonal porfolio but with custom css and made in only 2 hours on next js"
                                link="https://my-portfolio-custom-css-abdul-rafays-projects-87eac4f7.vercel.app/"
                                gitHubLink="/"
                                image={FeaturedProject4Image}
                            />
                        </div>

                        {/* <div className="col-span-12">
                            <FeaturedProject
                                type="Featured Project"
                                title="Employee Management System"
                                summary="This Employee Management System is a web application designed to streamline the management of employee tasks and data. Developed using JavaScript, TypeScript, and Tailwind CSS, the system provides functionalities like task assignment, tracking task statuses, and role-based access control for both admins and employees. Key features include:Role-based System: Admins can manage employee data, tasks, and assign roles, while employees can track and update their own tasks.Task Management: The system enables easy task creation, updating, and status tracking (New, Active, Completed, Failed). Tasks can be assigned to specific employees, with progress monitored in real time.Dynamic Task Updates: Task statuses change based on user interaction (e.g., 'Accept' for starting a task, 'Mark as Completed' or 'Mark as Failed').Employee Data: The system manages essential employee information such as personal details, task count, and task-related data.This project showcases my ability to manage complex systems with attention to detail, utilizing modern web development technologies to create an intuitive and efficient solution for employee task management."
                                link="https://bubble-game-abdul-rafays-projects-87eac4f7.vercel.app/"
                                gitHubLink="/"
                                image={FeaturedProject3Image}
                            />
                        </div> */}

                    </div>
                </Layout>
            </main>
        </>
    );
};

export default projects;
