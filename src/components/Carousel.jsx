import React from 'react'
import { comlogo1, comlogo2, comlogo3, comlogo4, comlogo5, comlogo6 } from '../assets';

const Carousel = () => {
  return (
    <div className='wrapper mt-[6rem]'>
      <img className='item item1'src={comlogo1}/>
      <img className='item item2'src={comlogo2}/>
      <img className='item item3'src={comlogo3}/>
      <img className='item item4'src={comlogo4}/>
      <img className='item item5'src={comlogo5}/>
      <img className='item item6'src={comlogo6}/>
    </div>
  )
}

export default Carousel