import React from 'react'
import { SectionWrapper } from '../hoc';
import { motion } from "framer-motion"
import { styles } from "../styles"
import { textVariant } from "../utils/motion"
import { gm } from '../assets';

const GoogleMini = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=' pt-15'>

        <div className='relative z-0 bg-primary'>

          <h2 className={`${styles.sectionHeadText}`}>
            Google Mini.
          </h2>

          <p className='text-secondary font-normal p-3.5'>
            An artificial intelligence model that can answer your questions. 
          </p>

        </div>

        <div className='text-[#b1a7d4] text-lg p-10'>
          While the name suggests a useable search engine, Google Mini's
          knowledge is only limited to a small corpus of topics including 
          artificial intelligence, neural networks, and Python. This corpus 
          is a text document consisting of string content from each topic's 
          Wikipedia page. Once the knowledge has been fed, the user is prompted
          for a query that the AI model then uses the term frequency-inverse 
          document frequency algorithm to find a result that can as closely 
          answer the query as possible. Of course, the model's knowledge is
          limited to the corpus of topics provided, and any query that requires
          outside knowledge may result in a completely arbitrary answer.
 
        </div>

        <div className='flex justify-center m-20 p-20'>
          <img src={gm} alt={"Google Mini Results"} className='mt-auto self-center pb-100' />
        </div>

      </motion.div>
    </>
  )
}

export default SectionWrapper(GoogleMini, "googlemini");

