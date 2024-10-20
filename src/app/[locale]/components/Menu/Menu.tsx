"use client"
import { CircleUserRound, ShoppingCart } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { ChildLogo, Manlogo, ShoesLogo, WomanLogo, CreateSVG } from '../../../../../public/svg'
import Image from "next/image";
import logoA from "@/../public/logoE.jpg";
import { MenuTypes } from '@/types/app';
import Cookies from 'universal-cookie';
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecote } from '@/Redux/HeaderSlice';
import Logout from '../Logout/Logout';

export  default  function  Menu ({ createPolicy, signIn, ShoppingCar, mens, women, baby, shoes, local, createProduct }: MenuTypes) {
    const dispatch = useDispatch()
    const state: any = useSelector<any>((state) => state.HeaderSlice);

    const Access = state.Access

    useEffect( () => {
             dispatch(jwtDecote());
            console.log("Access :", Access)

    }, [dispatch])


    return (
        <div className="bg-slate-50 text-black fixed h-full w-80 right-0 border-2  ">
            <Image className="h-48 w-full " src={logoA} alt="logo" />
            <hr className="border-gray-300  border-1" />

            <div className=" py-4 px-5 gap-8 flex flex-col ">

                {(Access === "admin" && "user") &&
                    <Logout />
                }

                {(Access !== "admin" && "user") &&
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
                }

                {Access !== "admin" &&
                    <a
                        href={`/${local}/MyBuy`}
                        className="flex flex-row gap-4 hover:bg-gray-100 hover:scale-110"
                    >
                        <ShoppingCart color="black" size={30} />
                        <div className="text-2xl font-bold text-black font-['Roboto'] ">
                            {ShoppingCar}
                        </div>
                    </a>
                }
                {Access === "admin" &&
                    <a
                        href={`/${local}/Create`}
                        className="flex flex-row gap-4 hover:bg-gray-100 hover:scale-110"
                    >
                        <CreateSVG />
                        <div className="text-2xl font-bold text-black font-['Roboto'] ">
                            {createProduct}
                        </div>
                    </a>
                }
                {Access === "admin" &&
                    <a
                        href={`/${local}/Createpolicies`}
                        className="flex flex-row gap-4 hover:bg-gray-100 hover:scale-110"
                    >
                        <CreateSVG />
                        <div className="text-2xl font-bold text-black font-['Roboto'] ">
                            {createPolicy}
                        </div>
                    </a>
                }

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



// const cookies = new Cookies();
// const token = cookies.get('token')
// let Access

// useEffect(() => {
//     if (token !== undefined) {
//         const decodedHeader = jwtDecode(JSON.stringify(token));
//         Access = decodedHeader.sub;
//     }
// }, [token])

// const [Access, setAccess] = useState()
// setAccess(decodedHeader.sub)
// useEffect(() => {
//     if (token == true) {
//     }
// }, [token])