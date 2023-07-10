import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { tsi } from "../assets";

const TrafficSign = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pt-15">
        <div className="relative z-0 bg-primary no-scrollbar">
          <h2 className={`${styles.sectionHeadText}`}>
            Traffic Sign Identifier.
          </h2>

          <p className="text-secondary font-normal p-3.5">
            Determines German traffic signs using a trained neural network.
          </p>
        </div>

        <div className="text-[#b1a7d4] text-lg p-10">
          TensorFlow is a popular open source developed by Google that allows
          you to build various machine learning models, particularly, neural
          networks. In this project, I used a public dataset known as the German
          Traffic Sign Recognition Benchmark (GTSRB) on which I trained and
          tested my neural network.
        </div>

        <div className="flex justify-center">
          <img
            src={tsi}
            alt={"Traffic Sign Results"}
            className="mt-auto self-center"
          />
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(TrafficSign, "traffic");
