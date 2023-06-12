import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] md:bg-circularLightMd md:dark:bg-circularDarkMd  sm:bg-circularLightSm sm:dark:bg-circularDarkSm  lg:bg-circularLightLg lg:dark:bg-circularDarkLg">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
        >
          web
        </motion.div>
        <Skill name="HTML" x="-15vw" y="3vw" />
        <Skill name="Javascript" x="-6vw" y="-8vw" />
        <Skill name="C++" x="13vw" y="-2vw" />
        <Skill name="CSS" x="6vw" y="7vw" />
        <Skill name="GIT/GITHUB" x="17vw" y="-13vw" />
        <Skill name="ReactJS" x="-10vw" y="18vw" />
        <Skill name="Material UI" x="-22vw" y="10vw" />
        <Skill name="Tailwind CSS" x="4vw" y="-24vw" />
        <Skill name="Redux" x="14vw" y="15vw" />
        <Skill name="MongoDB" x="26vw" y="5vw" />
        <Skill name="GraphQL" x="-23vw" y="-14vw" />
        <Skill name="Express" x="-35vw" y="2vw" />
      </div>
    </>
  );
};

export default Skills;
