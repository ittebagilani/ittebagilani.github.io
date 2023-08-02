import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { navLinks } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

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

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My skills and experience are showcased through the following projects. 
          Each project is concisely described and complemented by visuals, such
          as images or videos, showcasing their functionality. This portfolio 
          reflects my proficiency in tackling intricate challenges, adeptness 
          with various technologies, and effective project management.
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
