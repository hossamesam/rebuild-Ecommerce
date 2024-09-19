import React from 'react'
import MagnifierImg from '@/app/[locale]/(components)/magnifier'
import db_woman from "@/../../public/oldproject/woman.json";
import { Box, Chip, Divider, Fab, Rating, Typography } from '@mui/material';
import SelectCity from '@/app/[locale]/(components)/SelectCity';
import { usePathname } from 'next/navigation'
import ImgSlider from '@/app/[locale]/(components)/(imgSlider)/ImgSlider.jsx';


import { notFound } from 'next/navigation';
import Usebanner from '@/app/[locale]/(components)/slide/usebanner';
import DescriptionProduct from '@/app/[locale]/(components)/(DescriptionProduct)/DescriptionProduct';
import CarouselProduct from '@/app/[locale]/(components)/(anotherProduct)/CarouselProduct';

interface ShowProductDataType {
  params: {
    id: any;
    title: string;
    price: number;
    discribtion: string;
    colors: any;
  }
}

export default function page(props: ShowProductDataType) {
  // const router = usePathname().split('/')
  // const loc = router[2] == 'man' ? db_man : db_baby
  const x = db_woman.map((e) => {
    // console.log("router[2] " + router[2]);
    // console.log("e.id: " + e.id);
    // console.log("props.params.id: " + props.params.id);
    if (e.id == props.params.id) {

      return (
        <Box
          key={e.id}
          sx={{
            display: "flex", mt: "100px"
          }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",

          }}>
            <MagnifierImg sampleImg={e.imageSrc} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "100px 0px auto 0",
                padding: "20px",
                border: "1px solid rgba(0,0,0,.2)",
                boxShadow: "0px 0px 2px #000000",
                color: "black",
                bgcolor: "white",
                maxWidth: "100%",
                mr: "2%",
                zIndex: "100",

              }}>
              <Typography variant='h4' component={"h4"} sx={{ display: "flex", mt: "15px" }}>
                150 جنيه
              </Typography>
              <SelectCity />
              <Fab
                variant="extended"
                size="medium"
                color="primary"
                sx={{ mt: "10px" }}
              >
                أضف إلي العربة
              </Fab>
              <Fab
                variant="extended"
                size="medium"
                color="primary"
                sx={{ mt: "10px" }}
              >
                اشترٍ الآن
              </Fab>
            </Box>
          </Box>
          <Typography variant='h5'
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "20px 25px 20px 20px",
              color: "black",
              bgcolor: "white",
              lineHeight: "3",
              maxWidth: "100%",
              mr: "8px",
              border: "1px solid rgba(0,0,0,.1)",
              boxShadow: "0px 0px 2px #000000",
            }}>
            <Typography variant='h5' margin="10px auto 0 auto">
              طقم دفاية بيبى شتوى قطيفة
            </Typography>
            <Typography variant='h4' component={"h4"} sx={{ display: "flex", mt: "15px" }}>
              150 جنيه
              <Typography
                variant='h4'
                component={"h4"}
                sx={{
                  mr: "10px",
                  color: "GrayText"
                }}>
                <sub style={{ textDecoration: "line-through 3px" }}>
                  300 جنيه
                </sub>
              </Typography>
            </Typography>
            الأسعار تشمل ضريبة القيمة المضافة
            <Rating name="read-only" value={3.8} readOnly sx={{ fontSize: "40px", mb: "20px" }} />
            <Divider />
            <Typography variant="h5" margin={"15px 0"} color="initial">
              الحجم : 6 شهور
              <br />
              اللون :
            </Typography>
            <Divider />
            <Typography variant='h3' margin="15px auto 0 auto" > تفاصيل المنتج</Typography>
            تركيبة المواد100% قطيفة
            تعليمات العنايةHand Wash Only
            نوع السحّابPull On
          </Typography>
        </Box >
      )
    }
    // else if (e.id != props.params.id) return notFound()
  }
  )
  return (
    <>
      <div className=' flex justify-center max-lg:grid max-lg:grid-cols-1 my-4 mb-10'>
        {/* photos show */}
        <div className=' h-[800px] max-lg:h-[500px]'>
          <ImgSlider />
        </div>
        {/* descriptions show */}
        <div className=' bg-[rgb(247,247,247)] p-6 border-2  w-2/4 min-h-40 max-h-[800px] max-lg:w-auto'>
          <DescriptionProduct />
        </div>
      </div>

      <CarouselProduct />
    </>

  )
}

