import React, { useState } from 'react';
import Cursor from './Cursor';
import { motion } from 'framer-motion';

const Services = () => {
  const [cursorVariant, setCursorVariant] = useState('default');

  return (
    <section id='services' className="bg-[#0D0D0D] py-[4rem] px-[1rem]">
      <Cursor cursorVariant={cursorVariant} />
      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ staggerChildren: 0.3, duration: 1 }}
      className="px-[2rem]">
        <h1 className="text-[48px] max-xs:text-[35px] max-xs:leading-[2rem] text-bold font-inter leading-[4rem] text-center">
          Our services.
        </h1>
        <p className="text-[18px] font-inter mt-[1rem] text-[#D6D6D6] text-center">
          Fixed-cost plans to avoid negotiations and start creating.
        </p>
      </motion.div>

      <div
        className="grid auto-rows-max place-items-center grid-cols-1 lg:grid-cols-3 gap-[1rem] mx-[1rem] lg:mx-[17rem] mt-[2.5rem]"
      >
        <div className="flex flex-col justify-start w-full min-h-[300px] bg-[#0F0F0F] p-[2rem] border border-[#343333] rounded-[1rem]">
          <h2 className="font-inter text-[16px] text-[#FF520E] mb-[1rem]">Lite</h2>
          <h1 className="font-inter text-bold text-[48px] max-xs:text-[35px] max-xs:leading-[2rem] mb-[0.5rem]">
            $1,495
          </h1>
          <p className="text-[16px] font-inter mt-[1rem] text-[#D6D6D6] mb-[1.5rem]">
            Quickly receive a high-quality brand logo, representing your business vision.
          </p>
          <ul className="list-disc pl-[1rem]">
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">Primary logos</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">Brand colours</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">72hr delivery</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">Max 1 revision</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1.5rem]">Figma files</li>
          </ul>
          <a href='https://calendly.com/' target="_blank" className="primary-button font-inter hover:text-[#FF520E] transition-all text-sm">
            Get started
          </a>
        </div>

        <div className="flex flex-col justify-start w-full min-h-[300px] bg-[#0F0F0F] p-[2rem] border border-[#343333] rounded-[1rem] gradient">
          <h2 className="font-inter text-[16px] text-[#FF520E] mb-[1rem]">Standard</h2>
          <h1 className="font-inter text-bold text-[48px] max-xs:text-[35px] max-xs:leading-[2rem] mb-[0.5rem]">
            $2,225
          </h1>
          <p className="text-[16px] font-inter mt-[1rem] text-[#D6D6D6] mb-[1.5rem]">
            Full scale brand identity promoting and connecting with your target audience.
          </p>
          <ul className="list-disc pl-[1rem]">
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">Primary and secondary logos</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">Full brand guidebook</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">2 weeks delivery</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">Max 3 revisions</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1.5rem]">Figma files</li>
          </ul>
          <a href='https://calendly.com/' target="_blank" className="secondary-button hover:bg-transparent hover:text-[#FF520E] transition-all font-inter text-sm "
          onMouseEnter={() => setCursorVariant('buttonHover')}
          onMouseLeave={() => setCursorVariant('default')}
          >
            Get started
          </a>
        </div>

        <div className="flex flex-col justify-start w-full min-h-[300px] bg-[#0F0F0F] p-[2rem] border border-[#343333] rounded-[1rem]">
          <h2 className="font-inter text-[16px] text-[#FF520E] mb-[1rem]">Monthly</h2>
          <h1 className="font-inter text-bold text-[48px] max-xs:text-[35px] max-xs:leading-[2rem] mb-[0.5rem]">
            $2,495/m
          </h1>
          <p className="text-[16px] font-inter mt-[1rem] text-[#D6D6D6] mb-[1.5rem]">
            Monthly design support, perfect for companies who require ongoing design work.
          </p>
          <ul className="list-disc pl-[1rem]">
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">Unlimited banners</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">Unlimited revisions</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">Updates every 24 hours</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1rem]">Pause or cancel anytime</li>
            <li className="font-inter text-[14px] text-[#D6D6D6] mb-[1.5rem]">Figma files</li>
          </ul>

          <a href='https://calendly.com/' target='_blank' className="primary-button hover:text-[#FF520E] transition-all font-inter text-sm">
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
