"use client"
import { baseUrl } from '@/baseUrl'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MyShoping, MyShopingData, MyShopingDataCount } from '../../../../types/app'
import { Minus, Plus, RemoveFormatting, RemoveFormattingIcon, Trash, Trash2 } from 'lucide-react'
import { useImmer } from 'use-immer'
import { AlertAttention } from '../../components/Alerts/Alerts'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveItemFromCartAction } from '@/Redux/shopSlice'

export default function page() {
    const state: any = useSelector<any>((state) => state.shopSlice);
    const dispatch = useDispatch()


    function CartData() {
        const [itemsCarts, setitemsCarts] = useState([] as MyShoping | [])// {id ,count}
        const [CartData, setCartData] = useState([] as MyShopingDataCount | []) // {data,count}

        function Changecount(key: string, index: number, count: number) {
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
                                return { ...CartData[index], count: count > 1 ? (count - 1) : 1 };
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
                    break;
                case "delet":
                    try {
                        if (confirm("هل انت متأكد انك تريد حذف هذا المنتج ؟")) {
                            setCartData(CartData.filter((c, i) => i !== index))
                        }
                        // dispatch(RemoveItemFromCartAction())
                        // useEffect(() => {
                        //     if (state.RemoveItemFromCartEnd === false) {
                        //         dispatch(RemoveItemFromCartAction())
                        //     }
                        //     else if (state.RemoveItemFromCartEnd === true) {
                        //         setCartData(CartData.filter((c, i) => i !== index))
                        //         dispatch(RemoveItemFromCartAction())
                        //     }
                        // }, [first])

                        // const deletCounters = CartData.map((c, i) => {
                        //     if (i !== index) {
                        //         // Increment the clicked counter
                        //         return { ...CartData[index] };
                        //     } else {
                        //         // The rest haven't changed
                        //         return c;
                        //     }
                        // })
                        // setCartData(deletCounters)
                        // console.log("CartData:" + CartData);
                        // console.log("deletCounters:" + deletCounters);
                    }
                    catch {
                        console.log("CartData update :", CartData);
                    }
                    break;
            }
            console.log("CartData:ss:", CartData);
            localStorage.setItem("iteme", JSON.stringify(CartData))

        }

        useEffect(() => {
            (JSON.parse(localStorage.getItem("item")!)) != null && setitemsCarts(JSON.parse(localStorage.getItem("item")!))
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
                <div key={data.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-[550px]:gap-6   border-t border-gray-200 py-6">
                    <div className="flex  flex-col gap-3 min-[550px]:gap-6 w-full max-xl:justify-center   max-xl:mx-auto">
                        <div className="flex gap-4     max-w-[600px] min-h-[200px] max-h-[600px] ">
                            <img
                                src="https://pagedone.io/asset/uploads/1701162880.png"
                                alt="perfume bottle image"
                                className=" rounded-xl object-fill max-w-[300px] max-h-[200px] self-start"
                            />
                            <div className="flex gap-4  flex-col ">
                                <h5 className="flex font-semibold text-xl leading-8  max-w-[306px] text-black text-nowrap text-ellipsis overflow-hidden">
                                    {data.nameAr}
                                </h5>
                                <h6 className="font-manrope  font-bold text-2xl leading-9 text-black text-nowrap  max-w-[176px]">
                                    ${data.sellPrice}
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className=" grid-cols-3  items-center   justify-center   flex max-sm:flex-row w-full  gap-2 ">

                        <div className="flex  items-center  justify-center ">
                            <button value={"plus"} onClick={e => {
                                console.log("CartData :")
                                Changecount(e.currentTarget.value, index, count)
                            }
                            }
                                className=" bg-[#aacaf6] min-h-12 max-h-24 rtl:rounded-r-full ltr:rounded-l-full px-2 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                <Plus />
                            </button>
                            <input
                                type="text"
                                className=" bg-[#aacaf6] min-h-12 max-h-24 min-w-12 max-w-24 text-gray-900 font-semibold text-lg   placeholder:text-gray-900  text-center "
                                placeholder={`${count}`}
                            ></input>
                            <button
                                value={"minus"}
                                onClick={e => Changecount(e.currentTarget.value, index, count)}
                                className=" bg-[#aacaf6] min-h-12 max-h-24 rtl:rounded-l-full  ltr:rounded-r-full px-2   flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                <Minus />
                            </button>
                        </div>
                        <h6 className="text-blue-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                            ${data.sellPrice * count}
                        </h6>
                        <button
                            value={"delet"}
                            onClick={e => Changecount(e.currentTarget.value, index, count)}
                            className=' p-2  flex items-center justify-center bg-red-500 rounded-full'
                        >
                            <Trash2 color='#f4f4f4' />
                        </button>
                    </div>
                </div >

            ))

        }
        return <CartDataUI />
        // if (itemsCarts !== null | undefined | []) {
        // }
        // else { return <></> }
    }


    return (
        <>
            <section className="py-24 ltr relative border-2 bg-slate-50 rounded-2xl w-4/6 max-lg:w-full mx-auto my-10">
                <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                    <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
                        Shopping Cart
                    </h2>
                    <CartData />
                    <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-full max-lg:mx-auto">
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

                        </button>
                        <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
                            Continue to Payment

                        </button>
                    </div>
                </div>
            </section>
            {/* {state.RemoveItemFromCart && <AlertAttention />} */}
        </>
    )
}
