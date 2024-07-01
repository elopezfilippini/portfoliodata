import React from 'react'
import video from "../assets/videos/video.mp4"
import charlie from "../assets/videos/CharlieApp.mp4"
import artemis from "../assets/videos/Artemis.mp4"
import disney from "../assets/videos/Disney.mp4"
import { FiChevronsDown } from "react-icons/fi";
function Prueba() {
  function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop -100,
        behavior: 'smooth'
      });
    }
  }
  return (
    <div class='w-full  '>
            <h3 className='text-center bg-custom pb-10 text-4xl font-bold	text-white'>My Projects</h3>
            <div class="bg-custom w-full text-center flex flex-wrap justify-center gap-4 pb-1 0  ">
           



            <div className='   flex flex-col shadow-2xl  '>
            <div className='min-h-[560px]  flex flex-col  border md:px-16 h-auto w-[400px] border-gray-500 rounded-lg items-center'>
    <h3 className='text-center pb-6 py-4  text-2xl font-bold	text-zinc-200	'>Dogs api</h3>
    <div id="pepe" className='  w-3/4 flex justify-center rounded-lg hover:scale-150 transition-all duration-200 cursor-pointer ease-in-out shadow-xl shadow-slate-700'>
   <video className="opacity-100 rounded-md" src={video} autoPlay loop playsInline muted />
    </div>
      <h3 className='py-8 text-white'>An interactive app to find information about dogs and create new races. You can search dogs, filter them by race, and sort them by weight or name. </h3>
      <h3 className='italic text-white'>it usually takes 30 seconds to load all the information.</h3>
      <div className="flex ">
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>React</h4>
    
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Postgres</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Express</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Redux</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Sequelize</h4>
  
      </div>
      <div  className="flex">
        <a href="https://github.com/elopezfilippini/dogs">
        <h4  className='hover:animate-wiggle hover:bg-pink-500 transition-colors duration-300 ease-in-out border-orange-400 mx-auto my-4 bg-slate-900 rounded-lg p-2 text-white border '>Code</h4></a>
        <a href="https://dogsfront-8.onrender.com/">
        <h4 className='hover:animate-wiggle hover:bg-pink-500 transition-colors duration-300 ease-in-out border-orange-400 mx-auto my-4 bg-slate-900 rounded-lg p-2 text-white border '>Go Live</h4></a>
      </div>
  </div>
</div>





<div className='flex flex-col '>
  <div className='min-h-[560px]  flex flex-col  border md:px-16 h-auto w-[400px] border-gray-500 rounded-lg items-center'>
    <h3 className='text-center pb-6 py-4  text-2xl font-bold	text-zinc-200	'>Disney Clone</h3>
    <div id="pepe" className='  w-3/4 flex justify-center rounded-lg hover:scale-150 transition-all duration-200 cursor-pointer ease-in-out shadow-xl shadow-slate-700'>
      <video className="opacity-100 rounded-md" src={disney} autoPlay loop playsInline muted />
    </div>
      <h3 className='py-8 text-white'>A clone of disney series and movies page using a responsive style from tailwind css.</h3>
      
      <div className="flex pt-24
      ">
        <h4 className='text-xs  border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>React</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Tailwind</h4>
     
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Css</h4>
      </div>
      <div className="flex
      ">
     <a href="https://github.com/elopezfilippini/disneyProject">
        <h4  className='hover:animate-wiggle hover:bg-pink-500 transition-colors duration-300 ease-in-out border-orange-400 mx-auto my-4 bg-slate-900 rounded-lg p-2 text-white border '>Code</h4></a>
       
      </div>
  </div>
</div>

<div className=' flex flex-col '>
  <div className='min-h-[560px] flex flex-col  border md:px-16 h-auto w-[400px] border-gray-500 rounded-lg items-center'>
    <h3 className='text-center pb-6 py-4 text-2xl   font-bold	text-zinc-200	'>Artemis Gallery</h3>
    <div id="pepe" className='  w-3/4 flex justify-center rounded-lg hover:scale-150 transition-all duration-200 cursor-pointer ease-in-out shadow-xl shadow-slate-700'>
      <video className="opacity-100 rounded-md" src={artemis} autoPlay loop playsInline muted />
    </div>
      <h3 className='py-8 text-white'>A gallery of Artemis (a child artist) pictures divided by categories and shown in a responsive way with slides</h3>
      <h3 className='italic'></h3>
      <div className="flex pt-24
      ">
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>React</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Node Js</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Postgres</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Css</h4>
      </div>
      <div className="flex 
      ">
       <a href="https://github.com/elopezfilippini/artemisgallery">
        <h4  className='hover:animate-wiggle hover:bg-pink-500 transition-colors duration-300 ease-in-out border-orange-400 mx-auto my-4 bg-slate-900 rounded-lg p-2 text-white border '>Code</h4></a>
       
    
        <a href="https://artemisgallery.onrender.com/">
        <h4 className='hover:animate-wiggle hover:bg-pink-500 transition-colors duration-300 ease-in-out border-orange-400 mx-auto my-4 bg-slate-900 rounded-lg p-2 text-white border '>Go Live</h4></a>
      </div>
  </div>
</div>


<div className='h-min-[700px] flex flex-col '>
  <div className='min-h-[560px]  h-min-[700px] flex flex-col  border md:px-16 h-auto w-[400px] border-gray-500 rounded-lg items-center justify-center'>
    <h3 className='text-center pb-6 py-4 text-2xl font-bold	text-zinc-200	'>Charlie App</h3>
    <div id="pepe" className='  w-3/4 flex justify-center rounded-lg hover:scale-150 transition-all duration-200 cursor-pointer ease-in-out shadow-xl shadow-slate-700'>
      <video className="opacity-100 rounded-md" src={charlie} autoPlay loop playsInline muted />
    </div>
      <h3 className='py-8 text-white'>An app designed for an entrepreneurial company to streamline the bar collection process using QR codes. The app features different views tailored to specific roles. </h3>
      <h3 className='italic'></h3>
      <div className="flex pt-6
      ">
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>React</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Node Js</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Auth0</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>React-Qr</h4>
      </div>
      <div className="flex
      ">
         <a href="https://youtu.be/LbkMOQ-xVGk">
        <h4  className='hover:animate-wiggle hover:bg-pink-500 transition-colors duration-300 ease-in-out border-orange-400 mx-auto my-4 bg-slate-900 rounded-lg p-2 text-white border '>Video</h4></a>
     
      </div>
  </div>
</div>









</div>
        </div>


  )
}

export default Prueba