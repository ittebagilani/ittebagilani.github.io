import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { nim } from "../assets";

const NimAI = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=" pt-15">
        <div className="relative z-0 bg-primary no-scrollbar">
          <h2 className={`${styles.sectionHeadText}`}>Nim AI.</h2>
          <p className="text-secondary font-normal p-3.5">
            Trained a model using reinforcement learning to play the game of Nim.
          </p>
        </div>
        <div className="text-[#b1a7d4] text-lg p-10">
          In this project, I used reinforcement learning to train an AI to play
          the game of Nim. The game involves 4 rows with 1, 3, 5, 7 sticks
          respectively. In each turn, a player is allowed to remove as many
          sticks as they desire from one pile only. The goal is to not be the
          last one to remove a stick.
        </div>

        <div className="flex justify-center">
          <img
            src={nim}
            alt={"Traffic Sign Results"}
            className="mt-auto self-center"
          />
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(NimAI, "nimai");
