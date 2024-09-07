import React from 'react'
import { motion } from 'framer-motion';


const Headline = () => {
  return (
    <section id='about' className='pt-[10rem] bg-[#000000]'>
      <div className='flex flex-col px-[2rem] lg:px-[16rem]'>
        <h1 className='text-[73px] text-bold font-inter leading-[4.5rem] max-ss:text-[60px] max-ss:leading-[4rem]'><span className='text-[#001EFF]'>User Resonated <br/> Impact</span> Campaings</h1>
        <p className='text-[24px] pr-[20rem] font-inter mt-[2rem] text-[#D6D6D6] max-xs:pr-0'>We Create Campaigns that focus on your market decision making and desired experience making it easier for them to resonate with your services</p>
        <div className='flex flex-row gap-5 mt-[2.5rem] w-full max-xs:flex-col'>
           <a href="#pricing" className='secondary-button font-inter transition-all hover:text-[#FF520E] hover:bg-transparent text-sm'>View plans</a>
           <a href="#process" className='primary-button font-inter transition-all hover:text-[#FF520E] text-sm'>Learn more</a>
        </div>        
      </div>

    </section>
        
  )
}

export default Headline