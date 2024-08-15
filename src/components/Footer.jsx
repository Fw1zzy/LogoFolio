import React from 'react'
import { footerlogo } from '../assets'

const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center lg:items-start lg:flex-row justify-between bg-[#0D0D0D] pt-[6rem] pb-[5rem] px-[2rem]  lg:px-[15rem]'>
      <div className='w-full lg:w-auto flex flex-col px-[2rem]'>
        <div className='flex items-center justify-center lg:justify-start gap-2 cursor-pointer mb-[2rem]'>
          <img src={footerlogo} className='w-[35px] h-[40px]'/>
          <h1 className='text-bold text-[24px]'>LogoFolio.</h1>
        </div>
        <a href='https://calendly.com/' target="_blank" className='footer-button hover:bg-transparent hover:text-[#FF520E] transition-all'>Book FREE discovery call</a>
      </div>

      <div className='flex flex-col text-center mt-[2rem] gap-[2rem] lg:flex-row lg:text-start lg:gap-[4rem] lg:mt-0 select-none'>
        <ul className='flex flex-col gap-[10px] '>
          <li className='text-[16px] text-bold hover:text-[#FF520E] transition-all cursor-pointer'>Process</li>
          <li className='text-[16px] text-bold hover:text-[#FF520E] transition-all cursor-pointer'>Work</li>
          <li className='text-[16px] text-bold hover:text-[#FF520E] transition-all cursor-pointer'>Service</li>
          <li className='text-[16px] text-bold hover:text-[#FF520E] transition-all cursor-pointer'>About</li>
          <li className='text-[16px] text-bold hover:text-[#FF520E] transition-all cursor-pointer'>FAQs</li>
        </ul>

        <ul className='flex flex-col gap-[10px]'>
          <li className='text-[16px] text-bold hover:text-[#FF520E] transition-all cursor-pointer'>{'X(Twitter)'}</li>
          <li className='text-[16px] text-bold hover:text-[#FF520E] transition-all cursor-pointer'>LinkedIn</li>
        </ul>

        <ul className='flex flex-col gap-[10px]'>
          <li className='text-[16px] text-bold hover:text-[#FF520E] transition-all cursor-pointer'>Use this template</li>
          <li className='text-[16px] text-bold hover:text-[#FF520E] transition-all cursor-pointer'>Built in Framer</li>
          <li className='text-[16px] text-bold hover:text-[#FF520E] transition-all cursor-pointer'>View more templates</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer