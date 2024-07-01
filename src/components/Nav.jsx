import React from 'react'
import github from '../assets/contact/github.png';
import linkedin from '../assets/contact/linkedin.png';
import cv from '../assets/contact/cv.png';

function Nav() {
  return (
    <div className=' flex gap-2 justify-end items-center animate-fade animate-once animate-delay-[3500ms] animate-ease-linear'>
    <a href="#skills" className='border border-bg-custom rounded-lg p-2 m-2 hover:bg-custom hover:text-white hover:font-bold	'>
      Skills
    </a>
    <a href="#experience" className='border border-bg-custom rounded-lg p-2 m-2 hover:bg-custom hover:text-white hover:font-bold'>
      Projects
    </a>
    <a href="#about" className='border border-bg-custom rounded-lg p-2 m-2 hover:bg-custom hover:text-white hover:font-bold'>
      About
    </a>
        <a href="https://www.github.com/elopezfilippini">
<img className='h-10 w-10 ' src={github}></img></a>
<a href="https://www.linkedin.com/in/emilianolopezfilippini/">
<img className='h-10 w-10 'src={linkedin}></img></a>
<a href="https://drive.google.com/file/d/1CWT48iN05810tCMmnr0feb_iGlhyR1n9/view?usp=drive_link">
<img className='h-10 w-10 'src={cv}></img></a>
    </div>
  )
}

export default Nav