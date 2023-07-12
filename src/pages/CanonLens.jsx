import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { camera1, camera2, camera3 } from "../assets";

const CanonLens = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=" pt-15">
        <div className="relative z-0 bg-primary">
          <h2 className={`${styles.sectionHeadText}`}>Canon Lens Replica.</h2>

          <p className="text-secondary font-normal p-3.5">
            A 3D replica of the Canon 70mm - 300mm Kit Lens.
          </p>
        </div>

        <div className="text-[#b1a7d4] text-lg p-10">
          This camera lens I recreated in TinkerCAD. It is a 1:1 model of the
          kit lens I received with my DSLR camera. I also modelled the lens
          cover and the sensor cover.
        </div>

        <div className="flex flex-col justify-center m-auto p-10">
          <img
            src={camera1}
            alt={"Camera 1"}
            className="mt-auto self-center pb-10"
            width={800}
          />

          <img
            src={camera2}
            alt={"Camera 2"}
            className="mt-auto self-center pb-10"
            width={800}
          />

          <img
            src={camera3}
            alt={"Camera 3"}
            className="mt-auto self-center pb-10"
            width={800}
          />
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(CanonLens, "canonlens");
