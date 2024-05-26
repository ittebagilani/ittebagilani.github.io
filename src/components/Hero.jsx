import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { me } from "../assets";

const Hero = () => {
  return (
    <div className="relative w-full h-[750px] flex ml-12">
      <div className=" w-[500px] h-full text-black flex-col md:block -ml-7 mt-7">
        <h1
          className={`${styles.heroHeadText} text-[#003049] font-black justify-center items-center md:pt-20`}
        >
          Itteba <span className="text-[#370926] leading-loose">Gilani</span>
        </h1>
        {/* <h1
          className={`${styles.heroHeadText} text-[#370926] pl-5 font-black justify-center items-center md:mt-10 `}
        >
          Gilani
        </h1> */}

        <div className="text-left  md:-ml-0">
          <p className={`${styles.heroSubText} text-[#003049] `}>
            Engineer{" "}
            <span className="text-[#370926]">
              by day,
              <br />{" "}
            </span>{" "}
            Developer{" "}
            <span className="text-[#370926]">
              by night, <br />
            </span>{" "}
            Photographer <span className="text-[#370926]">24x7.</span>
          </p>
        </div>
      </div>
      <div className="w-[500px] h-[750px] text-black  md:-mt-5 md:ml-10 pr-14">
        <img
          width="400"
          src={me}
          className="rounded-xl drop-shadow-2xl mx-auto"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Hero, "home");
