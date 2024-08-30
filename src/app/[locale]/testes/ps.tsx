import React from 'react'
import Img1 from "@/../public/image_catogrey/baby.jpg"
import img2 from "@/../public/image_catogrey/man_catogrey.jpg"
import img3 from "@/../public/image_catogrey/shoes_catogrey.jpg"
import img4 from "@/../public/image_catogrey/women_catogrey.jpg"
import Image from 'next/image'
export default function Ps() {
    return (
        <div className=' rounded-sm h-80 w-[600px]'>
            <Image className='object-cover' src={Img1}></Image>
            <div className=''>  ملابس اطفال</div>
        </div>
    )
}
