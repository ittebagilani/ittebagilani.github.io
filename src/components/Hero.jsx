import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { SectionWrapper } from '../hoc';

const Hero = () => {
  return (
    <section className='relative w-full h-[800px] mx-auto'>
      <div className={`relative inset-0 max-w-7xl mx-auto 
      flex flex-row gap-5`}>

        <div className='text-center justify-center items-center m-auto'>
          <h1 className={`${styles.heroHeadText} text-white font-black text-center justify-center items-center`}>Itteba <span 
          className='text-[#dfd9ff]'>Gilani</span>
          </h1>

          <p className={`${styles.heroSubText} mt-20`}>
            Engineer <span className='text-[#dfd9ff]'>by day.</span>
          </p>
          <p className={`${styles.heroSubText} mt-5`}>
            Developer <span className='text-[#dfd9ff]'>by night.</span>
          </p>
        </div>
      </div>

      
      <ComputersCanvas />
        

      

      
      

      {/* <div className='absolute xs:bottom-10 w-full 
      flex justify-center items-center'>

        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white
          flex justify-center items-start p-2'>
            
            <motion.div
              animate={{y: [0, 24, 0]}}
              transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}}
              className='w-3 h-3 rounded-full bg-white mb-1'
            
            />
          </div>
        </a>

      </div> */}
    </section>
  )
}

export default SectionWrapper(Hero, "home");