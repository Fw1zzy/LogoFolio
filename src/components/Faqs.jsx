import React from 'react'
import Dropdown from './Dropdown'
import { motion } from 'framer-motion'

const Faqs = () => {
  return (
    <section id='faqs' className='bg-[#000000] pt-[6rem] pb-[5rem] flex flex-row items-start px-[2rem] lg:px-[16rem] max-xs:flex-col'>

      <div className='flex flex-col pr-[3rem] max-xs:pr-0'>
        <h1 className='text-[63px] text-bold font-inter leading-[4.5rem] max-ss:text-[60px] max-ss:leading-[4rem]'>Ready to Activate your Audience?</h1>
        <p className='text-[18px] font-inter mt-[2rem] text-[#D6D6D6] max-xs:pr-0'>We can't wait to get started with you and impact your audience! </p>
        <div className='flex flex-row gap-5 mt-[2.5rem] w-full max-xs:flex-col'>
           <a href="#pricing" className='secondary-button font-inter transition-all hover:text-[#FF520E] hover:bg-transparent text-sm'>View plans</a>
           <a href="#process" className='primary-button font-inter transition-all hover:text-[#FF520E] text-sm'>Learn more</a>
        </div>        
      </div>

      <div className=' max-xs:pt-[4rem]'>
      <Dropdown/>
      </div>
      
    </section>
  )
}

export default Faqs