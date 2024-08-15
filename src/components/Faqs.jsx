import React from 'react'
import Dropdown from './Dropdown'
import { motion } from 'framer-motion'

const Faqs = () => {
  return (
    <section id='faqs' className=' bg-white pt-[6rem] pb-[5rem]'>
      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ staggerChildren: 0.3, duration: 1 }}      
      
      className='px-[2rem]'>
        <h1 className='text-[48px] max-xs:text-[35px] max-xs:leading-[2rem] text-bold font-inter text-[#FF520E] leading-[4rem] text-center'>Our faqs.</h1>
        <p className='text-[18px] font-inter mt-[1rem] text-[#0D0D0D] text-center'>The most common questions we get asked.</p>
      </motion.div>

      <div className='px-[2rem] lg:px-[17rem] pt-[2rem]'>
      <Dropdown/>
      </div>
      
    </section>
  )
}

export default Faqs