import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { battery1 } from "../assets";

const Ecocar = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=" pt-15 h-full">
        <div className="relative z-0 h-full">
          <h2 className={`${styles.sectionHeadText}`}>
            McMaster EcoCar Challenge
          </h2>

          <p className="text-[#370926] font-normal p-3.5 text-center">
            A GMC sponsored engineering competition.
          </p>
          <img src={battery1} className="pt-10" />

          <p className="text-[#370926] font-normal p-3.5 text-left">
            This 3D design was made for a battery compartment that was to be
            water-proof, fire-proof, and yet still allow for the electrical
            components to be ventilated.
            <br />
            <br /> My thought process was to create something unique and to use
            a material that allowed air to flow but not water. The material I
            came up with is Gore-Tex aka Teflon. This material will line all
            openings of the compartment such as the fan holes and ventilation
            holes in the top so that air can freely cool the system.{" "}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Ecocar, "ecocar");
