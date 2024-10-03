"use client";
import { CartLogo, ChildLogo, LanguageLogo, Manlogo, SearchLogo, SearchLogoSVG, ShoesLogo, WomanLogo } from '../../../../public/svg.jsx';
import React, { useEffect, useState } from "react";
import logoA from "@/../public/logoE.jpg";
import Image from "next/image";
import { AlignJustify, X, CircleUserRound, ShoppingCart } from "lucide-react";
import { Link } from "@/navigation";
import { usePathname, useRouter } from "next/navigation";
import { nav } from '../../../types/app.js';
import Loginui from './Loginui';
import Cookies from 'universal-cookie';
import Menu from './Menu/Menu';
import LogoComponent from './LogoComponent/Logo';
import SearchComponent from './SearchComponent/SearchComponent';
import LanguageComponent from './LanguageComponent/LanguageComponent';
import CartComponent from './CartComponent/CartComponent';


export default function Header(props: nav) {
  const [state_menu, setstate_menu] = useState("hidden");
  const [close_menu_shop, setclose_menu_shop] = useState("hidden");
  const cookies = new Cookies();

  const close_menu = () => {
    state_menu === "hidden" ? setstate_menu("flex ") : setstate_menu("hidden");
  };

  const close_menu_Shop = () => {
    close_menu_shop === "hidden" ? setclose_menu_shop("flex ") : setclose_menu_shop("hidden");
  };


  const pathname = usePathname();
  const router = useRouter();

  const path = pathname.split("/").slice(2).join("/");
  useEffect(() => {
    router.push(`/${props.local}/${path}`);
  }, [])

  return (
    <>
      <header className="overflow-x-clip h-24 max-sm:h-16 bg-slate-700 flex flex-row items-center justify-between dark:bg-red-500 ">


        <LogoComponent />
        <SearchComponent />

        <div
          id="log-in_And_buy"
          className=" flex flex-row items-center justify-center      ml-4 mt-2 gap-2"
        >
          <LanguageComponent local={props.local} path={path} />

          {!cookies.get('token') && <Loginui
            signIn={props.signIn}
            signup={props.signup}
            descriptionsignUp={props.descriptionsignUp}
            Login={props.Login}
            descriptionLogin={props.descriptionLogin}
            locale={props.local}
          />
          }

          <CartComponent local={props.local} ShoppingCar={props.ShoppingCar} />




          <div id="menu" className="flex  ">
            <button
              type="button"
              onClick={close_menu}
              className=" flex items-center justify-center rounded-md p-2.5  text-gray-700
            max-sm:bg-slate-500 max-sm:rounded-full max-sm:hover:bg-slate-600  hover:scale-105 hover:border-[1px]"
            >
              <span className="sr-only">Open main menu</span>
              <AlignJustify color="white" />
            </button>
          </div>
        </div>
        {/* ........................................ menu .............................................. */}
        <div
          className={
            state_menu + "  bg-gray-900/45  fixed h-full w-full  top-0 z-20 "
          }
        >
          <button
            type="submit"
            onClick={close_menu}
            className=" h-full w-5/6"
          />
          <Menu
            signIn={props.signIn}
            ShoppingCar={props.ShoppingCar}
            mens={props.mens}
            women={props.women}
            baby={props.baby}
            shoes={props.shoes} />
          <div className="fixed right-[320px]  rounded-l-full w-16 h-14 bg-slate-50  flex justify-center items-center -z-10">
            <button onClick={close_menu} type="submit" title="escap">
              <X />
              <span className="sr-only">escap main menu</span>
            </button>
          </div>
        </div>
        {/* ........................................shop menu.............................................. */}
        <div
          className={
            close_menu_shop + " fixed bg-gray-900/45   h-full w-full  top-0 z-20 "
          }
        >
          <button
            type="submit"
            onClick={close_menu_Shop}
            className=" h-full w-5/6"
          />

          <div className="fixed bg-slate-50 text-black  h-full w-80 right-0 border-2  ">
            <hr className="border-gray-300  border-1" />
            <div className=" py-4 px-5 gap-8 flex flex-col">
              <a
                href={`#`}
                className="flex flex-row gap-2 text-black items-center  w-full hover:bg-gray-100 hover:scale-110 "
              >
              </a>
            </div>
          </div>

          <div className="absolute right-[320px]  rounded-l-full w-16 h-14 bg-slate-50  flex justify-center items-center -z-10">
            <button onClick={close_menu_Shop} type="submit" title="escap">
              <X />
              <span className="sr-only">escap main menu</span>
            </button>
          </div>
        </div>
      </header >
      <div className="sm:hidden w-full flex bg-neutral-950 justify-center items-center p-3 z-50">
        <div id="search-phon" className="   grow relative  text-gray-600">
          <div className="w-full relative">
            <input
              className="w-full pl-4 border-2 border-gray-300 bg-white h-10 pr-12  rounded-lg  focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute  right-5 top-3 ">
              <SearchLogoSVG />
            </button>
          </div>
        </div>
      </div>

    </>

  );
}
