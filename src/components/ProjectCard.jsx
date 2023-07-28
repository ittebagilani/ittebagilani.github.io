import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";
const ProjectCard = ({ index, name, description, tags, image }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="p-5 rounded-2xl sm:w-[360px] w-full shadow-card"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
  
          <div className="mt-5">
            <h3 className="text-center text-white font-bold text-[24px]">
              {name}
            </h3>
            <p className="text-center mt-2 text-secondary text-[15px]">
              {description}
            </p>
          </div>
  
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
  };

  export { ProjectCard};