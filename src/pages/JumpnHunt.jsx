import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { googlePlay, jh1, jh2, jh3, jhvideo } from "../assets";

const JumpnHunt = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=" pt-15">
        <div className="relative z-0 bg-primary no-scrollbar">
          <h2 className={`${styles.sectionHeadText}`}>Jump n Hunt.</h2>

          <p className="text-secondary font-normal p-3.5">
            A 2D platformer that takes you through an old village in search of
            apples.
          </p>
        </div>

        <div className="text-[#b1a7d4] text-lg p-10">
          Jump n Hunt is a 2D platformer game I created in the Unity game engine.
          It consists of 10 levels each of which you can only pass once you've
          collected all three of the apples hidden around the map. Pay close
          attention to the spikes and hidden obstacles that can reset the level at any time.
          Download the game from below:
        </div>
        
        <div className="rounded-full cursor-pointer justify-center items-center pb-10">
          <img src={googlePlay} className="w-[200px] h-[170px] m-auto" onClick={() => window.open("https://google.com", "_blank")}/>
        </div>
        <div className="flex flex-col justify-center">
          <img src={jh1} alt={"JH1"} className="mt-auto self-center pb-10" />
          <video width={1200} controls className="m-auto">
            <source src={jhvideo} type="video/mp4"/>
          </video>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(JumpnHunt, "jumpnhunt");
