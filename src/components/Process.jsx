import React from 'react'
import { photo1, photo2, photo3 } from '../assets'

const Process = () => {
  return (
    <section id='process' className=' bg-[#000000] py-[12rem] px-[2rem] lg:px-[16rem]'>
      <div >
        <h1 className='text-[73px] text-bold font-inter leading-[4rem] text-left'>Our Process.</h1>
        <p className='text-[24px] font-inter mt-[1rem] text-[#D6D6D6] text-left'>Here's how we develop campaigns that embody your <br/> brand while resonating with your users and getting you <br/> both to your end goals</p>
      </div>
      <div className='mt-[3rem]'>
{/* card 1 */}
        <div className='flex justify-between items-start pt-[5rem] gap-[5rem] max-xs:flex-col'> 
          <div className='flex-2'>
            <p className='font-inter text-[#FF520E] text-[25px]'>01.</p>
            <h1 className='font-inter text-bold text-[40px] leading-[3rem]'>Psychography <br/> Development</h1>
          </div>

          <div className='flex-1'>
            <img 
              src={photo1} 
              className=' h-full w-full object-contain rounded-[1rem] '
              alt='Brand Strategy for Product-Led Businesses '/>
            <p className='font-inter text-[24px] leading-[2rem] mt-[4rem]'>We start by understanding your market psychography and their desired experience and decision allowing us to deliver brand experiences that resonate with your market needs</p>
          </div>
        </div>
{/* card 2 */} 
        <div className='flex justify-between items-start pt-[5rem] gap-[5rem] max-xs:flex-col-reverse'> 
          <div className='flex-1'>
            <img 
              src={photo3} 
              className=' h-full w-full object-contain rounded-[1rem]'
              alt='Campaign Strategy for CPG Businesses'/>
            <p className='font-inter text-[24px] leading-[2rem] mt-[4rem]'>Once we have validated we create a brand strategy for the Campaign positioning it to align with your business goals and core values while showcasing your audience's long term goals.</p>
          </div>

          <div className='flex-2'>
            <p className='font-inter text-[#FF520E] text-[25px]'>02.</p>
            <h1 className='font-inter text-bold text-[40px] leading-[3rem]'>Brand Positioning</h1>
          </div>
        </div>
{/* card 3 */}     
        <div className='flex justify-between items-start pt-[5rem] gap-[5rem] max-xs:flex-col'> 
          <div className='flex-2'>
            <p className='font-inter text-[#FF520E] text-[25px]'>03.</p>
            <h1 className='font-inter text-bold text-[40px] leading-[3rem]'>Campaign Activation</h1>
          </div>

          <div className='flex-1'>
            <img 
              src={photo2} 
              className='h-full w-full object-contain rounded-[1rem]'
              alt='Fractional CMO for Brand Activation'/>
            <p className='font-inter text-[24px] leading-[2rem] mt-[4rem]'>Once we have all the pieces in place, we get started and execute an exponential campaign that resonates with your users and brand goals, leading to higher impact.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Process