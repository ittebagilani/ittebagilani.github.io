import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] xs:m-auto w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full 
      p-[1px] rounded-[25px] shadow-card sm:justify-center sm:items-center sm:m-auto"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          // bg-[#8C7A6B]
          className="rounded-[20px] py-5 px-12 min-h-[280px] flex 
          justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-secondary text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} -z-20`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
      >
        I am a versatile developer with a diverse skill set that encompasses web
        development, game development, and AI technologies. In the world of web
        development, I am well-versed in utilizing cutting-edge tools such as
        Three.js, React, and Tailwind CSS. Venturing into game development, I
        have harnessed the power of Unity and Unreal Engine 4 to create
        captivating virtual worlds and engaging gameplay experiences. In the
        realm of AI technologies, I have delved into PyTorch and Fast.ai, honing
        my skills in various projects ranging from computer vision to natural
        language processing.
      </motion.p>

      <div className="mt-20 flex flex-row gap-10 cursor-pointer">
        {services.map((service, index) => (
          <a href={`#${service.id}`}>
            <ServiceCard key={service.title} index={index} {...service} />
          </a>
          
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
