import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { designProjects } from "../constants";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";

const Design = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="relative z-0 text-[#003049] no-scrollbar">
          <h2 className="text-[40px] font-bold text-center">3D Design</h2>
        </div>

        <div className="mt-20 flex flex-wrap gap-7">
          {designProjects.map((project, index) => {
            return (
              <>
                <Link to={`${project.url}`} key={index}>
                  <ProjectCard
                    key={`project-${index}`}
                    index={index}
                    {...project}
                  />
                  
                </Link>
              </>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Design, "design");
