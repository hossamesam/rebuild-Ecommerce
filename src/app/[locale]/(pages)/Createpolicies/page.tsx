"use client"
import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import React, { DetailedHTMLProps, useEffect, useRef, useState } from 'react'
import { InputLogoSVG } from '../../../../../public/svg';
import axios from 'axios';
import { baseUrl } from '@/baseUrl';
import InputImage from '../../components/InputImage/InputImage';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { policeSchema } from '@/types/app';
import { jsx } from 'react/jsx-runtime';
import { string } from 'zod';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading/loading';
import NotFound from '@/app/not-found';


export default function page() {
    const ref = useRef(null);

    const [getsort, setSort] = useState([]);

    const { handleSubmit, register,
        formState: { errors, isSubmitting, isDirty, isValid }
    } = useForm<FormData>({
        mode: 'onChange',
        resolver: zodResolver(policeSchema)
    })



    function handleClick(event: any) {
        // console.log(data.getAll("policeName"));

        // Do a bit of work to convert the entries to a plain JS object
        const value = Object.fromEntries(event.entries()) as { name: string, description: string }

        let data = {
            "name": { "ar": value.name },
            "description": { "ar": value.description },
            "guid": ref.current[0]?.guid || null,
        }
        // console.log(data);

        axios.post(`${baseUrl}/api/policies`,
            data,
            {
                headers: { Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcyOTA4MjY5NiwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzI4OTk2Mjk2fQ.smjsoCnYLsQtFCDtz1DLj9aHEoMKkArRTwLA1Pv471c6H73jJ006jL2-KRBcJ-wXHQexTZGaCdyh9_iJvYrqhw" }
            })
            .then((e) => console.log(e))
            .catch((err) => console.log(err))
    }
    const state: any = useSelector<any>((state) => state.HeaderSlice);
    const Access = state.Access
    const token = state.token

    if (Access == "admin") {
        return (
            <>
                <form method='post' action={handleClick} className='flex flex-col gap-4 lg:mx-24 xl:mx-64  mt-16 bg-gray-100 border-2 border-gray-500 border-solid rounded-lg p-2 ml-10 mb-5'>
                    <Typography variant="h4" color="initial"> انشاء سياسة جديدة</Typography>
                    <Divider />

                    <Box >
                        <Typography variant="h5" color="initial">اسم السياسة</Typography>
                        <TextField
                            // onChange={(e) => setNameAr(e.target.value)}
                            // {...register("policeName")}
                            name='name'
                            placeholder={"اسم السياسة"}
                            variant="outlined"
                            fullWidth
                        />
                    </Box>

                    <Box className='flex flex-col'>
                        <Typography variant="h5" color="initial" className='text-gray-800'>وصف السياسة</Typography>
                        <textarea
                            name='description'
                            onSubmit={(e) => { `policeDescription${e.currentTarget.value}` }}
                            id="message" rows={4} className='text-gray-800 border-2 border-gray-500 border-dashed p-2'></textarea>
                    </Box>

                    <Box className='flex flex-col'>
                        <Typography variant="h5" color="initial" className='text-gray-800'> اضافة ايكونة</Typography>
                        <InputImage ref={ref} />
                    </Box>

                    <Button type='submit' variant='contained' className='w-24 text-lg'>اضافة</Button>
                </form>
            </>
        )
    }
    else if (Access == "pending") {
        return <>
            <Loading />
        </>
    }
    else {
        
        return  <NotFound />

    }
}

