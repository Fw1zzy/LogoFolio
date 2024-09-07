import React from 'react'
import { logo } from '../assets'
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className='flex flex-col footer-shade pt-[12rem] pb-[5rem] px-[2rem] lg:px-[16rem]'>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='flex flex-col'>
          <div className='flex flex-col items-start justify-center lg:justify-start gap-2 cursor-pointer mb-[1rem]'>
            <h1 className='text-[56px] text-bold font-inter leading-[4rem] text-left'>Facilitating User <br/> Resonated Impact for <br/> Global Enterprises.</h1>
            <div className='flex justify-center items-center gap-4 pt-[1rem]'>
              <img src={logo} className='w-[40px] h-[40px]'/>
              <h1 className='text-bold text-[45px]'>URI.CO</h1>
            </div>
          </div>

          <div className='w-auto'>
          <a href='https://cal.com/arcui/uri.co-discover-call' target="_blank">
          <button className='footer-button text-[18px] hover:bg-transparent hover:text-[#FF520E] transition-all'>Book A FREE Discovery Call</button>
          </a>
          </div>
        </div>

        <div className='flex flex-col text-start pt-[10rem] gap-[2rem] max-xs:pt-[5rem] lg:flex-row lg:gap-[4rem] lg:mt-0 select-none'>
          <ul className='flex flex-col gap-[10px] '>
            <li className='text-[18px] text-bold hover:text-[#FF520E] transition-all cursor-pointer' >
              <a className='' href='#about'>About</a>
            </li>
            <li className='text-[18px] text-bold hover:text-[#FF520E] transition-all cursor-pointer' >
              <a className='' href='#process'>Process</a>
            </li>
            <li className='text-[18px] text-bold hover:text-[#FF520E] transition-all cursor-pointer' >
              <a className='' href='#pricing'>Pricing</a>
            </li>
            <li className='text-[18px] text-bold hover:text-[#FF520E] transition-all cursor-pointer' >
              <a className='' href='#faqs'>FAQ's</a>
            </li>
            <li className='text-[18px] text-bold hover:text-[#FF520E] transition-all cursor-pointer' >
              <a className='' href='https://www.linkedin.com/in/arcui-usoara/' target="_blank">Linkedln</a>
            </li>
          </ul>
        </div>

      </div>

      <div>
        <p className='text-[18px] font-inter mt-[5rem] text-left'>© Iaculus 2024. All Rights Reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer