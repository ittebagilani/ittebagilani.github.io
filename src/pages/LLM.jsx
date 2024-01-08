import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { tsi } from "../assets";

const LLM = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pt-15">
        <div className="relative z-0 bg-primary no-scrollbar">
          <h2 className={`${styles.sectionHeadText}`}>
            LLM from Scratch.
          </h2>

          <p className="text-secondary font-normal p-3.5">
          A decoder-only transformer model for text generation.
          </p>
        </div>

        <div className="text-[#b1a7d4] text-lg p-10">
          Large language models (LLMs) have truly made a name for themselves with 
          their human-like text generation, text summarization, and question answering abilities.
          I decided to build one from scratch. My model, which I call PotentialAI is a decoder-only
          model built using the transformer architecture that has been showcased in the "Attention is
          All You Need" paper. It gets its name from the fact that it has great potential to learn and grow
          beyond what I have trained it on. Limited by computational resources, the model was not trained for
          nearly as long as some of the giants such as ChatGPT and BERT, hence the results are not as successful either.    
          The premise of building one from scratch was to understand how the transformer architecture works, 
          and to gain a deeper understanding of the math and hidden features that it was built upon.
        </div>

        <div className="flex justify-center">
          <img
            src={tsi}
            alt={"Traffic Sign Results"}
            className="mt-auto self-center"
          />
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(LLM, "llm");
