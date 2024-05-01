import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { me } from "../assets";

const Hero = () => {
  return (
    <div className="relative w-full h-[750px] flex gap-20 ml-12">
      <div className=" w-[500px] h-full text-black ">
        <h1
          className={`${styles.heroHeadText} text-[#003049] pl-5 font-black justify-center items-center py-20`}
        >
          Itteba
        </h1>
        <h1
          className={`${styles.heroHeadText} text-[#370926] pl-5 font-black justify-center items-center -mt-[30px]`}
        >
          Gilani
        </h1>

        <p className={`${styles.heroSubText} mt-20 pl-5 text-[#003049]`}>
            Engineer <span className="text-[#370926]">by day,<br /> </span> Developer <span className="text-[#370926]">by night, <br /></span> Photographer <span className="text-[#370926]">24x7.</span>
          </p>
      </div>
      <div className=" w-[500px] h-[750px]  text-black -mt-5">
        <img width="400" src={me} className="rounded-xl drop-shadow-2xl mx-auto"/>
      </div>

      {/* <ComputersCanvas/> */}
    </div>
  );
};

export default SectionWrapper(Hero, "home");
