import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup';

const About = () => {
  return (
    <div className='shade pb-[5rem] px-[2rem] lg:px-[15rem]'>
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 4 }}
      className='pt-[20rem] flex flex-row gap-[2rem] max-xs:flex-col'>
        <div className='flex items-center'>
          <CountUp end={85} duration={5} delay={1} className='text-[170px] text-bold font-inter leading-[4.5rem] text-[#FF520E] max-ss:text-[140px]'>
            <span >85</span>
          </CountUp>
          <div className='text-[170px] text-bold font-inter leading-[4.5rem] max-ss:text-[140px]'>%</div>
        </div>
       
        
        <p className='text-[56px] font-inter text-bold text-[#D6D6D6] leading-[4rem] max-xs:pt-[2rem]'>Products Fail Due To Misaligned Marketing</p>
      </motion.div>
    </div>
    
  )
}

export default About