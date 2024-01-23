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
        I'm a second-year university student, specializing in a unique program 
        that integrates mechanical, electrical, and software engineering concepts. 
        As a versatile developer, I possess a diverse skill set encompassing AI 
        technologies, web development, and game development. In the realm of artificial
        intelligence, I have created predictive models using PyTorch and an LLM from scratch, 
        using Tensorflow. In web development, I am proficient in utilizing cutting-edge tools 
        like Three.js, React, and Tailwind CSS to create dynamic and engaging websites, like the one
        you see now. When it comes to game development, I harness the power of Unity and Unreal Engine 
        4 to craft captivating virtual worlds and exciting gameplay experiences.





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
