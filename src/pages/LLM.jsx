import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { ds1, ds2, ds3 } from "../assets";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LLM = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pt-15">
        {/* <Link to="/">
          <div className="rounded-xl bg-secondary w-[50px] ml-[-70px] mt-[-50px]">
          d
          </div>

        </Link> */}
        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
        <div className="relative z-0 no-scrollbar flex-col">
          <h2 className={`${styles.sectionHeadText}`}>LLM from Scratch.</h2>

          <p className="text-[#370926] text-center font-normal p-3.5">
            A decoder-only transformer model for text generation.
          </p>
        </div>

        <div className="text-[#370926] text-center text-lg p-10">
          Large language models (LLMs) have truly made a name for themselves
          with their human-like text generation, text summarization, and
          question answering abilities. I decided to build one from scratch. My
          model, which I call PotentialAI is a decoder-only model built using
          the transformer architecture that has been showcased in the "Attention
          is All You Need" paper. It gets its name from the fact that it has
          great potential to learn and grow beyond what I have trained it on.
          Limited by computational resources, the model was not trained for
          nearly as long as some of the giants such as ChatGPT and BERT, hence
          the results are not as successful either. The premise of building one
          from scratch was to understand how the transformer architecture works,
          and to gain a deeper understanding of the math and hidden features
          that it was built upon.
          <br />
          <br /> The first step of the transformer model is creating the
          embeddings that the model will use to understand the information being
          fed to it. A computer cannot comprehend words like humans can, so we
          must translate words into vectors of numbers that hold semantic
          meaning. From these vectors, the model can differentiate between
          "today" and "tomorrow" and truly understand our language.
          <div className="flex justify-center mt-10">
            <img
              src={ds1}
              alt={"Traffic Sign Results"}
              className="mt-auto self-center"
            />
          </div>
          <br />
          <br />
          After the embeddings have been provided and understood by the model,
          it is time for the attention mechanism. The attention mechanism is
          what allows the model to determine the context of each word in
          relation to every other. Like in a story, there are some parts that
          are more important and hold more meaning than others. The attention
          mechanism pays extra attention to these parts and that helps the model
          understand the text more.

          <div className="flex justify-center mt-10">
            <img
              src={ds2}
              alt={"Traffic Sign Results"}
              className="mt-auto self-center"
            />
          </div>
          <br />
          <br />
          Continuing with the story example, a story has different layers of
          information, such as characters, places, and events. Similary, the
          decoder also has multiple layers, and each of these layers looks at
          the story from a different perspective. Together, these layers
          understand and organize the information in the provided text.

          <div className="flex justify-center mt-10">
            <img
              src={ds3}
              alt={"Traffic Sign Results"}
              className="mt-auto self-center"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(LLM, "llm");
