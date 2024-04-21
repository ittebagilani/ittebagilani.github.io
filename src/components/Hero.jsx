import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { me } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-[800px] flex">
      <div
        className={`relative inset-0 max-w-xl pl-5 flex flex-row gap-5`}
      >
        <div className="text-left justify-center items-center ">
          <h1
            className={`${styles.heroHeadText} text-white font-black justify-center items-center py-20`}
          >
            Itteba{" "}
            <span className="text-[#dfd9ff]">
              <br />
              <br />
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

      <div className="my-auto max-w-xl ml-[350px]">
        <img width="400" src={me} />
      </div>

      {/* <ComputersCanvas/> */}
    </section>
  );
};

export default SectionWrapper(Hero, "home");
