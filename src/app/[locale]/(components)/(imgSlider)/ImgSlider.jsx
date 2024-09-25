"use client"
import MagnifierImg from '@/app/[locale]/(components)/magnifier'
import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
// function currentDiv(n) {
//     showDivs(slideIndex = n);
// }

function ImgSlider() {
    const [slideIndex, setslideIndex] = useState(1)
    const [srcImgs, setsrcImgs] = useState(1)
    const Imgs = [
        "https://m.media-amazon.com/images/I/61qBM32GQTL._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/61-auOpRZFL._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/611T0AjZGoL._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/61T7o1Mo+NL._AC_SX679_.jpg",

        "https://m.media-amazon.com/images/I/61j11zYzopL._AC_SL1500_.jpg",
        "https://www.w3schools.com/w3css/img_nature_wide.jpg",
        "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/y/27/96e16fa8-e958-4bf7-a0f6-05827e1ce65c.jpg",
        "https://www.w3schools.com/w3css/img_mountains_wide.jpg",
        // "https://images8.alphacoders.com/133/1336966.jpeg",
        // "https://m.media-amazon.com/images/I/31RdZdFwGcL._AC_SY350_.jpg",
        // "https://m.media-amazon.com/images/I/61ezJVsffiL._AC_AC_SY350_QL65_.jpg",
        // "https://cdn.walletmonitor.com/img/8c1c7b2a2ed6272bfc173058574fff5a.jpg",
        // "https://m.media-amazon.com/images/I/51bwWARnHhL._AC_UY580_.jpg",
        // "https://www.w3schools.com/w3css/img_mountains_wide.jpg",
        // "https://images8.alphacoders.com/133/1336966.jpeg",
        // "https://m.media-amazon.com/images/I/31RdZdFwGcL._AC_SY350_.jpg",
        // "https://m.media-amazon.com/images/I/61ezJVsffiL._AC_AC_SY350_QL65_.jpg",
    ]

    // useEffect(() => {
    //     var n = slideIndex
    //     var i;
    //     var dots = document.getElementsByClassName("demo");
    //     if (n > dots.length) { setslideIndex(1) }
    //     if (n < 1) { setslideIndex(dots.length) }
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = ("demo opacity-80 object-fill h-full");
    //     }
    //     dots[slideIndex - 1].className += ("demo opacity-100 object-fill h-full");

    //     setsrcImgs(dots[slideIndex - 1].getAttribute("src"))
    // }, [slideIndex])
    useEffect(() => {
        var dots = document.getElementById(slideIndex);
        setsrcImgs(dots.getAttribute("src"))
        dots.classList.remove("opacity-80")
        var i;
        const reImg = document.getElementsByClassName("AllImg")
        for (i = 0; i < reImg.length; i++) {
            reImg[i].className = (" AllImg opacity-80 border-2 rounded-lg border-zinc-300 opacity-80 object-contain h-12 w-full cursor-pointer");
        }
        reImg[slideIndex].className = (" AllImg  opacity-100  border-2 rounded-lg border-zinc-400 object-contain h-12 w-full cursor-pointer")

    }, [slideIndex])


    return (
        <div>
            <div className={" flex gap-2 w-full pr-2 justify-center"}>
                <div className='grid grid-cols-1 max-h-24  w-12  pt-12'>
                    {Imgs.map((img, index) => (
                        <img key={index} id={index} className=" AllImg opacity-80 border-2 rounded-lg border-zinc-300  object-contain h-12 w-full cursor-pointer" src={img} onClick={() => setslideIndex(index)} />
                    ))}
                </div>

                <MagnifierImg sampleImg={srcImgs} />

            </div>

        </div>
    )
}

export default ImgSlider
// < div className = "w3-content" style = {{ maxWidth: "1200px" }}>
//     <Box
//         sx={{
//             display: "grid",
//             gap: "4px",
//             gridTemplateColumns: {
//                 xs: "1fr 1fr 1fr",
//                 sm: "1fr 1fr 1fr ",
//                 md: "1fr 1fr 1fr 1fr ",
//                 lg: "1fr 1fr 1fr 1fr 1fr ",
//                 xl: "1fr 1fr 1fr 1fr 1fr  ",
//             },
//             alignItems: "center",
//             justifyContent: "center",

//         }}
//     >
//         {Imgs.map((img, index) => (
//             <img id={index} className=" AllImg border-2 rounded-lg border-zinc-200 opacity-80 object-fill h-20 w-full cursor-pointer" src={img} onClick={() => setslideIndex(index)} />
//         ))}
//         {/* <img className="demo opacity-80 object-fill h-full" src={"https://www.w3schools.com/w3css/img_nature_wide.jpg"} style={{ width: "100%", cursor: "pointer" }} onClick={() => setslideIndex(1)} />
//                 <img className="demo opacity-80 object-fill h-full" src={"https://img4.dhresource.com/webp/m/0x0/f3/albu/km/y/27/96e16fa8-e958-4bf7-a0f6-05827e1ce65c.jpg"} style={{ width: "100%", cursor: "pointer" }} onClick={() => setslideIndex(2)} />
//                 <img className="demo opacity-80 object-fill h-full" src={"https://www.w3schools.com/w3css/img_mountains_wide.jpg"} style={{ width: "100%", cursor: "pointer" }} onClick={() => setslideIndex(3)} />
//                 <img className="demo opacity-80 object-fill h-full" src={"https://images8.alphacoders.com/133/1336966.jpeg"} style={{ width: "100%", cursor: "pointer" }} onClick={() => setslideIndex(4)} />

//                 <img className="demo opacity-80 object-fill h-full w-full cursor-pointer" src={"https://m.media-amazon.com/images/I/31RdZdFwGcL._AC_SY350_.jpg"} onClick={() => setslideIndex(5)} />
//                 <img className="demo opacity-80 object-fill h-full w-full cursor-pointer" src={"https://m.media-amazon.com/images/I/61ezJVsffiL._AC_AC_SY350_QL65_.jpg"} onClick={() => setslideIndex(6)} />
//                 <img className="demo opacity-80 object-fill h-full w-full cursor-pointer" src={"https://cdn.walletmonitor.com/img/8c1c7b2a2ed6272bfc173058574fff5a.jpg"} onClick={() => setslideIndex(7)} />
//                 <img className="demo opacity-80 object-fill h-full w-full cursor-pointer" src={"https://m.media-amazon.com/images/I/51bwWARnHhL._AC_UY580_.jpg"} onClick={() => setslideIndex(8)} /> */}

//     </Box>

//         <div/ >