import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { room1, room2, room3 } from "../assets";

const ParadiseChamber = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=" pt-15">
        <div className="relative z-0 ">
          <h2 className={`${styles.sectionHeadText}`}>Paradise Chamber.</h2>

          <p className="text-[#370926] text-center font-normal p-3.5">
            A 3D room that includes everything one could ask for.
          </p>
        </div>

        <div className="text-[#370926] text-center text-lg p-10">
          I created this 3D model using the TinkerCAD software and wanted to
          incorporate my own gaming/music production corner, a movie theatre,
          and as every bedroom should have, a bed.
        </div>

        <div className="flex flex-col justify-center m-auto pb-10">
          <img
            src={room1}
            alt={"Paradise Chamber 1"}
            className="mt-auto self-center pb-10"
            width={1000}
          />

          <img
            src={room2}
            alt={"Paradise Chamber 2"}
            className="mt-auto self-center pb-10"
            width={1000}
          />

          <img
            src={room3}
            alt={"Paradise Chamber 3"}
            className="mt-auto self-center pb-10"
            width={1000}
          />
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(ParadiseChamber, "paradisechamber");
