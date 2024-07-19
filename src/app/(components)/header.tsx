"use client"
import React, { useState } from 'react'
import logo from "../../../public/logoE.png";
import logoA from "../../../public/logoWhite.png";
import Image from 'next/image';
import { AlignJustify, X, CircleUserRound, ShoppingCart } from 'lucide-react';
import womanIcon from "../../../public/icon-drower/womanIcon.svg";


export default function Header() {
  const [state_menu, setstate_menu] = useState("hidden");
  const close_menu = () => {
    state_menu === "hidden" ? setstate_menu("flex ") : setstate_menu("hidden")
  }


  return (
    <header className="h-24   bg-neutral-950 flex items-center justify-between">

      <nav id='logo'>
        <a href="/">
          <Image className='w-48 object-fit flex   ' src={logo} alt='logo' />
        </a>
      </nav>

      <div id='search' className="flex  justify-center items-center pt-2  grow  relative mx-auto text-gray-600">
        <div className='w-5/6 relative'>
          <input className="w-full pl-4 border-2 border-gray-300 bg-white h-10 pr-12  rounded-lg  focus:outline-none"
            type="search" name="search" placeholder="Search" />
          <button type="submit" className="absolute  right-5 top-3 ">
            <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
              viewBox="0 0 56.966 56.966" xmlSpace="preserve"
              width="512px" height="512px">
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>

      <div id='menu' className="flex lg:hidden ml-8">
        <button
          type="button"
          onClick={close_menu}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <AlignJustify color='white' />

        </button>
      </div>

      <nav id='log-in_And_buy' className='hidden lg:flex flex-row gap-8 ml-10'>

        <button type='submit' className='flex flex-row gap-2 '>
          <svg width="28" height="28" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2918 3C15.1194 3 16.6147 4.35 16.6147 6C16.6147 7.65 15.1194 9 13.2918 9C11.4642 9 9.96884 7.65 9.96884 6C9.96884 4.35 11.4642 3 13.2918 3ZM13.2918 18C17.7778 18 22.9283 19.935 23.2606 21H3.32295C3.70508 19.92 8.82242 18 13.2918 18ZM13.2918 0C9.61993 0 6.64589 2.685 6.64589 6C6.64589 9.315 9.61993 12 13.2918 12C16.9636 12 19.9377 9.315 19.9377 6C19.9377 2.685 16.9636 0 13.2918 0ZM13.2918 15C8.85565 15 0 17.01 0 21V24H26.5836V21C26.5836 17.01 17.7279 15 13.2918 15Z" fill="#F8F8F8" />
          </svg>
          <div className="text-2xl font-bold text-white font-['Roboto'] ">تسجيل الدخول</div>
        </button>

        <button className='flex flex-row gap-2 ' >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_5_3" fill="white">
              <path d="M11.9403 9.14286H14.3284V5.71429H17.9104V3.42857H14.3284V0H11.9403V3.42857H8.35821V5.71429H11.9403M7.16418 19.4286C5.85075 19.4286 4.77612 20.4571 4.77612 21.7143C4.77612 22.9714 5.85075 24 7.16418 24C8.47761 24 9.55224 22.9714 9.55224 21.7143C9.55224 20.4571 8.47761 19.4286 7.16418 19.4286ZM19.1045 19.4286C17.791 19.4286 16.7164 20.4571 16.7164 21.7143C16.7164 22.9714 17.791 24 19.1045 24C20.4179 24 21.4925 22.9714 21.4925 21.7143C21.4925 20.4571 20.4179 19.4286 19.1045 19.4286ZM7.40298 15.7714V15.6571L8.47761 13.7143H17.3134C18.1493 13.7143 18.9851 13.2571 19.3433 12.5714L24 4.57143L21.9701 3.42857L17.3134 11.4286H8.95522L3.9403 1.14286H0V3.42857H2.38806L6.68657 12.1143L5.01493 14.8571C4.89552 15.2 4.77612 15.5429 4.77612 16C4.77612 17.2571 5.85075 18.2857 7.16418 18.2857H21.4925V16H7.64179C7.52239 16 7.40298 15.8857 7.40298 15.7714Z" />
            </mask>
            <path d="M11.9403 9.14286H14.3284V5.71429H17.9104V3.42857H14.3284V0H11.9403V3.42857H8.35821V5.71429H11.9403M7.16418 19.4286C5.85075 19.4286 4.77612 20.4571 4.77612 21.7143C4.77612 22.9714 5.85075 24 7.16418 24C8.47761 24 9.55224 22.9714 9.55224 21.7143C9.55224 20.4571 8.47761 19.4286 7.16418 19.4286ZM19.1045 19.4286C17.791 19.4286 16.7164 20.4571 16.7164 21.7143C16.7164 22.9714 17.791 24 19.1045 24C20.4179 24 21.4925 22.9714 21.4925 21.7143C21.4925 20.4571 20.4179 19.4286 19.1045 19.4286ZM7.40298 15.7714V15.6571L8.47761 13.7143H17.3134C18.1493 13.7143 18.9851 13.2571 19.3433 12.5714L24 4.57143L21.9701 3.42857L17.3134 11.4286H8.95522L3.9403 1.14286H0V3.42857H2.38806L6.68657 12.1143L5.01493 14.8571C4.89552 15.2 4.77612 15.5429 4.77612 16C4.77612 17.2571 5.85075 18.2857 7.16418 18.2857H21.4925V16H7.64179C7.52239 16 7.40298 15.8857 7.40298 15.7714Z" fill="white" />
            <path d="M14.3284 9.14286V10.1429H15.3284V9.14286H14.3284ZM14.3284 5.71429V4.71429H13.3284V5.71429H14.3284ZM17.9104 5.71429V6.71429H18.9104V5.71429H17.9104ZM17.9104 3.42857H18.9104V2.42857H17.9104V3.42857ZM14.3284 3.42857H13.3284V4.42857H14.3284V3.42857ZM14.3284 0H15.3284V-1H14.3284V0ZM11.9403 0V-1H10.9403V0H11.9403ZM11.9403 3.42857V4.42857H12.9403V3.42857H11.9403ZM8.35821 3.42857V2.42857H7.35821V3.42857H8.35821ZM8.35821 5.71429H7.35821V6.71429H8.35821V5.71429ZM7.40298 15.6571L6.52792 15.1731L6.40298 15.399V15.6571H7.40298ZM8.47761 13.7143V12.7143H7.88795L7.60255 13.2303L8.47761 13.7143ZM19.3433 12.5714L18.479 12.0684L18.4675 12.0881L18.4569 12.1084L19.3433 12.5714ZM24 4.57143L24.8642 5.0745L25.3746 4.19775L24.4906 3.70005L24 4.57143ZM21.9701 3.42857L22.4608 2.55719L21.6018 2.07358L21.1059 2.9255L21.9701 3.42857ZM17.3134 11.4286V12.4286H17.8884L18.1777 11.9316L17.3134 11.4286ZM8.95522 11.4286L8.05637 11.8668L8.33026 12.4286H8.95522V11.4286ZM3.9403 1.14286L4.83915 0.70461L4.56526 0.142857H3.9403V1.14286ZM0 1.14286V0.142857H-1V1.14286H0ZM0 3.42857H-1V4.42857H0V3.42857ZM2.38806 3.42857L3.28431 2.98502L3.00893 2.42857H2.38806V3.42857ZM6.68657 12.1143L7.54048 12.6347L7.82712 12.1644L7.58282 11.6707L6.68657 12.1143ZM5.01493 14.8571L4.16101 14.3367L4.10558 14.4277L4.07056 14.5283L5.01493 14.8571ZM21.4925 18.2857V19.2857H22.4925V18.2857H21.4925ZM21.4925 16H22.4925V15H21.4925V16ZM11.9403 10.1429H14.3284V8.14286H11.9403V10.1429ZM15.3284 9.14286V5.71429H13.3284V9.14286H15.3284ZM14.3284 6.71429H17.9104V4.71429H14.3284V6.71429ZM18.9104 5.71429V3.42857H16.9104V5.71429H18.9104ZM17.9104 2.42857H14.3284V4.42857H17.9104V2.42857ZM15.3284 3.42857V0H13.3284V3.42857H15.3284ZM14.3284 -1H11.9403V1H14.3284V-1ZM10.9403 0V3.42857H12.9403V0H10.9403ZM11.9403 2.42857H8.35821V4.42857H11.9403V2.42857ZM7.35821 3.42857V5.71429H9.35821V3.42857H7.35821ZM8.35821 6.71429H11.9403V4.71429H8.35821V6.71429ZM7.16418 18.4286C5.34019 18.4286 3.77612 19.864 3.77612 21.7143H5.77612C5.77612 21.0503 6.3613 20.4286 7.16418 20.4286V18.4286ZM3.77612 21.7143C3.77612 23.5645 5.34019 25 7.16418 25V23C6.3613 23 5.77612 22.3783 5.77612 21.7143H3.77612ZM7.16418 25C8.98816 25 10.5522 23.5645 10.5522 21.7143H8.55224C8.55224 22.3783 7.96706 23 7.16418 23V25ZM10.5522 21.7143C10.5522 19.864 8.98816 18.4286 7.16418 18.4286V20.4286C7.96706 20.4286 8.55224 21.0503 8.55224 21.7143H10.5522ZM19.1045 18.4286C17.2805 18.4286 15.7164 19.864 15.7164 21.7143H17.7164C17.7164 21.0503 18.3016 20.4286 19.1045 20.4286V18.4286ZM15.7164 21.7143C15.7164 23.5645 17.2805 25 19.1045 25V23C18.3016 23 17.7164 22.3783 17.7164 21.7143H15.7164ZM19.1045 25C20.9285 25 22.4925 23.5645 22.4925 21.7143H20.4925C20.4925 22.3783 19.9074 23 19.1045 23V25ZM22.4925 21.7143C22.4925 19.864 20.9285 18.4286 19.1045 18.4286V20.4286C19.9074 20.4286 20.4925 21.0503 20.4925 21.7143H22.4925ZM8.40298 15.7714V15.6571H6.40298V15.7714H8.40298ZM8.27805 16.1412L9.35267 14.1983L7.60255 13.2303L6.52792 15.1731L8.27805 16.1412ZM8.47761 14.7143H17.3134V12.7143H8.47761V14.7143ZM17.3134 14.7143C18.4647 14.7143 19.6741 14.0978 20.2296 13.0344L18.4569 12.1084C18.296 12.4165 17.8338 12.7143 17.3134 12.7143V14.7143ZM20.2075 13.0745L24.8642 5.0745L23.1358 4.06836L18.479 12.0684L20.2075 13.0745ZM24.4906 3.70005L22.4608 2.55719L21.4795 4.29995L23.5094 5.44281L24.4906 3.70005ZM21.1059 2.9255L16.4492 10.9255L18.1777 11.9316L22.8344 3.93164L21.1059 2.9255ZM17.3134 10.4286H8.95522V12.4286H17.3134V10.4286ZM9.85408 10.9903L4.83915 0.70461L3.04144 1.5811L8.05637 11.8668L9.85408 10.9903ZM3.9403 0.142857H0V2.14286H3.9403V0.142857ZM-1 1.14286V3.42857H1V1.14286H-1ZM0 4.42857H2.38806V2.42857H0V4.42857ZM1.49181 3.87212L5.79032 12.5578L7.58282 11.6707L3.28431 2.98502L1.49181 3.87212ZM5.83266 11.5939L4.16101 14.3367L5.86884 15.3776L7.54048 12.6347L5.83266 11.5939ZM4.07056 14.5283C3.95126 14.8708 3.77612 15.3567 3.77612 16H5.77612C5.77612 15.7291 5.83978 15.5292 5.95929 15.186L4.07056 14.5283ZM3.77612 16C3.77612 17.8503 5.34019 19.2857 7.16418 19.2857V17.2857C6.3613 17.2857 5.77612 16.664 5.77612 16H3.77612ZM7.16418 19.2857H21.4925V17.2857H7.16418V19.2857ZM22.4925 18.2857V16H20.4925V18.2857H22.4925ZM21.4925 15H7.64179V17H21.4925V15ZM7.64179 15C7.89215 15 8.06939 15.1107 8.16907 15.2062C8.26596 15.2989 8.40298 15.4875 8.40298 15.7714H6.40298C6.40298 16.1696 6.59971 16.4725 6.78616 16.651C6.97539 16.8321 7.27203 17 7.64179 17V15Z" fill="white" mask="url(#path-1-inside-1_5_3)" />
          </svg>
          <div className="text-2xl font-bold text-white font-['Roboto'] ">سلة التسوق</div>
        </button>



      </nav>


      <div className={state_menu + ' bg-gray-900/45 lg:hidden absolute h-full w-full  top-0 z-20 '}>

        <button title='' type='submit' onClick={close_menu} className='h-full w-3/4' />

        <div className='bg-slate-50 text-black absolute h-full w-56 right-0 border-2 '>

          <Image className='h-36 ' src={logoA} alt="logo" />
          <hr className='border-gray-300  border-1' />

          <div className=' py-4 px-4 gap-8 flex flex-col '>

            <a href="/" type='submit' className='flex gap-4 flex-row  hover:bg-gray-100 hover:scale-110  '>
              <CircleUserRound color='black' size={28} />
              <div className="text-2xl font-bold text-black font-['Roboto'] ">تسجيل الدخول</div>
            </a>

            <a href="/" className='flex flex-row gap-4 hover:bg-gray-100 hover:scale-110' >
              <ShoppingCart color='black' size={30} />
              <div className="text-2xl font-bold text-black font-['Roboto'] ">سلة التسوق</div>
            </a>

          </div>

          <hr className='border-gray-300  border-1' />

          <div className=' py-4 px-4 gap-8 flex flex-col'>


            <a href="/" className='flex flex-row gap-2 text-black items-center  w-full hover:bg-gray-100 hover:scale-110 '>
              <svg fill="#000000" height="38px" width="38px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M390.312,105.711c-0.273-0.358-6.878-8.866-15.394-17.587c-0.008-0.009-0.008-0.017-0.008-0.017 c-8.806-9.02-16.29-14.737-22.895-17.664l-3.021,9.054c-0.896,2.202-17.067,39.97-50.756,39.97c-4.719,0-8.533-3.823-8.533-8.533 s3.814-8.533,8.533-8.533c22.451,0,34.671-28.604,34.79-28.894l10.283-30.874c-2.313-4.983-5.359-10.052-9.574-14.899 C317.744,9.327,291.445,0,255.571,0c-35.883,0-62.182,9.327-78.174,27.733c-6.357,7.322-10.231,15.155-12.57,22.4l12.817,22.434 c0.171,0.307,0.324,0.623,0.461,0.939c0.12,0.273,12.51,28.894,34.799,28.894c4.71,0,8.533,3.823,8.533,8.533 s-3.823,8.533-8.533,8.533c-31.94,0-48.137-33.929-50.313-38.835l-5.282-9.242c-6.281,3.413-12.902,9.225-20.215,16.717 c0,0-0.009,0.009-0.009,0.017h-0.009c-8.508,8.73-15.112,17.229-15.386,17.587c-0.034,0.043-0.043,0.094-0.077,0.136 c-0.145,0.188-0.307,0.393-0.367,0.478c-51.328,80.043-54.349,281.506-53.342,362.897c0,0.572,0.009,1.143,0.017,1.707 c0,0.154,0,0.307,0.009,0.461c0.23,19.917,0.734,32.29,0.742,32.435C68.87,508.39,72.624,512,77.198,512h0.034h34.099h0.034 c3.448,0,6.562-2.082,7.885-5.265l22.11-53.393c1.092,0.998,2.133,2.057,3.277,2.995v38.596c0,9.412,7.654,17.067,17.067,17.067 h187.733c9.412,0,17.067-7.654,17.067-17.067v-37.956c1.425-1.152,2.773-2.398,4.139-3.635l22.11,53.393 c1.323,3.183,4.429,5.265,7.885,5.265h34.133c1.143,0,2.236-0.222,3.234-0.64c0.614-0.247,1.118-0.691,1.655-1.075 c0.324-0.239,0.725-0.384,1.016-0.666c0.64-0.614,1.118-1.374,1.544-2.176c0.085-0.154,0.23-0.256,0.299-0.418 c0.247-0.538,0.299-1.169,0.427-1.758c0.111-0.486,0.324-0.93,0.35-1.442c0-0.051,0.06-1.69,0.154-4.437 c0.017-0.555,0.034-1.101,0.051-1.749c0.017-0.418,0.026-0.828,0.043-1.28C444.959,449.203,449.542,198.007,390.312,105.711z M105.631,494.933H85.51c-0.154-5.837-0.35-14.592-0.461-25.6h31.181L105.631,494.933z M125.249,304.23 c0,3.746,0,7.467,0.009,11.324c0.06,37.325,0.691,79.36,2.253,126.618l-4.181,10.095H84.947 c-0.154-85.658,5.094-256.538,46.686-330.189c-2.773,31.846-6.374,90.522-6.391,180.25 C125.241,302.942,125.249,303.608,125.249,304.23z M208.799,70.391c-4.139-5.163-4.932-12.083-2.065-18.048 c2.867-5.965,8.764-9.677,15.386-9.677h66.893c6.622,0,12.518,3.712,15.386,9.677c2.867,5.965,2.074,12.885-2.065,18.057 l-20.471,25.591V96c-3.26,4.07-8.124,6.4-13.329,6.4H242.6c-5.205,0-10.069-2.33-13.329-6.4L208.799,70.391z M289.704,128v68.267 c0,4.71-3.823,8.533-8.533,8.533c-4.719,0-8.533-3.823-8.533-8.533V128c0-4.71,3.814-8.533,8.533-8.533 C285.881,119.467,289.704,123.29,289.704,128z M221.437,128c0-4.71,3.814-8.533,8.533-8.533c4.71,0,8.533,3.823,8.533,8.533 v68.267c0,4.71-3.823,8.533-8.533,8.533c-4.719,0-8.533-3.823-8.533-8.533V128z M349.437,494.933H161.704v-27.426 c0.017,0.009,0.034,0.017,0.06,0.026c2.304,1.178,4.702,2.167,7.1,3.157c1.101,0.452,2.167,0.998,3.277,1.408 c1.271,0.469,2.594,0.785,3.883,1.195c5.666,1.818,11.46,3.226,17.399,3.925c3.618,0.427,7.27,0.648,10.948,0.648h103.262 c10.982,0,21.734-1.92,31.898-5.641c3.379-1.229,6.69-2.645,9.907-4.25V494.933z M349.437,435.2c0,4.71-3.823,8.533-8.533,8.533 h-85.333h-85.333c-4.719,0-8.533-3.823-8.533-8.533v-34.133c0-4.71,3.814-8.533,8.533-8.533c18.5,0,34.133-23.45,34.133-51.2 c0-4.71,3.814-8.533,8.533-8.533h42.667h42.667c4.71,0,8.533,3.823,8.533,8.533c0,27.75,15.625,51.2,34.133,51.2 c4.71,0,8.533,3.823,8.533,8.533V435.2z M426.493,494.933h-20.156l-10.598-25.6h31.206 C426.835,480.35,426.647,489.097,426.493,494.933z M427.048,452.267h-38.374l-4.181-10.095 c1.749-53.222,2.364-100.028,2.261-140.672c-0.043-89.079-3.618-147.482-6.383-179.268 C421.885,196.685,427.176,366.857,427.048,452.267z"></path> <path d="M178.766,408.653v18.014h68.267v-76.8h-26.001C218.233,379.742,200.876,403.686,178.766,408.653z"></path> <path d="M290.101,349.864H264.1v76.8h68.267V408.65C310.256,403.684,292.9,379.748,290.101,349.864z"></path> <polygon points="268.533,85.333 289.013,59.733 222.12,59.733 242.6,85.333 "></polygon> </g> </g> </g> </g></svg>
              <h6 className="text-2xl font-bold text-black font-['Roboto'] ">ملابس رجال</h6>
            </a>
            <a href="/" className='flex flex-row gap-2 text-black items-center  w-full hover:bg-gray-100 hover:scale-110 '>
              <svg width="38px" height="38px" viewBox="0 0 50 62" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M44.887 52.955c-1.899 0-4.536 2.559-6.443 2.559c-2.31 0-4.46-2.559-6.443-2.559s-4.135 2.559-6.442 2.559c-1.906 0-4.543-2.559-6.443-2.559c-1.841 0-5.085 1.507-6.115 2.01c.002.417.038.851.062 1.277c1.521-.758 3.795-1.754 5.251-1.754c2.017 0 4.817 2.774 6.843 2.774c2.454 0 4.739-2.774 6.845-2.774s4.391 2.774 6.845 2.774c2.026 0 4.828-2.774 6.844-2.774c1.46 0 3.747 1.004 5.268 1.763L51 54.965c-1.028-.502-4.273-2.01-6.113-2.01" fill="#000000"></path><path d="M38.311 59.869c-2.263 0-4.368-2.559-6.31-2.559c-1.941 0-4.047 2.559-6.311 2.559c-1.865 0-4.449-2.559-6.309-2.559c-1.787 0-4.92 1.631-5.96 2.2c.134.763.29 1.533.497 2.326c0 0 3.962-2.395 6.028-2.395c1.776 0 4.244 2.558 6.026 2.558c2.161 0 4.174-2.558 6.028-2.558S35.868 62 38.029 62c1.781 0 4.251-2.558 6.025-2.558c2.064 0 6.028 2.395 6.028 2.395a28.12 28.12 0 0 0 .497-2.326c-1.038-.567-4.174-2.2-5.959-2.2c-1.861 0-4.444 2.558-6.309 2.558" fill="#000000"></path><path d="M18.771 51.783c1.949 0 4.656 2.559 6.614 2.559c2.371 0 4.58-2.559 6.615-2.559s4.245 2.559 6.615 2.559c1.96 0 4.665-2.559 6.617-2.559c1.631 0 4.345 1.092 5.734 1.732c-.615-11.442-8.839-18.949-11.486-24.406h.521v-6h-.609c1.265-3.444 3.636-8.011 2.501-12.723c0 0-.248.001-.666.024V2h-1.216v8.517c-2.137.241-5.636.938-8.011 2.964c-2.375-2.027-5.876-2.723-8.013-2.964V2h-1.213v8.411c-.417-.023-.666-.024-.666-.024c-1.137 4.712 1.235 9.278 2.501 12.723h-.611v6h.522c-2.646 5.457-10.864 12.965-11.481 24.405c1.39-.642 4.099-1.732 5.732-1.732m20.231-27.549v3.75H37.65v.002c2.644 4.923 3.567 13.285 3.567 13.285l-4.896 1.758s-.004-6.952-1.668-14.18c.328-.328.537-.89.637-1.538l2.03 4.475c-.174-1.7-1.22-3.6-1.987-4.832c.084-.941-.039-1.985-.35-2.72h4.019m-8.707-.632c.697-.697 3.137-.697 3.835 0c.707.706 1.158 4.134 0 5.291c-.694.693-3.142.693-3.835 0c-1.277-1.277-.649-4.642 0-5.291m-3.27 4.382h-2.027v-3.75h4.443c-.292.688-.421 1.65-.365 2.545c-.929 1.312-1.596 2.724-1.878 3.304l1.939-2.758c.07.454.193.867.375 1.186c-.932 3.082-1.756 8.409-1.756 8.409l-3.788-.875s.924-4.538 3.057-8.061" fill="#000000"></path></svg>
              <h6 className="text-2xl font-bold text-black font-['Roboto'] ">ملابس سيدات</h6>
            </a>

            <a href="/" className='flex flex-row gap-2 text-black items-center  w-full hover:bg-gray-100 hover:scale-110 '>
              <svg xmlns="http://www.w3.org/2000/svg" width="38px" height="38px" viewBox="0 0 400 600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <rect x="213.334" y="192.002" width="85.333" height="42.667"></rect> <path d="M255.997,85.333c34.624,0,63.275-28.224,63.851-62.912V0h-0.021H192.167h-0.021v22.784 C192.722,57.109,221.394,85.333,255.997,85.333z"></path> <path d="M479.446,53.719l-29.44-17.664c-26.965-16.192-56.725-26.709-87.488-31.979v18.709 c-0.981,58.176-48.768,105.216-106.517,105.216S150.465,80.962,149.484,23.149V4.077c-30.763,5.269-60.523,15.787-87.488,31.979 l-29.44,17.664C12.481,65.773,0.001,87.81,0.001,111.234c0,24.469,12.715,46.293,34.027,58.347 c21.312,12.096,46.549,11.755,67.541-0.832l5.099-3.051v280.021c0,32.341,22.955,60.459,53.397,65.408 c18.795,3.072,37.739-2.197,52.053-14.357c14.336-12.203,22.549-29.973,22.549-48.768v-83.051c0-11.456,7.723-21.696,17.6-23.317 c6.464-1.003,12.693,0.64,17.536,4.779c4.8,4.053,7.531,9.984,7.531,16.256v83.051c0,32.341,22.955,60.459,53.397,65.408 c3.499,0.576,7.019,0.875,10.517,0.875c15.168,0,29.867-5.333,41.515-15.232c14.357-12.181,22.571-29.973,22.571-48.768V165.698 l5.099,3.051c20.992,12.587,46.251,12.928,67.541,0.832c21.312-12.053,34.027-33.877,34.027-58.347 C512.001,87.81,499.521,65.773,479.446,53.719z M341.334,256.002c0,11.776-9.557,21.333-21.333,21.333h-128 c-11.776,0-21.333-9.557-21.333-21.333v-85.333c0-11.776,9.557-21.333,21.333-21.333h128c11.776,0,21.333,9.557,21.333,21.333 V256.002z"></path> </g> </g> </g> </g></svg>
              <h6 className="text-2xl font-bold text-black font-['Roboto'] ">ملابس اطفال</h6>
            </a>
            <a href="/" className='flex flex-row gap-2 text-black items-center  w-full hover:bg-gray-100 hover:scale-110 '>
              <svg height="38px" width="38px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 450 550" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path className="st0" d="M264.144,416.889L14.642,205.12L0,222.38l249.532,211.798l0.034,0.03 c28.365,23.868,64.366,37.003,101.443,37.01h159.922v-22.638H351.01C319.292,448.581,288.402,437.322,264.144,416.889z"></path> <path className="st0" d="M203.394,336.186l56.013,47.136c-2.07-10.412-6.623-21.543-15.617-31.812 c-6.968-7.966-21.928-24.401-39.924-44.533C203.397,316.698,203.21,326.524,203.394,336.186z"></path> <path className="st0" d="M141.098,205.698c-9.717-8.664-18.354-16.682-25.496-23.824c6.923,10.704,13.333,20.425,22.882,32.494 C139.323,211.511,140.198,208.624,141.098,205.698z"></path> <path className="st0" d="M194.91,251.657c-14.556-12.107-28.463-23.816-41.054-34.745c-0.893,4.133-1.785,8.371-2.64,12.729 c9.852,11.312,22.541,24.874,39.826,42.291C192.187,265.361,193.466,258.587,194.91,251.657z"></path> <path className="st0" d="M330.506,424.022c-0.372-18.197-4.4-63.248-33.957-88.205c-27.911-23.568-59.254-49.094-88.812-73.532 c-0.912,7.576-1.751,15.587-2.46,23.838c1.938,1.92,3.889,3.841,5.929,5.836c40.044,39.253,71.222,70.09,74.808,113.228 C299.34,414.654,314.525,421.052,330.506,424.022z"></path> <path className="st0" d="M143.198,285.524l41.136,34.617c0.946-9.032,2.205-19.405,3.886-30.746 c-12.943-14.635-26.625-30.327-39.594-45.689C146.277,257.298,144.327,271.497,143.198,285.524z"></path> <path className="st0" d="M134.872,227.196c-20.23-24.656-37.018-46.956-43.656-60.473l5.58-6.683c-0.011-0.008-0.022-0.023-0.022-0.023 l6.676-8.266c0,0,17.463,16.742,42.478,39.05c4.013-11.837,8.547-23.936,13.682-35.975l9.5,3.586c0,0-5.555,17.357-11.623,42.605 c12.654,11.087,26.628,23.028,40.951,34.7c2.686-11.394,5.788-23.043,9.392-34.707l9.35,2.483c0,0-3.616,16.922-7.156,41.533 c15.355,12.174,30.777,23.681,45.052,33.132c61.016,40.431,102.772,82.721,107.136,147.785c20.744,0,66.91,0,109.11,0 c56.584,0,48.096-56.58,11.315-65.064c-24.809-5.731-56.685-18.895-56.685-18.895c-12.576-4.193-22.867-13.39-28.44-25.421 c0,0-1.373-2.902-3.679-7.824l-46.202,13.975c-5.049,1.522-10.378-1.335-11.904-6.376c-1.527-5.048,1.327-10.382,6.375-11.904 l43.526-13.165c-3.744-7.966-8.087-17.237-12.662-27.018l-43.172,13.058c-5.04,1.523-10.378-1.327-11.904-6.375 c-1.526-5.049,1.331-10.374,6.376-11.904l40.531-12.257c-4.313-9.256-8.607-18.475-12.575-27.041l-40.262,12.174 c-5.044,1.53-10.377-1.327-11.904-6.376c-1.522-5.04,1.328-10.373,6.372-11.896l37.715-11.409 c-5.404-11.77-9.335-20.485-10.374-23.186c-4.546-11.806-14.511-44.533-37.254-26.328 c-37.389,29.922-105.596,21.138-123.204-11.574c-13.202-24.52-5.66-50.924,0-71.672c4.519-16.585-18.869-42.441-35.844-19.81 c-12.002,16-113.171,135.806-113.171,135.806l100.457,84.537C127.228,257.77,130.544,243.151,134.872,227.196z"></path> </g> </g></svg>
              <h6 className="text-2xl font-bold text-black font-['Roboto'] ">احذية</h6>
            </a>
          </div>
        </div>

        <div className='absolute right-52  rounded-l-full w-16 h-14 bg-slate-50  flex justify-center items-center '>
          <button onClick={close_menu} type='submit' title='escap'>
            <X />
          </button>
        </div>

      </div>

    </header>
  )
}

