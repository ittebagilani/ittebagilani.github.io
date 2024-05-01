import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const CodingClub = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=" pt-15 h-screen">
        <div className="relative h-full">
          <h2 className={`${styles.sectionHeadText}`}>Coding Club</h2>

          <p className="text-[#370926] font-normal p-3.5 text-center">
            A safe environment to learn coding.
            <br />
            <br />
            <br />
            <br />A friend and I decided to create this club in highschool for
            aspriring developers. After getting approved by the school's
            principal, we immediately decided to start a discord server within
            which members could communicate, seek help, and learn through our
            weekly sessions. These sessions were split up by difficulty and I
            lead the Python ones. We started slowly, and worked our way up to
            more challenging concepts.
          </p>
        </div>

        <div className="text-[#370926] text-lg text-center"></div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(CodingClub, "codingclub");
