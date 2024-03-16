import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { extras, navLinks } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";

// const ProjectCard = ({ index, name, description, tags, image }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="p-5 rounded-2xl sm:w-[360px] w-full shadow-card"
//       >
//         <div className="relative w-full h-[230px]">
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover rounded-2xl"
//           />
//         </div>

//         <div className="mt-5">
//           <h3 className="text-center text-white font-bold text-[24px]">
//             {name}
//           </h3>
//           <p className="text-center mt-2 text-secondary text-[15px]">
//             {description}
//           </p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p key={tag.name} className={`text-[14px] ${tag.color}`}>
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

const Extras = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Extracurriculars.</h2>
      </motion.div>

      <div className="w-full flex flex-col">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          As I progressed through my academic journey, I embraced a variety of
          extracurricular activities, contributing to my overall growth. These
          engagements allowed me to explore diverse interests, develop
          leadership skills, and appreciate the value of collaboration. I also
          dedicated time to initiatives focused on social responsibility,
          broadening my perspective and instilling a sense of purpose beyond
          academics. In essence, my involvement in extracurriculars has enriched
          my college experience, providing a well-rounded foundation for
          personal and professional development.
        </motion.p>

        <motion.div variants={textVariant()}>
          <div className="relative bg-primary no-scrollbar pt-10">
            <div className="mt-20 flex flex-wrap gap-7">
              {extras.map((project, index) => {
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
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Extras, "extras");
