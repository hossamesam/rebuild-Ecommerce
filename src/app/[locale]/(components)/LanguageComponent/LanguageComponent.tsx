import { Link } from '@/navigation'
import React from 'react'
import { LanguageLogo } from '../../../../../public/svg'

export default function LanguageComponent({ local, path }: any) {
    return (
        <Link
            locale={local === "ar" ? "en" : "ar"}
            href={`/${path}`}
            className="flex  items-center justify-center flex-row gap-2 max-sm:h-10 max-sm:w-10 max-sm:bg-slate-500 max-sm:rounded-full max-sm:hover:bg-slate-600 hover:scale-105 hover:border-[1px] rounded p-1"
        >
            <LanguageLogo />
            <div
                className="text-xl max-sm:hidden sm:whitespace-nowrap sm:text-[20px]  font-bold text-white font-['Roboto'] "
            >
                {local === "ar" ? "English" : "العربية"}
            </div>
        </Link>
    )
}

