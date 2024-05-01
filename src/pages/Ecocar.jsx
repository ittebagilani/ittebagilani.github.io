import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { battery1 } from "../assets";

const Ecocar = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=" pt-15 h-screen">
        <div className="relative z-0 h-full">
          <h2 className={`${styles.sectionHeadText}`}>
            McMaster EcoCar Challenge
          </h2>

          <p className="text-[#370926] font-normal p-3.5 text-center">
            A GMC sponsored engineering competition.
          </p>
          <img src={battery1} className="pt-10"/>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Ecocar, "ecocar");
