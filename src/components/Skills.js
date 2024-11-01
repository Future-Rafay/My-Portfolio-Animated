import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light text-lg py-3 px-6 shadow-dark cursor-pointer absolute'
            whileHover={{ backgroundColor: "#f5f5f5",color :"#1b1b1b", border:"2px solid #1b1b1b", scale: 1.1}}
            initial={{x:0,y:0}}
            whileInView={{x:x ,y:y}}
            transition={{duration : 3}}
            viewport={{once : true}}
        >
            {name}
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl w-full mt-64 text-center relative">
                Skills
            </h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight ">
                <motion.div
                    className="flex items-center justify-center bg-dark text-light text-xl rounded-full font-semibold p-8 shadow-dark cursor-pointer"
                    whileHover={{ backgroundColor: "#f5f5f5",color :"#1b1b1b", border:"2px solid #1b1b1b", scale: 1.1}}
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
