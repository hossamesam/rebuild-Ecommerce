"use client"
import { baseUrl } from '@/baseUrl'
import { Box, Button, Grid, Typography } from '@mui/material'
import axios from 'axios'
import { log } from 'console'
import React, { useEffect, useState } from 'react'
import { set } from 'zod'

function FilterSize() {
    const [FilterSizeData, setFilterSizeData] = useState([])

    useEffect(() => {
        axios.post(`http://localhost:8001/api/item-sizes/search`, {})
            .then((e) => {
                setFilterSizeData(e.data)
            })
            .catch((err) => {
                console.log("err: ", err);
            })
    }, [])


    return (
        <Box className='min-w-40 max-w-62 py-4 px-4  mx-auto flex flex-col justify-center items-center   bg-slate-100 '>
            <Typography variant="h5" color="initial" sx={{ fontWeight: "bolder", justifyContent: "center", alignItems: "center", display: "flex", my: "10px" }}>المقاس</Typography>

            <div className='grid grid-cols-3 gap-2'>
                {FilterSizeData.map((e) => {
                    return <button key={e.name} className="text-sm flex justify-center items-center min-w-2 max-w-16 text-black bg-sky-100 border-[1px] py-2 px-5 focus:outline-none hover:bg-sky-200 rounded border-sky-700">
                        {e.name}
                    </button>
                })}
            </div>

        </Box>
    )
}

export default FilterSize
