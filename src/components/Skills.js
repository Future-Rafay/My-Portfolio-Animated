import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light text-lg py-3 px-6 shadow-dark cursor-pointer absolute border-2 border-dark border-solid hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-semibold xs:border-none xs:dark:border-none
            '
            whileHover={{scale: 1.1}}
            initial={{x:0,y:0}}
            whileInView={{x:x ,y:y , transition:{duration : 3}}}
          
            viewport={{once : true}}
        >
            {name}
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl w-full mt-64 text-center md:text-6xl md:mt-32 sm:mt-16 sm:text-4xl text-dark dark:text-light">
                Skills
            </h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd    sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
                <motion.div
                    className="flex items-center justify-center bg-dark text-light text-xl rounded-full font-semibold p-8 shadow-dark cursor-pointer border-2 border-dark border-solid hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light lg:p-6 md:p-4 xs:text-sm xs:p-2 sm:p-2 sm:text-xs "
                    whileHover={{ scale: 1.1}}
                >
                    Web
                </motion.div>
                <Skill name="CSS" x="-20vw" y="-5vw" />
                <Skill name="HTML" x="-5vw" y="-7vw" />
                <Skill name="TailwindCSS" x="8vw" y="10vw" />
                <Skill name="JavaScript" x="16vw" y="-12vw" />
                <Skill name="TypeScript" x="-18vw" y="11vw" />
                <Skill name="Next js" x="27vw" y="5vw" />
                <Skill name="React js" x="-15vw" y="-16vw" />
                <Skill name="Figma" x="-35vw" y="-5vw" />

                
            </div>
        </>
    );
};

export default Skills;
