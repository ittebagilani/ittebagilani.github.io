import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { boost1, boost2 } from "../assets";

const BeyondEarth = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=" pt-15">
        <div className="relative z-0 bg-primary no-scrollbar">
          <h2 className={`${styles.sectionHeadText}`}>Beyond Earth.</h2>

          <p className="text-secondary font-normal p-3.5">
            Control a rocket and fly it from the start to the finish while
            avoiding obstacles.
          </p>
        </div>
        <div className="text-[#b1a7d4] text-lg p-10">
          Beyond Earth is a game I created using the Unity game engine. It consists
          of the player piloting a rocket from the start position to the end. It 
          will be soon released to the Google Play Store.
          <div className="flex flex-col justify-center pt-10">
            <img
              src={boost1}
              alt={"Project Boost - 1"}
              className="mt-auto self-center pb-10"
            />

            <img
              src={boost2}
              alt={"Project Boost - 2"}
              className="mt-auto self-center"
            />

            <video width="1200px" height="1000px" controls="controls" className="pt-10">
              <source src="/src/assets/beyondearth.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(BeyondEarth, "beyondearth");
