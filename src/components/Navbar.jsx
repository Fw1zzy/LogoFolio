import React from 'react'
import { navLinks } from '../constant';
import { logo } from '../assets';


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between pt-6 mx-[2rem] lg:mx-[16rem]'>
      <div>
        <a href='/'>
        <img src={logo} alt='logo' className='object-contain cursor-pointer' />
        </a>
      </div>

      <ul className='max-xs:hidden font-inter text-sm flex items-center gap-7'>
        {navLinks.map((nav, index) => (
          <li key={index} className=''>
            <a href={nav.id} className="nav-icon transition-all hover:text-[#FF520E]">
            {nav.title}
          </a>
          </li>
        ))}
      </ul>


      <div>
        <a href='https://calendly.com/' target="_blank">
        <button type='button' className='primary-button font-inter transition-all hover:text-[#FF520E] text-sm'>Book a call</button>
        </a>
      </div>
    </nav>
  )
}

export default Navbar