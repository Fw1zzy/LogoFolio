import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
    
    className='mt-[10.4rem] pb-[10rem] shade px-[2rem] lg:px-[16rem]'>
        <motion.h1
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
        className='text-[48px] max-xs:text-[38px] max-xs:leading-[3rem] text-bold font-inter leading-[4.5rem] text-center'>We specialise in crafting minimal logos that embody the essence of your brand.</motion.h1>
        <motion.p 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
        className='text-[18px] font-inter mt-[2rem] text-[#D6D6D6] text-center'>First impressions matter. That's why our mission is to create clean, enduring designs that elevate your brand with simplicity and elegance. Captivate your audience with your timeless presence.</motion.p>
    </motion.div>
  )
}

export default About