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
    <div className='max-w-[1080px] flex flex-col justify-center items-center bg-transparent border-2 border-[#FF520E] rounded-xl'>
        {faqsDesc.map((faqs, index) => (
          <div className=' relative select-none' key={index}>
            <div className='px-5 py-5 flex justify-between cursor-pointer' onClick={() => toggleDropdown(index)}>
              <h1 className='text-[20px] font-inter'>{faqs.question}</h1>
              {visibleDropdowns[index] ? (
                 <img src={xmark} className='cursor-pointer w-[20px] h-[20px]' />
              ) : (
                <img src={Plus} className='cursor-pointer w-[20px] h-[20px]' />
              )}
            </div>
            <div 
              className={`px-5 overflow-hidden transition-all duration-150 ease-in-out ${visibleDropdowns[index] ? 'max-h-[1000px] py-5' : 'max-h-0'}`}>
              <p className='text-[#D6D6D6] text-[18px] font-inter'>{faqs.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dropdown;
