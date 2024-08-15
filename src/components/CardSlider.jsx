import React from 'react';
import { teamDesc } from '../constant';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CardSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className='w-full flex justify-between items-center px-[1rem] absolute bottom-[45%] pointer-events-none'>
        <BsArrowLeftShort
          className={`text-white text-[2.5rem] cursor-pointer rounded-lg bg-[#FF520E] pointer-events-auto ${currentSlide === 0 ? 'invisible' : ''}`}
          onClick={() => previous()}
        />
        <BsArrowRightShort
          className='text-white text-[2.5rem] cursor-pointer bg-[#FF520E] rounded-lg pointer-events-auto'
          onClick={() => next()}
        />
      </div>
    );
  };

  return (
    <div className='App relative overflow-hidden'>
      <Carousel
        responsive={responsive}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        className='mask-image-style'
      >
        {teamDesc.map((team, index) => (
          <div className='card overflow-hidden relative' key={index}>
            <a href='https://linkedin.com/' target='_blank'>
            <div className='overflow-hidden transition-all grayscale hover:grayscale-0 hover:scale-110'>
              <img
                src={team.img}
                alt='image'
                className='people-image relative'
                style={{
                  boxShadow: 'inset 0 -30px 30px -30px rgba(255, 82, 14, 0.5)',
                }}
              />
              <div className='absolute bottom-[8%] right-0 left-0'>
                <h1 className='text-[24px] font-bold font-inter leading-[3rem] text-center '>
                  {team.name}
                </h1>
                <p className='text-[14px] font-inter text-[#D6D6D6] text-center mt-[-10px]'>
                  {team.position}
                </p>
              </div>
            </div>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardSlider;
