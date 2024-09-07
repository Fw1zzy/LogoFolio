import React from 'react'
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <section id='/' className='mt-[6.4rem]'>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.3, duration: 1.5 }}

      className='flex flex-col pb-[3rem] mx-[2rem] lg:mx-[16rem]'>
        <h1 className='text-[64px] text-bold font-inter leading-[4.5rem]'>Activate your Brand <br/> To Resonate with <br/> Your Global Audience</h1>
        <p className='text-[18px] font-inter mt-[1rem] text-[#D6D6D6]'>We create campaigns for global businesses that resonate with <br/> your users and convert on a subscription </p>
        <div className='flex flex-row gap-5 mt-[2.5rem] w-full max-xs:flex-col'>
           <a href="#pricing" className='secondary-button font-inter transition-all hover:text-[#FF520E] hover:bg-transparent text-sm'>View plans</a>
           <a href="#process" className='primary-button font-inter transition-all hover:text-[#FF520E] text-sm'>Learn more</a>
        </div>        
      </motion.div>

    </section>
        
  )
}

export default Home