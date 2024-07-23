"use client"
import React, { useState } from 'react'
import { CircleChevronRight } from 'lucide-react';
import baby_catogrey from '@/../public/image_catogrey/baby.jpg';
import man_catogrey from '@/../public/image_catogrey/man_catogrey.jpg';
import shoes_catogrey from '@/../public/image_catogrey/shoes_catogrey.jpg';
import women_catogrey from '@/../public/image_catogrey/women_catogrey.jpg';
import Image from 'next/image';
import type {nav} from '../(components)/header'


function Popover(props:nav) {
  const [open, setopen] = useState("hidden");
  const [rot, setrot] = useState("rotate-0");
  const openPop = () => {
    open === "grid" ? setopen("hidden") : setopen("grid")
    rot === "rotate-0" ? setrot("rotate-90") : setrot("rotate-0")
  }

  return (
    <div>
      <button onClick={openPop} className=' flex justify-center items-center gap-2 w-full h-12 bg-gray-500'>
        <span className=' font-sans font-bold text-2xl text-white '>{props.menu}</span>
        <CircleChevronRight className={rot + ' text-white size-8'} strokeWidth={3} />
      </button>




      <nav className={open + ' ease-out bg-neutral-100 absolute   grid-cols-4 p-4 items-center max-sm:gap-2  gap-4 '}>
        <a href="/" className='relative  h-full w-full  object-cover rounded-lg' >
          <Image className="h-full w-full  object-cover object-top rounded-lg " src={man_catogrey} alt={'man_catogrey'} />
          <div className="absolute max-sm:text-xs   flex w-full h-1/5 bottom-0 items-center justify-center text-white bg-black font-sans font-bold">{props.mens}</div>
        </a>
        <a href="/" className='relative h-full w-full  object-cover rounded-lg' >
          <Image className='h-full w-full  object-cover object-top rounded-lg ' src={women_catogrey} alt={'women_catogrey'} />
          <div className='absolute max-sm:text-xs flex w-full  h-1/5 items-center bottom-0 justify-center text-white bg-black font-sans font-bold'>{props.women}</div>
        </a>
        <a href="/" className='relative h-full w-full  object-cover rounded-lg' >
          <Image className='h-full w-full  object-cover object-top rounded-lg ' src={baby_catogrey} alt={'baby_catogrey'} />
          <div className='absolute max-sm:text-xs flex w-full h-1/5 items-center bottom-0 justify-center text-white bg-black font-sans font-bold'>{props.baby}</div>
        </a>
        <a href="/" className='relative h-full w-full  object-cover rounded-lg' >
          <Image className='h-full w-full  object-cover object-top rounded-lg ' src={shoes_catogrey} alt={'shoes_catogrey'} />
          <div className='absolute max-sm:text-xs flex w-full h-1/5 items-center bottom-0 justify-center text-white bg-black font-sans font-bold'>{props.shoes}</div>
        </a>


      </nav>





      {/* <div className='h-56 w-full     bg-red-500'>
        <nav className='w-full h-full p-4 gap-4 flex flex-row justify-center items-center'>
          <div className='w-full h-full rounded-xl  bg-gray-400 '>
          </div>
          <div className='w-full h-full cover rounded-xl  ' style={{ backgroundImage: `url(${baby.src})` }}>
          </div>
        </nav>
      </div>  */}
      <div className="flex bg-red-500 opacity-100 transition-opacity duration-1000  ease-in hover:opacity-0">ssssssssssssssssssssssssss</div>


    </div>
  )
}

export default Popover