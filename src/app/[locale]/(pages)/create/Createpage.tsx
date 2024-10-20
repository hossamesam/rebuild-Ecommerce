"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Box, TextField, Typography, FormControlLabel, Checkbox, InputLabel, MenuItem, FormControl, Button, OutlinedInput, Input } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Image from 'next/image';
import babyIcon from '@/../public/icon-drower/babyIcon.svg';
import manIcon from '@/../public/icon-drower/manIcon.svg';
import womanIcon from '@/../public/icon-drower/womanIcon.svg';
import shoseIcon from '@/../public/icon-drower/shoseIcon.svg';
import axios, { Axios } from 'axios';
import { baseUrl } from "@/baseUrl";
import FormData from 'form-data'
import { useSelector } from 'react-redux';
import NotFound from '@/app/not-found';
import { redirect } from 'next/navigation';
import Loading from '../../components/Loading/loading';

interface createtypes {
  ProductType: string,
  ProductDetails: string,
  nameAr: string,
  nameEn: string,
  barcode: string,
  price: string,
  descriptionAr: string,
  descriptionEn: string,
  sizes: string,
  cloros: string,
  files: string,
  mens: string,
  women: string,
  baby: string,
  shoes: string,
  dir: string
}



let colors: string[]
let setColors: any

function Coloress() {
  [colors, setColors] = React.useState([]);
  const colorsHex = [
    "#e2e8f0", "#94a3b8", "#475569", "#1e293b",
    "#fecaca", "#f87171", "#dc2626", "#991b1b",
    "#bfdbfe", "#60a5fa", "#2563eb", "#1e40af",
    "#fde68a", "#fbbf24", "#d97706", "#92400e",
    "#d9f99d", "#a3e635", "#65a30d", "#3f6212",
    "#a5f3fc", "#22d3ee", "#0891b2", "#155e75",
    "#e9d5ff", "#c084fc", "#9333ea", "#6b21a8",
  ]
  // axios.get(`${baseUrl}/api/colors`).then((colur) => {

  // })
  return (
    <form action="" className='grid xl:grid-rows-4 sm:grid-rows-4 grid-rows-4 grid-flow-col gap-2 bg-white border-2 border-gray-500 border-dashed p-2'>
      {colorsHex.map((colur, index) =>
        <div key={index} className="flex flex-row gap-3">
          <label className="relative flex items-center text-gray-400  cursor-pointer" htmlFor="customStyle">
            <input type="checkbox"
              onChange={(e) => {
                if (colors.indexOf(e.target.value) < 0) {
                  setColors([...colors, e.target.value])
                }
                if (colors[colors.indexOf(e.target.value)] === e.target.value) {
                  colors.splice(colors.indexOf(e.target.value), 1)

                }


              }}
              value={colur}
              color='warning'
              style={{ backgroundColor: colur }}
              className={`before:content[''] peer relative h-5 w-5 cursor-pointer
            before:left-2/4 before:block before:h-6 before:w-6
            appearance-none rounded-full border before:-translate-y-2/4 before:-translate-x-2/4
            before:rounded-full  before:top-2/4
            border-gray-900/20 before:transition-opacity
            transition-all before:absolute
            before:bg-gray-200 before:opacity-0
            checked:border-gray-900
            #checked:bg-[#6925ce]
            checked:before:bg-blue-50
            hover:scale-105 hover:before:opacity-0`}
              id="customStyle"
            />
            <span
              className="absolute text-white  transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 " viewBox="0 0 20 20" fill="currentColor"
                stroke="currentColor" strokeWidth="1">
                <path fillRule="evenodd" stroke="#e7e5e4"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"></path>
              </svg>
            </span>
          </label>
        </div>
      )
      }
    </form>
  )
}


export default function Createpage({ dir, mens, women, baby, shoes, ProductType, ProductDetails, nameAr, nameEn, barcode, price, descriptionAr, descriptionEn, sizes, cloros, files }: createtypes) {

  const drawtitle = [
    { "title": baby, "icon": babyIcon, "link": "/baby_store", "id": "1" },
    { "title": mens, "icon": manIcon, "link": "/man_store", "id": "2" },
    { "title": women, "icon": womanIcon, "link": "/woman_store", "id": "3" },
    { "title": shoes, "icon": shoseIcon, "link": "/shoses_store", "id": "5" },
  ]

  const [getsort, setSort] = React.useState([]);
  const [getprice, setPrice] = React.useState("EGY");
  const [getsize, setItemSize] = React.useState([]);
  const [getnameAr, setNameAr] = React.useState("");
  const [getNameEn, setNameEn] = React.useState("");
  const [getbarcode, setBarcode] = React.useState("");
  const [getsellPrice, setSellPrice] = React.useState(Number);
  const [getdescription, setDescription] = React.useState("");
  const [getdescriptionTranslate, setdescriptionTranslate] = React.useState("");
  const [getCategory, setCategory] = React.useState("");

  // axios.post(`${baseUrl}/api/items`, "Data",
  //   {
  //     'headers': {
  //       'Content-Type': 'application/json;charset=UTF-8'
  //     }
  //   }
  // )
  const state: any = useSelector<any>((state) => state.HeaderSlice);
  const Access = state.Access
  const token = state.token

  let x = false;

  if (Access == "admin") {
    return (
      <Box dir={dir} className="lg:mx-24 xl:mx-64  mt-16 "  >
        <div dir={dir}>

          <div className='bg-gray-100 border-2 border-gray-500 border-solid rounded-lg p-2 ml-10 mb-5'>
            <h1 className='text-2xl text-black font-bold m-1'>{ProductType}</h1>
            <hr className='border-1 box-content  border-gray-500' />
            <ul className='flex flex-row gap-4  my-4 text-white'>
              {drawtitle.map((e, index) => {
                return (
                  <li key={index} className='flex flex-col w-3/4'>
                    <input id={"end" + index} name={"hosting"} required className='peer hidden ' type="radio" onChange={() => setCategory(e.id)} />
                    <label htmlFor={"end" + index} className='flex flex-col  py-4 h-28 rounded-2xl   bg-gray-800 hover:bg-gray-700  peer-checked:text-s peer-checked:bg-blue-800 cursor-pointer '>
                      <div className='flex flex-col  '>
                        <Image alt='index' className='invert  peer-checked:invert-0 flex self-center z-10' width={40} src={e.icon} />
                        <hr className='mt-2 border-2 w-full border-neutral-200' />
                        <div className='flex justify-center py-2 self-center '>{e.title}</div>
                      </div>
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>



          <div className='bg-gray-100 border-2 border-gray-500 border-solid rounded-lg p-2 ml-10 mb-5'>
            <h1 className='text-2xl text-black font-bold  m-1'>{ProductDetails}</h1>
            <hr className='border-1 box-content  border-gray-500' />

            <div className='grid  grid-cols-2   gap-4 my-4'>
              <Box>
                <Typography variant="body1" color="initial"> {nameAr}</Typography>
                <TextField
                  onChange={(e) => setNameAr(e.target.value)}
                  placeholder={nameAr}
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box>
                <Typography variant="body1" color="initial">{nameEn}</Typography>
                <TextField
                  onChange={(e) => setNameEn(e.target.value)}
                  placeholder={nameEn}
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box>
                <Typography variant="body1" color="initial">{barcode}</Typography>
                <TextField
                  onChange={(e) => setBarcode(e.target.value)}
                  placeholder={barcode}
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box className="flex flex-row w-full">

                <Box className="w-full">
                  <Typography variant="body1" color="initial">{price}</Typography>
                  <TextField
                    type='number'
                    onChange={(e) => { setSellPrice(Number(e.target.value)) }}
                    placeholder={price}
                    variant="filled"
                    fullWidth
                  />
                </Box>

                <Box>
                  <h1>&nbsp;</h1>
                  {/* <Typography variant="body1" color="initial">العملة</Typography> */}
                  <Select
                    variant="filled"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="price"
                    onChange={(e) => {
                      setPrice(e.target.value)
                    }}
                    value={getprice}
                  >
                    <MenuItem value={"EGY"} >EGY</MenuItem>
                    <MenuItem value={"USD"} >$</MenuItem>
                    <MenuItem value={"EUR"} >€</MenuItem>
                    <MenuItem value={"BTC"} disabled>฿</MenuItem>
                    <MenuItem value={"JPY"} disabled>¥</MenuItem>
                  </Select>
                </Box>
              </Box>

              <form action="" className='flex flex-col'>
                <label htmlFor="message" className='text-gray-800'>{descriptionAr}</label>
                <textarea id="message" rows={4} className='text-gray-800 border-2 border-gray-500 border-dashed p-2' onChange={(e) => setDescription(e.target.value)}></textarea>
              </form>

              <form action="" className='flex flex-col'>
                <label htmlFor="message" className='text-gray-800'>{descriptionEn}</label>
                <textarea id="message" rows={4} className='text-gray-800 border-2 border-gray-500 border-dashed p-2' onChange={(e) => setdescriptionTranslate(e.target.value)}></textarea>
              </form>

              <Box>
                <Typography variant="body1" color="initial">{sizes}</Typography>
                <FormControl fullWidth dir='ltr'>
                  <InputLabel
                    id="demo-simple-select-label">{sizes}</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={(e) => {
                      setItemSize(e.target.value)
                    }}
                    multiple
                    value={getsize}
                    input={<OutlinedInput label="Name" />}

                  >
                    <MenuItem value={"SM"} >small</MenuItem>
                    <MenuItem value={"MD"} >md</MenuItem>
                    <MenuItem value={"L"} >l</MenuItem>
                    <MenuItem value={"XL"} >xl</MenuItem>
                    <MenuItem value={"XXL"} >xxl</MenuItem>
                    <MenuItem value={"XXXL"} >xxxl</MenuItem>

                  </Select>
                </FormControl>
              </Box>





              <div >
                <Typography variant="body1" color="initial">{cloros}</Typography>
                <Coloress />
              </div>

            </div>
            <div className="flex items-start justify-center text-center w-full  ">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-black border-dashed rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-300 bg-gray-200   dark:hover:border-gray-500 dark:hover:bg-gray-600 dark:border-gray-500 ">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden " multiple

                  onChange={(e) => {
                    let formData = new FormData();
                    formData.append("file", e.target.files[0]);

                    axios.post(`${baseUrl}/api/attachments`, formData, {
                      "headers": {
                        "Authorization": `Bearer ${token}`,
                        'Content-Type': `multipart/form-data `,
                      }
                    })
                      .then((res) => console.log(res))
                      .catch((err) => console.log(err))

                    setSort([...getsort, URL.createObjectURL(e.target.files[0])])
                    console.log(e.target.value + "\n" + "URL = " + URL.createObjectURL(e.target.files[0]));
                  }} />
              </label>
            </div>

            <div className='flex flex-row gap-2'>
              {getsort.map((e, index) => (
                <div key={index} className='w-52 h-52 flex items-center justify-center bg-white border-2 border-neutral-500 rounded-lg border-solid  text-red-500 mt-2'>
                  <img className='object-fill h-full w-full rounded-md' src={e} />
                </div>
              ))
              }
            </div>


            <Button
              type='submit'
              variant='contained'
              className='my-4 flex center'
              onClick={() => {

                const obj = {
                  "barcode": getbarcode,
                  "nameAr": getnameAr,
                  "nameTranslate": { "en": getNameEn },
                  "description": getdescription,
                  "descriptionTranslate": { "en": getdescriptionTranslate },
                  "sizes": getsize,
                  "sellPrice": getsellPrice,
                  // "colors": colors,
                  "colors": [{ id: 1 }],
                  "category": { "id": getCategory },
                }
                console.log(obj);
                axios.post(`${baseUrl}/api/items`, obj,
                  {
                    'headers': {
                      "Authorization": `Bearer ${token}`,
                    }
                  })
                  .then((request) => {
                    console.log(request)

                  })
                  .catch((err) => console.log(err))
                // var json = JSON.stringify(obj);
                // var fs = require('fs');
                // fs.writeFile('baby.json', json, 'utf8',true);

              }}
            >
              انشاء  منتج جديد
            </Button>



          </div>
        </div>
      </Box >
    )
  }
  else if (Access == "pending") {
    return <Loading />
  }
  else if (Access == "") {
    return <NotFound />
  }
}



// <form className='grid xl:grid-rows-4 sm:grid-rows-4 grid-rows-4 grid-flow-col
// gap-2 bg-white border-2 border-gray-500 border-dashed p-2'>
// <div className='w-6 h-6  bg-red-200   rounded-3xl border-2 border-black/20 shadow-lg shadow-black/20'  >
//   <input key={"colors"} id="colors" name="colors" required type="checkbox" className='hidden peer' />
//   <label htmlFor="colors" className='  peer-checked/colors:hidden '>
//     <div className="justify-center items-center" >
//       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
//         <path fill="#000" fontWeight="bold" d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z"></path>
//       </svg>
//     </div>
//   </label>
// </div>

// <div className='h-6 w-6 bg-red-400   rounded-3xl border-2 border-black/20 shadow-lg shadow-black/20	  ' />
// <div className='h-6 w-6 bg-red-600   rounded-3xl border-2 border-black/20 shadow-lg shadow-black/20	  ' />
// <div className='h-6 w-6 bg-red-800   rounded-3xl border-2 border-black/20 shadow-lg shadow-black/20	  ' />
// <div className='h-6 w-6 bg-blue-200   rounded-3xl border-2 border-black/20 shadow-lg shadow-black/20	  ' />
// <div className='h-6 w-6 bg-blue-400   rounded-3xl border-2 border-black/20 shadow-lg shadow-black/20	  ' />
// <div className='h-6 w-6 bg-blue-600   rounded-3xl border-2 border-black/20 shadow-lg shadow-black/20	  ' />

// </form>
