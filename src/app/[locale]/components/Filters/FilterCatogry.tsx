'use client'
import { baseUrl } from '@/baseUrl'
import { categoriesType } from '@/types/app'
import { Box, Stack, Typography } from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function FilterCatogry() {
    const [DataCategories, SetDataCategories] = useState([] as categoriesType)
    useEffect(() => {
        axios.get(`${baseUrl}/api/categories`)
            .then((e) => {
                SetDataCategories(e.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <Box>

                <Typography variant="h5" color="initial" sx={{ fontWeight: "bolder", justifyContent: "center", alignItems: "center", display: "flex", my: "10px" }}>الفئة</Typography>
                <Stack sx={{ scrollbarWidth: "thin", scrollbarColor: "rgb(0,0,0) rgb(190,220,255)" }} className="h-72 flex flex-col ml-2 px-4 overflow-x-hidden" spacing={1}>
                    {DataCategories.map((e) => <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">{e.nameAr}</Typography></Link>)
                    }
                    {/* <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">قمصان</Typography></Link>
                    <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">جينز و بنطلونات</Typography></Link>
                    <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">ملابس النوم و ملابس داخلية</Typography></Link>
                    <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">ملابس سباحة و شورتات</Typography></Link>
                    <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">ملابس رياضية</Typography></Link>
                    <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">اكسسوارات</Typography></Link>
                    <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">شرابات</Typography></Link>
                    <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">ساعات</Typography></Link>
                    <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">بدل</Typography></Link>
                    <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">كارديجن و بلوفرات</Typography></Link>
                    <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">جواكيت و بلاطي</Typography></Link>
                    <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">هوديز و سويتشيرتات</Typography></Link> */}
                </Stack>
            </Box>
        </>
    )
}

export default FilterCatogry
