import React from 'react'
import CardSlider from './CardSlider'
import { motion } from 'framer-motion'

const Team = () => {
  return (
    <section id='about' className=' bg-[#0D0D0D] pt-[6rem] pb-[5rem] px-[2rem]'>
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ staggerChildren: 0.3, duration: 1 }}
      >
        <h1 className='text-[48px] max-xs:text-[35px] max-xs:leading-[2rem] text-bold font-inter leading-[4rem] text-center'>Our team.</h1>
        <p className='text-[18px] font-inter mt-[1rem] text-[#D6D6D6] text-center'>Meet our talented team proud in delivering your brand's logo.</p>
      </motion.div>
        <CardSlider/>
    </section>
  )
}

export default Team