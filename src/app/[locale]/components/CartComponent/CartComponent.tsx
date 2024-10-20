import React from 'react'
import { CartLogo } from '../../../../../public/svg'

function CartComponent({ local, ShoppingCar }: { local: string, ShoppingCar: string }) {
    return (
        <a
            // onClick={close_menu_Shop}
            href={`/${local}/MyBuy`}
            className="flex  items-center justify-center flex-row gap-2 max-sm:h-10 max-sm:w-10 max-sm:bg-slate-500 max-sm:rounded-full max-sm:hover:bg-slate-600 hover:scale-105 hover:border-[1px] rounded p-1">
            <CartLogo />
            <div className="text-2xl max-sm:hidden sm:whitespace-nowrap sm:text-[20px]  font-bold text-white font-['Roboto'] ">
                {ShoppingCar}
            </div>
        </a>
    )
}

export default CartComponent
