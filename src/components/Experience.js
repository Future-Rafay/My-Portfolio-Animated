import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex items-center flex-col justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capatalize font-bold text-2xl sm:text-xl xs:text-lg text-dark dark:text-light">
          {position}&nbsp;,
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            &nbsp;@{company}
          </a>
        </h3>
        <span className="capatalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold mb-32  w-full text-center text-8xl md:text-6xl sm:text-5xl xs:text-4xl md:mb-16  text-dark dark:text-light">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-1 h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start min-w-fit justify-between ml-4 xs:ml-2">
          <Details
            position="Front End Developer"
            companyLink="https://www.springz.ch/en"
            company="Springz"
            time="2 months"
            address="Remote, Switzerland"
            work="Designed and developed a fully functional e-commerce store for a startup brand, focusing on clean UI, responsive layout, and seamless shopping experience."
          />

          <Details
            position="Front End Developer"
            companyLink="https://salpers.ch/"
            company="Salpers"
            time="March 2025 - Now"
            address="Remote, Switzerland"
            work="Developed a fully functional online platform called **Foodeez** for a small startup. Built the entire front end of the platform, including product listings, order management, and responsive UI, ensuring a smooth and engaging user experience."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
