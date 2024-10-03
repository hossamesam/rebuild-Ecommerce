import { CircleUserRound, ShoppingCart } from 'lucide-react'
import React from 'react'
import { ChildLogo, Manlogo, ShoesLogo, WomanLogo } from '../../../../../public/svg'
import Image from "next/image";
import logoA from "@/../public/logoE.jpg";
import { MenuTypes } from '@/types/app';

export default function Menu({ signIn, ShoppingCar, mens, women, baby, shoes }: MenuTypes) {
    return (

        <div className="bg-slate-50 text-black fixed h-full w-80 right-0 border-2  ">
            <Image className="h-48 w-full " src={logoA} alt="logo" />
            <hr className="border-gray-300  border-1" />

            <div className=" py-4 px-5 gap-8 flex flex-col ">
                <a
                    href="/"
                    type="submit"
                    className="flex gap-4 flex-row  hover:bg-gray-100 hover:scale-110  "
                >
                    <CircleUserRound color="black" size={28} />
                    <div className="text-2xl font-bold text-black font-['Roboto'] ">
                        {signIn}
                    </div>
                </a>

                <a
                    href="/"
                    className="flex flex-row gap-4 hover:bg-gray-100 hover:scale-110"
                >
                    <ShoppingCart color="black" size={30} />
                    <div className="text-2xl font-bold text-black font-['Roboto'] ">
                        {ShoppingCar}
                    </div>
                </a>
            </div>
            <hr className="border-gray-300  border-1" />

            <div className=" py-4 px-5 gap-8 flex flex-col">
                <a
                    href="/"
                    className="flex flex-row gap-2 text-black items-center  w-full hover:bg-gray-100 hover:scale-110 "
                >
                    <Manlogo />
                    <h6 className="text-2xl font-bold text-black font-['Roboto'] ">
                        {mens}
                    </h6>
                </a>
                <a
                    href="/"
                    className="flex flex-row gap-2 text-black items-center  w-full hover:bg-gray-100 hover:scale-110 "
                >
                    <WomanLogo />
                    <h6 className="text-2xl font-bold text-black font-['Roboto'] ">
                        {women}
                    </h6>
                </a>

                <a
                    href="/"
                    className="flex flex-row gap-2 text-black items-center  w-full hover:bg-gray-100 hover:scale-110 "
                >
                    <ChildLogo />
                    <h6 className="text-2xl font-bold text-black font-['Roboto'] ">
                        {baby}
                    </h6>
                </a>
                <a
                    href="/"
                    className="flex flex-row gap-2 text-black items-center  w-full hover:bg-gray-100 hover:scale-110 "
                >
                    <ShoesLogo />
                    <h6 className="text-2xl font-bold text-black font-['Roboto'] ">
                        {shoes}
                    </h6>
                </a>
            </div>
        </div>

    )
}
