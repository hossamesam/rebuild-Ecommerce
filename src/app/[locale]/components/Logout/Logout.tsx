
import React from 'react'
import { LogOut } from 'lucide-react';
import Cookies from 'universal-cookie';
import { useDispatch } from 'react-redux';
import { LogoutAction, signNow } from '@/Redux/HeaderSlice';
import { redirect } from 'next/navigation';

export default function Logout({ classNameOftext = "text-2xl font-bold text-black font-['Roboto'] ", className = "flex gap-4 flex-row  hover:bg-gray-100 hover:scale-110  ", color = "black", size = 28 }: any) {
    const cookies = new Cookies();
    const dispatch = useDispatch()
    return (
        <div>
            <button
                onClick={() => {

                    cookies.remove('token')
                    dispatch(LogoutAction())
                }}
                className={className}
            >
                <LogOut color={color} size={size} />
                <div className={classNameOftext}>
                    تسجيل الخروج
                </div>
            </button>
        </div>
    )
}



