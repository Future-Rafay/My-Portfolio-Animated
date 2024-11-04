import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex items-center flex-col justify-between md:w-[80%]"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capatalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {type}

                </h3>
                <span className="capatalize font-medium text-dark/75 dark:text-light/75  xs:text-sm">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm">{info}</p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className="mb-64">
            <h2 className="font-bold mb-32 w-full text-center text-8xl md:text-6xl sm:text-5xl xs:text-4xl md:mb-16 ">
                Education
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-1 h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        type="Web 3.0"
                        time="Feb 2024 - Present "
                        place="GIAIC"
                        info="I am currently enrolled in an IT course at GIAIC, which equips me with practical skills essential for a career in technology. In the first quarter, I focused on learning TypeScript, HTML, and CSS. Now, in the second quarter, I am advancing my knowledge with Next.js and Tailwind CSS, along with utilizing tools like Framer Motion. This self-directed learning approach demonstrates my commitment to staying updated in the rapidly evolving tech field."
                    />


                    <Details
                        type="Intermediate in engineering."
                        time="2023-Present"
                        place="Govt National Collage , Karachi"
                        info="Currently pursuing Pre-Engineering at Government National College Karachi, focusing on foundational courses in mathematics, physics, and chemistry. This program is shaping my analytical and problem-solving skills and preparing me for a future in engineering"
                    />

                    <Details
                        type="Online Course Work"
                        time="Summer 2024 - Present "
                        place="From Youtube"
                        info="I am actively enhancing my programming skills through online courses on platforms like YouTube. I have focused on key areas such as JavaScript, React, and various front-end programming languages. This self-directed learning approach not only complements my formal education in pre-engineering but also equips me with practical skills that are essential for a career in technology."
                    />

                    <Details
                        type="Matriculation"
                        time="2023"
                        place="Mariam Academy"
                        info="I developed a strong foundation in computer science, mathematics, and the sciences, achieving top scores in these subjects. My time in school was enriched by extracurricular activities, including active membership in the Science and Art Club, Sports Club, and Computer Lab, as well as participating in various inter-school science fairs, all of which deepened my interest in engineering and technology. Additionally, I served as part of the school's administration team, where I further developed my communication and teamwork skills."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Education;
