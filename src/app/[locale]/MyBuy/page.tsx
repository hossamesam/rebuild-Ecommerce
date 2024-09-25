"use client"
import { baseUrl } from '@/baseUrl'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MyShoping, MyShopingData } from '../types/app'
import { Minus, Plus } from 'lucide-react'
import { promise } from 'zod'
import { useImmer } from 'use-immer'
export default function page() {


    function CartData() {
        const [countState, setcountState] = useState(1)
        const [CartData, setCartData] = useImmer([])
        const [itemsCarts, setitemsCarts] = useState([] as MyShoping | [])

        function Changecount(key: string, index: number, count: number) {
            console.log("CartData :", CartData);

            switch (key) {
                case "plus":
                    try {
                        const nextCounters = CartData.map((c, i) => {
                            if (i === index) {
                                // Increment the clicked counter
                                return { ...CartData[index], count: count + 1 };
                            } else {
                                // The rest haven't changed
                                return c;
                            }
                        })
                        setCartData(nextCounters)
                    }
                    catch {
                        console.log("CartData update :", CartData);
                    }
                    break;
                case "minus":
                    try {
                        const minusCounters = CartData.map((c, i) => {
                            if (i === index) {
                                // Increment the clicked counter
                                return { ...CartData[index], count: count > 0 ? (count - 1) : 0 };
                            } else {
                                // The rest haven't changed
                                return c;
                            }
                        })
                        setCartData(minusCounters)
                    }
                    catch {
                        console.log("CartData update :", CartData);
                    }
            }
        }

        useEffect(() => {
            !!(JSON.parse(localStorage.getItem("item"))) != null && setitemsCarts(JSON.parse(localStorage.getItem("item")))
        }, [])

        useEffect(() => {
            itemsCarts?.map((item) => {
                axios.get(`${baseUrl}/api/items/${item.id}`)
                    .then((iteme) => {
                        setCartData((prevTodos: MyShoping) => {
                            return [...prevTodos, { data: iteme.data, count: item.count }];
                        })
                    })
                    .catch((err) => console.log(console.log(err)))
            })

        }, [itemsCarts])

        console.log("CartData: ", CartData);


        const CartDataUI = () => {
            return CartData.map(({ data, count }: { data: MyShopingData, count: number }, index) => (
                <div key={data.id} className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                    <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                        <div className="img-box">
                            <img
                                src="https://pagedone.io/asset/uploads/1701162880.png"
                                alt="perfume bottle image"
                                className="xl:w-[140px] rounded-xl object-cover"
                            />
                        </div>
                        <div className="pro-data w-full max-w-sm ">
                            <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                                {data.nameAr}
                            </h5>
                            <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                                {data.description}
                            </p>
                            <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">
                                ${data.sellPrice}
                            </h6>
                        </div>
                    </div>
                    <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                        <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                            ${data.sellPrice}
                            <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">
                                (Delivery Charge)
                            </span>
                        </h6>
                        <div className="flex  items-center w-full mx-auto justify-center">
                            <button value={"plus"} onClick={e => {
                                console.log("CartData :")
                                Changecount(e.currentTarget.value, index, count)
                            }
                            }
                                className="group bg-sky-100 rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                <Plus />
                            </button>
                            <input
                                type="text"
                                className="border-y bg-sky-100 text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px]  placeholder:text-gray-900 py-[15px] text-center "
                                value={count}
                            ></input>
                            <button
                                value={"minus"}
                                onClick={e => Changecount(e.currentTarget.value, index, count)}
                                className="rtl group bg-sky-100 rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                <Minus />
                            </button>
                        </div>
                        <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                            ${data.sellPrice * 2}
                        </h6>
                    </div>
                </div >

            ))

        }
        if (itemsCarts !== null | undefined | []) {
            return <CartDataUI />
        }
        else { return <></> }
    }


    return (
        <section className="py-24 ltr relative ">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
                    Shopping Cart
                </h2>
                <div className="hidden lg:grid grid-cols-2 py-6">
                    <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
                    <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                        <span className="w-full max-w-[200px] text-center">
                            Delivery Charge
                        </span>
                        <span className="w-full max-w-[260px] text-center">Quantity</span>
                        <span className="w-full max-w-[200px] text-center">Total</span>
                    </p>
                </div>

                <CartData></CartData>


                <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                    <div className="flex items-center justify-between w-full mb-6">
                        <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                        <h6 className="font-semibold text-xl leading-8 text-gray-900">
                            $360.00
                        </h6>
                    </div>
                    <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                        <p className="font-normal text-xl leading-8 text-gray-400">
                            Delivery Charge
                        </p>
                        <h6 className="font-semibold text-xl leading-8 text-gray-900">
                            $45.00
                        </h6>
                    </div>
                    <div className="flex items-center justify-between w-full py-6">
                        <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
                            Total
                        </p>
                        <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">
                            $405.00
                        </h6>
                    </div>
                </div>
                <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                    <button className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                        <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">
                            Add Coupon Code
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path
                                d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                                stroke="#4F46E5"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
                        Continue to Payment
                        <svg
                            className="ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width={23}
                            height={22}
                            viewBox="0 0 23 22"
                            fill="none"
                        >
                            <path
                                d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                                stroke="white"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

// function ChangeItems({ data_id }) {
//     useEffect(() => {
//         const basket = localStorage?.getItem("item") != null | undefined
//             ? JSON.parse(localStorage?.getItem("item"))
//             : []

//         if (basket.length != 0) {
//             let item = basket.filter((e) => {
//                 return e.id == data_id
//             });
//             if (item != 0) {
//                 let index = basket.findIndex(i => i.id == data_id);
//                 item[0].count = item[0].count + 1;
//                 basket[index] = item[0]
//             } else {
//                 basket.push({ id: data_id, count: 1 })
//             }
//         } else {
//             basket.push({ id: data_id, count: 1 })
//         }
//         return localStorage.setItem("item", JSON.stringify(basket))
//     }, [data_id])
// }