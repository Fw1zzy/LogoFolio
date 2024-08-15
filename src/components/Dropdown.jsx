import React, { useState } from 'react';
import { faqsDesc } from '../constant';
import { Plus, xmark } from '../assets';

const Dropdown = () => {
  const [visibleDropdowns, setVisibleDropdowns] = useState({});

  const toggleDropdown = (index) => {
    setVisibleDropdowns((prevVisibleDropdowns) => ({
      ...prevVisibleDropdowns,
      [index]: !prevVisibleDropdowns[index],
    }));
  };

  return (
    <div className='w-full flex flex-col justify-center items-center bg-black rounded-xl'>
      <div className='w-full flex flex-col justify-center items-center bg-black rounded-xl'>
        {faqsDesc.map((faqs, index) => (
          <div className='w-full relative select-none ' key={index}>
            <div className='px-5 py-5 flex justify-between cursor-pointer ' onClick={() => toggleDropdown(index)}>
              <h1 className='text-[20px] text-bold font-inter'>{faqs.question}</h1>
              {visibleDropdowns[index] ? (
                 <img src={xmark} className='cursor-pointer w-[20px] h-[20px] ' />
              ) : (
                <img src={Plus} className='cursor-pointer w-[20px] h-[20px]' />
              )}
             
            </div>
            <div className={`h-auto px-5 py-5 ${visibleDropdowns[index] ? 'block' : 'hidden'}`}>
              <p className='text-[#D6D6D6] text-[18px] font-inter'>{faqs.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
