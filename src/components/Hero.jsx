import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { me } from "../assets";

const Hero = () => {
  return (
    <div className="relative w-full h-[800px] flex gap-20 ml-10">
      <div className=" w-[500px] h-full text-black">
        <h1
          className={`${styles.heroHeadText} text-white font-black justify-center items-center py-20`}
        >
          Itteba
        </h1>
        <h1
          className={`${styles.heroHeadText} text-[#dfd9ff] font-black justify-center items-center -mt-10`}
        >
          Gilani
        </h1>

        <p className={`${styles.heroSubText} mt-20`}>
            Engineer <span className="text-[#dfd9ff]">by day,</span>
          </p>
          <p className={`${styles.heroSubText} mt-5`}>
            Developer <span className="text-[#dfd9ff]">by night,</span>
          </p>
          
          <p className={`${styles.heroSubText} mt-5`}>
            Photographer <span className="text-[#dfd9ff]">24x7.</span>
          </p>
      </div>
      <div className=" w-[500px] h-full text-black pl-[35px] ">
        <img width="428" src={me} className="rounded-xl shadow-3xl"/>
      </div>
      {/* <div
        className={`relative w-[600px] pl-5 gap-5 bg-white`}
      >
        <div className="text-left justify-center items-center ">
          <h1
            className={`${styles.heroHeadText} text-white font-black justify-center items-center py-20`}
          >
            Itteba{" "}
            <span className="text-[#dfd9ff]">
              
              Gilani
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-20`}>
            Engineer <span className="text-[#dfd9ff]">by day,</span>
          </p>
          <p className={`${styles.heroSubText} mt-5`}>
            Developer <span className="text-[#dfd9ff]">by night,</span>
          </p>
          
          <p className={`${styles.heroSubText} mt-5`}>
            Photographer <span className="text-[#dfd9ff]">24x7.</span>
          </p>
        </div>
      </div>

      <div className="my-auto w-[500px] ml-[350px] bg-slate-50">
        <img width="400" src={me} />
      </div>

      <ComputersCanvas/> */}
    </div>
  );
};

export default SectionWrapper(Hero, "home");
