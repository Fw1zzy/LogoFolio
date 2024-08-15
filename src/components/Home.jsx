import React from 'react'
import Carousel from './Carousel'
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <section id='/' className='mt-[6.4rem]'>
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ staggerChildren: 0.3, duration: 1.5 }}

      className='flex flex-col items-start max-xs:items-center mx-[2rem] lg:mx-[16rem]'>
        <h1 className='text-[64px] max-xs:text-[38px] max-xs:leading-[3rem] text-bold font-inter leading-[4.5rem] max-xs:text-center'>Elevate your brand with a timeless minimal logo.</h1>
        <p className='text-[18px] font-inter mt-[1rem] text-[#D6D6D6] max-xs:text-center'>Design agency crafting minimal brand identities that speaks volumes.</p>
        <div className='flex flex-row gap-5 mt-[2.5rem] w-full max-xs:flex-col'>
           <a href="#services" className='secondary-button font-inter transition-all hover:text-[#FF520E] hover:bg-transparent text-sm'>View more</a>
           <a href="#process" className='primary-button font-inter transition-all hover:text-[#FF520E] text-sm'>Learn more</a>
        </div>        
      </motion.div>

      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.3, duration: 4 }}
      
      className='mx-[2rem] lg:mx-[16rem]'>
        <Carousel/>
      </motion.div>
    </section>
        
  )
}

export default Home