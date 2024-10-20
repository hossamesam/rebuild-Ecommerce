"use client"
import { MyShopingData } from '@/types/app'
import { Box, Divider, Rating, Typography } from '@mui/material'
import React from 'react'

function DescriptionProduct({ Data, Locale }: { Data: MyShopingData, Locale: any }) {

    return (
        <div className='p-2 ' >
            {/* {Data.id}ssssss */}
            <Typography variant='h5' >
                {Locale == "ar" ? Data.nameAr : Data.nameTranslate.en}</Typography>
            <Box className="flex flex-row justify-between relative">
                <Typography variant='h6' className='text-red-500' >العلامة التجارية: ال جي</Typography>
                <Rating className='absolute left-0 bottom-1' dir='ltr' name="half-rating-read " defaultValue={2.5} precision={0.5} readOnly />
            </Box>
            <Divider />
            <Box className="grid grid-cols-[1fr_auto] justify-between w-full">
                <Typography className='py-3 grow' variant='h5' >{Data.sellPrice}<sup>00</sup> <sup>جنيه</sup>  </Typography>
                <Typography className='text-red-500  grow-0' variant='h3'>22%</Typography>
                <Box className='flex gap-2'>
                    <Typography className='' variant='body1' > السعر قبل:  </Typography>
                    <Typography className='line-through' variant='body1' >  24,999.00 <sub>جنيه</sub> </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant='h6' content='p' className='text-justify'>
                    {Locale == "ar" ? Data.description : Data.descriptionTranslate.en}
                </Typography>
            </Box>

            <Box className="py-4 my-2 max-w-[350px] overflow-y-hidden overflow-x-scroll" >
                <div className="flex flex-row justify-around items-around" style={{ height: 76 }}>
                    <ol
                        className="flex flex-row"
                        role="list"
                        style={{ transform: "translateX(0px) translateZ(0px)" }}
                        aria-busy="false"
                    >
                        <li
                            className="a-carousel-card tw-scroll-carousel-element"
                            role="listitem"
                            aria-setsize={6}
                            aria-posinset={1}
                            aria-hidden="false"
                            style={{ marginRight: 7, width: 91 }}
                        >

                            <div
                                className="a-column a-span12 a-text-center icon-container scrollable-container celwidget a-declarative"
                            >

                                <div
                                    className="a-section a-spacing-none icon-farm-image-skeleton"
                                    style={{ backgroundColor: "inherit" }}
                                >

                                    <img
                                        src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-cod._CB638858551_.png"
                                        className="a-image-wrapper a-manually-loaded icon-box"
                                        id=""
                                        style={{ height: 35, width: 35 }}
                                        alt="الدفع نقداً <br> عند الاستلام"
                                        data-a-image-source="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-cod._CB638858551_.png"
                                    />
                                </div>
                                <div className="a-section a-spacing-none icon-content">

                                    <span className="a-size-small a-color-link a-text-normal">

                                        الدفع نقداً <br /> عند الاستلام
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li
                            className="a-carousel-card tw-scroll-carousel-element"
                            role="listitem"
                            aria-posinset={2}
                            aria-setsize={6}
                            aria-hidden="false"
                            style={{ marginRight: 7, width: 91 }}
                        >

                            <div
                                data-buying-option-index={0}
                                data-csa-c-element-type="navigational"
                                data-csa-c-posx={1}
                                data-csa-c-type="uxElement"
                                data-icon-content="icon-farm-secondary-view-holder"
                                data-name="RETURNS_POLICY"
                                data-type="pop-over"
                                id="RETURNS_POLICY"
                                className="a-column a-span12 a-text-center icon-container scrollable-container celwidget"
                                data-csa-c-id="yap7u5-djdlan-pg1btv-2i2imc"
                            >

                                <span
                                    className="a-declarative"
                                    data-action="a-popover"
                                    data-csa-c-type="widget"
                                    data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover='{"dataStrategy":"preload","name":"return-policy-secondary-view","activate":"onclick","width":"533","position":"triggerBottom"}'
                                    data-csa-c-id="wrbj2u-48vk65-lv0woe-liufiv"
                                >

                                    <div
                                        className="a-section a-spacing-none icon-farm-image-skeleton"
                                        style={{ backgroundColor: "inherit" }}
                                    >

                                        <img
                                            src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-returns._CB403797073_.png"
                                            className="a-image-wrapper a-manually-loaded icon-box"
                                            id=""
                                            style={{ height: 35, width: 35 }}
                                            alt="15 يوم للإرجاع"
                                            data-a-image-source="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-returns._CB403797073_.png"
                                        />
                                    </div>
                                    <div className="a-section a-spacing-none icon-content">

                                        <span className="a-size-small a-color-link a-text-normal">

                                            15 يوم للإرجاع
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </li>
                        <li
                            className="a-carousel-card tw-scroll-carousel-element"
                            role="listitem"
                            aria-posinset={3}
                            aria-setsize={6}
                            aria-hidden="false"
                            style={{ marginRight: 7, width: 91 }}
                        >

                            <div
                                data-buying-option-index={0}
                                data-csa-c-element-type="navigational"
                                data-csa-c-posx={2}
                                data-csa-c-type="uxElement"
                                data-icon-content="icon-container-c3aa1b44-3047-44d7-ad89-b47e5f8d87c2"
                                data-name="WARRANTY"
                                data-type="custom-pop-over"
                                id="WARRANTY"
                                className="a-column a-span12 a-text-center icon-container scrollable-container celwidget a-declarative"
                                data-csa-c-id="mfktmk-3pzwpi-obhre5-bkqiag"
                            >

                                <div
                                    className="a-section a-spacing-none icon-farm-image-skeleton"
                                    style={{ backgroundColor: "inherit" }}
                                >

                                    <img
                                        src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-warranty._CB403797073_.png"
                                        className="a-image-wrapper a-manually-loaded icon-box"
                                        id=""
                                        style={{ height: 35, width: 35 }}
                                        alt="2 سنة ضمان الصانع"
                                        data-a-image-source="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-warranty._CB403797073_.png"
                                    />
                                </div>
                                <div className="a-section a-spacing-none icon-content">

                                    <span className="a-size-small a-color-link a-text-normal">

                                        2 سنة ضمان الصانع
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li
                            className="a-carousel-card tw-scroll-carousel-element"
                            role="listitem"
                            aria-posinset={4}
                            aria-setsize={6}
                            aria-hidden="false"
                            style={{ marginRight: 7, width: 91 }}
                        >

                            <div
                                data-buying-option-index={0}
                                data-csa-c-element-type="navigational"
                                data-csa-c-posx={3}
                                data-csa-c-type="uxElement"
                                data-icon-content="icon-container-09650721-135f-4381-a0bf-aaec94645d39"
                                data-name="FREE_DELIVERY"
                                data-type="custom-pop-over"
                                id="FREE_DELIVERY"
                                className="a-column a-span12 a-text-center icon-container scrollable-container celwidget a-declarative"
                                data-csa-c-id="1ustn2-a2jw9k-tdjazt-c3fs51"
                            >

                                <div
                                    className="a-section a-spacing-none icon-farm-image-skeleton"
                                    style={{ backgroundColor: "inherit" }}
                                >

                                    <img
                                        src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB590597072_.png"
                                        className="a-image-wrapper a-manually-loaded icon-box"
                                        id=""
                                        style={{ height: 35, width: 35 }}
                                        alt="توصيل <br> مجاني"
                                        data-a-image-source="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB590597072_.png"
                                    />
                                </div>
                                <div className="a-section a-spacing-none icon-content">

                                    <span className="a-size-small a-color-link a-text-normal">

                                        توصيل <br /> مجاني
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li
                            className="a-carousel-card tw-scroll-carousel-element"
                            role="listitem"
                            aria-posinset={5}
                            aria-setsize={6}
                            aria-hidden="false"
                            style={{ marginRight: 7, width: 91 }}
                        >

                            <div
                                data-buying-option-index={0}
                                data-csa-c-element-type="navigational"
                                data-csa-c-posx={4}
                                data-csa-c-type="uxElement"
                                data-icon-content="icon-container-86b86cb6-0e52-4996-8bed-bc3ce91058c4"
                                data-name="AMAZON_DELIVERED_MENA"
                                data-type="custom-pop-over"
                                id="AMAZON_DELIVERED_MENA"
                                className="a-column a-span12 a-text-center icon-container scrollable-container celwidget a-declarative"
                                data-csa-c-id="pntk1v-2os745-jtr5jw-10lj8c"
                            >

                                <div
                                    className="a-section a-spacing-none icon-farm-image-skeleton"
                                    style={{ backgroundColor: "inherit" }}
                                >

                                    <img
                                        src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB403797073_.png"
                                        className="a-image-wrapper a-manually-loaded icon-box"
                                        id=""
                                        style={{ height: 35, width: 35 }}
                                        alt="تشحن <br> من أمازون "
                                        data-a-image-source="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB403797073_.png"
                                    />
                                </div>
                                <div className="a-section a-spacing-none icon-content">

                                    <span className="a-size-small a-color-link a-text-normal">

                                        تشحن <br /> من أمازون
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li
                            className="a-carousel-card tw-scroll-carousel-element"
                            role="listitem"
                            aria-posinset={6}
                            aria-setsize={6}
                            aria-hidden="false"
                            style={{ marginRight: 7, width: 91 }}
                        >

                            <div
                                data-buying-option-index={0}
                                data-csa-c-element-type="navigational"
                                data-csa-c-posx={5}
                                data-csa-c-type="uxElement"
                                data-icon-content="icon-container-48c23e7c-6d80-4699-9905-7da4c8b3b566"
                                data-name="SAFE_PAYMENTS"
                                data-type="custom-pop-over"
                                id="SAFE_PAYMENTS"
                                className="a-column a-span12 a-text-center icon-container scrollable-container celwidget a-declarative"
                                data-csa-c-id="7xn35e-p8ri5-af2b92-exc53u"
                            >

                                <div
                                    className="a-section a-spacing-none icon-farm-image-skeleton"
                                    style={{ backgroundColor: "inherit" }}
                                >

                                    <img
                                        src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-secure-transaction._CB414468582_.png"
                                        className="a-image-wrapper a-manually-loaded icon-box"
                                        id=""
                                        style={{ height: 35, width: 35 }}
                                        alt="معاملتك آمنة"
                                        data-a-image-source="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-secure-transaction._CB414468582_.png"
                                    />
                                </div>
                                <div className="a-section a-spacing-none icon-content">

                                    <span className="a-size-small a-color-link a-text-normal">

                                        معاملتك آمنة
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>

            </Box >

            <Divider />
            <Typography className='my-2' variant='h4'> عن هذه السلعة</Typography>
            <Box component={"p"}>
                <ul className='list-disc list-inside'>
                    <li>aaaaaaaaaaaaaaaaaaaaaaaaaa</li>
                    <li>ssssssssssssssssssssssssss</li>
                    <li>bbbbbbbbbbbbbbbbbbbbbbbbbb</li>
                    <li>ssssssssssssssssssssssssss</li>
                    <li>eeeeeeeeeeeeeeeeeeeeeeeeee</li>
                    <li>aaaaaaaaaaaaaaaaaaaaaaaaaa</li>
                    <li>ssssssssssssssssssssssssss</li>
                    <li>bbbbbbbbbbbbbbbbbbbbbbbbbb</li>
                    <li>ssssssssssssssssssssssssss</li>
                    <li>eeeeeeeeeeeeeeeeeeeeeeeeee</li>
                </ul>
            </Box>

            {/* <Typography variant='h5'
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
                </Typography>
                <Typography variant='h4' component={"h4"} sx={{ display: "flex", mt: "15px" }}>
                    e.price
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
                    اللون : e.color
                </Typography>
                <Divider />
                <Typography variant='h3' margin="15px auto 0 auto" > تفاصيل المنتج</Typography>
                e.description
            </Typography> */}
        </div >
    )
}

export default DescriptionProduct
