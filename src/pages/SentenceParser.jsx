import React from 'react'
import { SectionWrapper } from '../hoc';
import { motion } from "framer-motion"
import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"
import { sp } from '../assets';

const SentenceParser = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=' pt-15'>

      <div className="relative z-0 bg-primary no-scrollbar">

        <h2 className={`${styles.sectionHeadText}`}>
          Sentence Parser.
        </h2>

        <p className='text-secondary font-normal p-3.5'>
          Takes a sentence and breaks it down into nounds, verbs, preprositions, etc.
        </p>
      </div>

      <div className='text-[#b1a7d4] text-lg p-10'>
      Natural language processing (NLP) is a field of artificial 
      intelligence that allows computers to understand, interpret, 
      and generate human language. In this project, I built a tool 
      that breaks down a sentence into its components. 
 
      </div>

      <div className='flex justify-center'>
        <img src={sp} alt={"Traffic Sign Results"} className='mt-auto self-center' />
      </div>

      </motion.div>
    </>
  )
}

export default SectionWrapper(SentenceParser, "sentenceparser");

