import { X } from 'lucide-react'
import React, { useEffect } from 'react'
import { StatusType } from '../../../../types/app'
import { useDispatch } from 'react-redux'
import { RemoveItemFromCartAction, RemoveItemFromCartEndAction } from '@/Redux/shopSlice'



export function AlertStatus({ Status, Text }: StatusType) {
    function MyState() {
        switch (Status) {
            case "Success": return <h2 className="mx-4 flex justify-center items-center w-8 h-8 border-4 border-green-500 bg-green-500  rounded-full text-white text-md">✓</h2>
            case "Error": return <h2 className="mx-4 flex justify-center items-center w-8 h-8 border-4 border-red-500 bg-red-500  rounded-full text-white text-md">✕</h2>
            case "Warning": return <h2 className="mx-4 flex justify-center items-center w-8 h-8 border-4 border-orange-500 bg-orange-500  rounded-full text-white text-md">!</h2>
            default:
                break;
        }
    }


    return (

        <div
            onAnimationEnd={(e) => {
                e.currentTarget.style.display = "none"
            }}
            onMouseEnter={() => {
                document.getElementById("loader")!.style.animationPlayState = "paused"
            }}
            onMouseLeave={() => {
                document.getElementById("loader")!.style.animationPlayState = "running"
            }}
            id='myalert'
            className=" shadow-md shadow-slate-400 w-[400px] h-[90px]  bg-slate-50 fixed top-[110px] right-4 z-10  rounded-md">
            <button className="left-2 top-2 absolute z-[100]" onClick={() => { document.getElementById("myalert")!.style.display = "none" }}>
                <X size={20} />
            </button>
            <div className="font-bold h-full flex  items-center">
                <MyState />{/*Success/Error/Warning => tags  */}
                <h2 className="font-thin h-full flex  items-center "> {Text}</h2>
            </div>
            <div id="loader" className={`loader${Status}`} ></div>
        </div >
    )
}


export function AlertAttention() {
    const dispatch = useDispatch()
    return (
        <div className="flex fixed top-0 w-full h-full bg-slate-400/25 z-50 ">

            <div className='h-[200px] w-[400px] m-auto bg-slate-100 border-2  flex flex-col  items-center justify-center z-50 rounded-lg '>
                <div className='flex justify-center items-center '>
                    هل انت متأكد انك تريد حذف هذا المنتج ؟
                </div>

                <div className='mt-4 gap-20 flex'>
                    <button
                        onClick={() => {
                            dispatch(RemoveItemFromCartAction())
                        }
                        }
                        className='p-2 px-6 rounded-md text-zinc-800 text-lg font-bold  bg-blue-300' > لا</button>
                    <button
                        onClick={() => {
                            dispatch(RemoveItemFromCartEndAction())
                            // dispatch(RemoveItemFromCartAction())
                        }
                        }
                        className='p-2 px-6 rounded-md text-zinc-800 text-base font-bold bg-red-500'>حذف</button>
                </div>
            </div>
        </div>
    )
}
