import React, { useState } from 'react';
import Cursor from './Cursor';
import { motion } from 'framer-motion';

const Services = () => {
  const [cursorVariant, setCursorVariant] = useState('default');

  return (
    <section id='pricing' className="bg-[#000000] py-[4rem] px-[2rem] lg:px-[16rem]">
      <Cursor cursorVariant={cursorVariant} />
      <div>
        <h1 className='text-[73px] text-bold font-inter leading-[4.5rem] text-left pr-[10rem] max-ss:text-[60px] max-ss:leading-[4rem] '>Let's Make Campaigns That Convert. <span className='text-[#001EFF]'>Always.</span></h1>
        <p className='text-[24px] font-inter mt-[1rem] text-[#D6D6D6] text-left'>We make it seamless for you to work with us. Sign up for <br/> a subscription plan, book meetings get onboarded with <br/> us and let the magic work!</p>
      </div>

      <div className=" mt-[2.5rem]">

        <div className="flex flex-col justify-center w-full min-h-[300px] bg-[#0F0F0F] p-[2rem] border border-[#343333] rounded-[1rem] gradient">
          <h2 className="font-inter text-[16px] text-[#FF520E] mb-[1rem]">Monthly Retainer</h2>
          <h1 className="font-inter text-bold text-[48px] max-xs:text-[35px] max-xs:leading-[2rem] mb-[0.5rem]">
            $20,000
          </h1>
          <p className="text-[16px] font-inter mt-[1rem] text-[#D6D6D6] mb-[1.5rem]">
          Tailored Solutions: We don't believe in one-size-fits-all. Each strategy is customized to meet your specific needs.
          </p>
          <ul className="list-disc pl-[1rem]">
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">Comprehensive market analysis</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">Tailored go-to-market strategies</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">Campaign Design and Marketing</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">One Campaing at a time</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1.5rem]">Completely Async</li>
          </ul>
          <a href='https://cal.com/arcui/uri.co-discover-call' target="_blank" className="secondary-button hover:bg-transparent hover:text-[#FF520E] transition-all font-inter text-sm "
          onMouseEnter={() => setCursorVariant('buttonHover')}
          onMouseLeave={() => setCursorVariant('default')}
          >
            Get started
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
