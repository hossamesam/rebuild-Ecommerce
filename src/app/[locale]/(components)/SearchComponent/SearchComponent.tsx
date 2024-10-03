import React from 'react'
import { SearchLogo } from '../../../../../public/svg'

function SearchComponent() {
    return (
        <search
            id="search"
            className="flex max-sm:hidden  justify-center items-center pt-2  grow  relative mx-auto text-gray-600"
        >
            <div className="w-5/6 relative">
                <input
                    className="w-full pl-4 border-2 border-gray-300 bg-white h-10 pr-12  rounded-lg  focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                />

                <button type="submit" className="absolute  right-5 top-3 ">
                    <SearchLogo />
                </button>
            </div>
        </search>
    )
}

export default SearchComponent
