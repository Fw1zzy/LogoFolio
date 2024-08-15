import React from 'react'
import { processDesc } from '../constant'
import { motion } from 'framer-motion'

const Process = () => {
  return (
    <section id='process' className=' bg-[#0D0D0D] py-[6rem]'>
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ staggerChildren: 0.3, duration: 1 }}
      >
        <h1 className='text-[48px] max-xs:text-[35px] max-xs:leading-[2rem] text-bold font-inter leading-[4rem] text-center'>Our process.</h1>
        <p className='text-[18px] font-inter mt-[1rem] text-[#D6D6D6] text-center'>Reliable process for achieving distinctiveness.</p>
      </motion.div>
      <div className='grid auto-rows-max place-items-center grid-cols-1 lg:grid-cols-2 gap-[2rem] mx-[2rem] lg:mx-[17rem] mt-[2.5rem]'>
        {processDesc.map((process, index) => (
          <div className='flex flex-col justify-start w-full min-h-[300px] bg-[#0F0F0F] p-[2rem] border border-[#343333] rounded-[1rem] '>
            <h2 className='font-inter text-[16px] text-[#FF520E] mb-[2rem]'>{process.number}</h2>
            <h1 className='font-inter text-bold text-[20px] mb-[1rem]'>{process.title}</h1>
            <ul key={process.id} className='list-disc pl-[1rem]'>
              <li className='font-inter text-[18px] text-[#D6D6D6] mb-[1rem]'>{process.description1}</li>
              <li className='font-inter text-[18px] text-[#D6D6D6] mb-[1rem]'>{process.description2}</li>
              <li className='font-inter text-[18px] text-[#D6D6D6]'>{process.description3}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process