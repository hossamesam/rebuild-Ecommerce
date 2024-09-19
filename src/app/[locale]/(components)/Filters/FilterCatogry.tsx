import { Box, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function FilterCatogry() {
    return (
        <>
            <Box>
                <Typography variant="h5" color="initial" sx={{ fontWeight: "bolder", justifyContent: "center", alignItems: "center", display: "flex", my: "10px" }}>الفئة</Typography>
                <Stack sx={{ scrollbarWidth: "thin", scrollbarColor: "rgb(0,0,0) rgb(190,220,255)" }} className="h-72 flex flex-col ml-2 px-4 overflow-x-hidden" spacing={1}>
                    <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">قمصان</Typography></Link>
                    <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">تي شيرتات و بولو</Typography></Link>
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
                    <Link href={"#"} className='hover:text-indigo-700'><Typography variant="h6">هوديز و سويتشيرتات</Typography></Link>
                </Stack>
            </Box>
        </>
    )
}

export default FilterCatogry
