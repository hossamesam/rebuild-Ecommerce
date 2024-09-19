"use client"
import React, { useState } from 'react'
import { CircleChevronRight } from 'lucide-react';
import baby_catogrey from '@/../public/image_catogrey/baby.jpg';
import man_catogrey from '@/../public/image_catogrey/man_catogrey.jpg';
import shoes_catogrey from '@/../public/image_catogrey/shoes_catogrey.jpg';
import women_catogrey from '@/../public/image_catogrey/women_catogrey.jpg';
import Image from 'next/image';
import type { nav } from '../(components)/header'
import { usePathname } from 'next/navigation';
import { Link } from '@/navigation';




function Popover2(props: nav) {
    const [open, setopen] = useState("hidden");
    const [rot, setrot] = useState("rotate-0");
    const openPop = () => {
        open === "grid" ? setopen("hidden") : setopen("grid")
        rot === "rotate-0" ? setrot("rotate-90") : setrot("rotate-0")
    }

    const pathname = usePathname();
    const path = pathname.split("/").slice(2).join("/");



    return (
        <div>

            <nav className={'grid  ease-out bg-neutral-100 absolute w-full p-8  grid-cols-2 max-sm:grid-cols-1 items-center max-sm:gap-2  gap-16 '}>
                <Link href={{ pathname: "/man_store" }} onClick={openPop} className='relative   h-96 w-full object-contain rounded-lg filter  hover:scale-105 hover:grayscale-[50%]' >
                    <Image className="h-full w-full  object-cover object-right-top rounded-lg " src={man_catogrey} alt={'man_catogrey'} />
                    <div className="absolute max-sm:text-xs   flex w-full h-1/5 bottom-0 items-center justify-center text-white bg-black font-sans font-bold">{props.mens}</div>
                </Link>
                <Link href={{ pathname: "/woman_store/page/1" }} onClick={openPop} className='relative  h-96 w-full  object-cover rounded-lg  hover:scale-105 hover:grayscale-[50%]' >
                    <Image className='h-full w-full  object-left-bottom    rounded-lg ' src={women_catogrey} alt={'women_catogrey'} />
                    <div className='absolute max-sm:text-xs flex w-full  h-1/5 items-center bottom-0 justify-center text-white bg-black font-sans font-bold'>{props.women}</div>
                </Link>
                <Link href={{ pathname: "/baby_store" }} onClick={openPop} className='relative   h-96 w-full  object-fill rounded-lg  hover:scale-105 hover:grayscale-[50%]' >
                    <Image className='h-full w-full  object-cover object-center rounded-lg ' src={baby_catogrey} alt={'baby_catogrey'} />
                    <div className='absolute max-sm:text-xs flex w-full h-1/5 items-center bottom-0 justify-center text-white bg-black font-sans font-bold'>{props.baby}</div>
                </Link>
                <Link href={{ pathname: "/shoses_store" }} onClick={openPop} className='relative   h-96 w-full  object-fill rounded-lg  hover:scale-105 hover:grayscale-[50%]' >
                    <Image className='h-full w-full  object-cover object-center rounded-lg ' src={shoes_catogrey} alt={'shoes_catogrey'} />
                    <div className='absolute max-sm:text-xs flex w-full h-1/5 items-center bottom-0 justify-center text-white bg-black font-sans font-bold'>{props.shoes}</div>
                </Link>
            </nav>





            {/* <div className='h-56 w-full     bg-red-500'>
        <nav className='w-full h-full p-4 gap-4 flex flex-row justify-center items-center'>
          <div className='w-full h-full rounded-xl  bg-gray-400 '>
          </div>
          <div className='w-full h-full cover rounded-xl  ' style={{ backgroundImage: `url(${baby.src})` }}>
          </div>
        </nav>
      </div>  */}


        </div>
    )
}

export default Popover2