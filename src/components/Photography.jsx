import React from 'react'
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import Gallery from './Gallery';

const Photography = () => {
  return (
    <>
    
    <motion.div variants={textVariant()}>
        <div className="relative z-0 bg-primary no-scrollbar">
          <h2 className="text-[40px] font-bold pb-20">Photography.</h2>
        </div>
        <Gallery />
    </motion.div>
    
    </>
  )
}

export default SectionWrapper(Photography, "photography");