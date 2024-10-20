"use client";
import { Link } from "@/navigation";
import { PhoneIcon, PlayCircleIcon, } from "@heroicons/react/20/solid";
import { CursorArrowRaysIcon, } from "@heroicons/react/24/outline";
import { createRef, useEffect, useState } from "react";
import "@/app/[locale]/globals.css";
import LoginIcon from "@mui/icons-material/Login";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { baseUrl } from "@/baseUrl";
import { useDispatch, useSelector } from "react-redux";
import { signNow } from "@/Redux/HeaderSlice";
import ReCAPTCHA from "react-google-recaptcha";
import LoginIntreface from "./LoginIntreface/LoginIntreface";
import { signIn } from "@/types/app";
import { RegisterIcoHeader } from "../../../../public/svg";
import { redirect } from "next/navigation";




export default function Loginui(props: signIn) {
  const recaptchaRef = createRef<String>();
  const state: any = useSelector<any>((state) => state.HeaderSlice);
  const dispatch = useDispatch();

  const [recaptchaValue, setrecaptchaValue] = useState("noValue")

  const signupSchema = z.object({
    username: z.string().max(15, { message: "username must be at least 2 characters" }),
    rememberMe: z.boolean().default(true),
    password: z.string(),
  });

  type FormData = z.infer<typeof signupSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(signupSchema),
  });
  async function onSubmit({
    username,
    password,
    rememberMe,
  }: FormData) {
    const users = { username, password, rememberMe };
    // recaptchaValue:
    // Replace this with a server action or fetch an API endpoint to authenticate
    useEffect(() => {
      axios.post(`${baseUrl}/api/authenticate`, users, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "re-captcha-token": recaptchaRef.current.getValue()
          //  RecaptchaData.RecaptchaValue,
        },
      })
        .then((e) => {
          console.log(" location.replace:", e.data)
        });
    }, [])

  }

  const solutions = [
    {
      name: props.Login,
      description: props.descriptionLogin,
      href: `/${props.locale}/register`,
      icon: LoginIcon,
    },
    {
      name: props.signup,
      description: props.descriptionsignUp,
      href: "#",
      icon: CursorArrowRaysIcon,
      btn: true,
    },
  ];
  const callsToAction = [
    {
      name: "Watch demo",
      href: `/${props.locale}/register`,
      icon: PlayCircleIcon,
    },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
  ];

  function SigninUI() {
    return (
      <>
        {state.signnow && setopen(false) || (
          <>
            <button
              onClick={() => {
                dispatch(signNow());
              }}
              className="fixed inset-0  z-40 w-full h-screen bg-gray-800/40 cursor-pointer"
            ></button>
            <div
              dir="ltr"
              className="absolute inset-0  flex dark:bg-gray-900 items-center justify-center"
            >
              <div className="relative z-50 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <button
                  onClick={() => {
                    dispatch(signNow());
                  }}
                  type="submit"
                  title="escap"
                  className="absolute right-3 top-3 "
                >
                  <X />
                  <span className="sr-only">escap main menu</span>
                </button>
                <div className="p-20 space-y-8 md:space-y-8 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>

                  <form
                    method="POST"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 md:space-y-6"
                  >
                    <div>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your username
                      </label>
                      <input
                        {...register("username")}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="username"
                        minLength={4}
                      />
                      {errors.username && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                          <span className="font-medium">
                            {errors.username.message}
                          </span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        {...register("password")}
                        type="password"
                        placeholder="•••••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      {errors.password && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                          <span className="font-medium">
                            {errors.password.message}
                          </span>
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            {...register("rememberMe")}
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 mr-2"
                          />
                          <label
                            htmlFor="rememberMe"
                            className="text-gray-500 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <ReCAPTCHA
                      sitekey="6Les2igqAAAAAPMpPY1NFm7zKIH2X27k0rFKtnc0"
                      ref={recaptchaRef}
                      onChange={(value: any) => {
                        setrecaptchaValue(value)
                        console.log(value)
                      }}
                    />
                    <button
                      onClick={() => {
                        handleSubmit(onSubmit)
                        location.reload();
                      }
                      }
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Sign in
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?{" "}
                      <Link
                        href="/register"
                        onClick={() => {
                          dispatch(signNow());
                        }}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Sign up
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  };
  const StartReCAPTCH = () => {
    return (
      <>
        <ReCAPTCHA
          sitekey="6Les2igqAAAAAPMpPY1NFm7zKIH2X27k0rFKtnc0"
          ref={recaptchaRef}
          onChange={(value: any) => {
            setrecaptchaValue(value)
            console.log(value)
          }}
        />
      </>
    )
  }


  const [open, setopen] = useState(false);


  return (
    <>
      <div className=" relative ">
        <Link href={"/register"}
          onMouseEnter={() => {
            setopen(!open);
          }}
          className="flex   items-center justify-center flex-row gap-2 max-sm:h-10 max-sm:w-10 max-sm:bg-slate-500 max-sm:rounded-full max-sm:hover:bg-slate-600 hover:scale-105 hover:border-[1px] rounded p-1 focus:border-[1px]"
        >
          <RegisterIcoHeader />
          <div className="text-2xl   max-sm:hidden sm:whitespace-nowrap  sm:text-[20px] font-bold text-white font-['Roboto'] ">
            <div>{props.signIn}</div>
          </div>
        </Link>

        <div>
          {open && (
            <>
              <div
                onMouseLeave={() => {
                  setopen(false);
                }}
                //   rtl:left-[27%] ltr:-right-[260px]
                className=" z-20  absolute sm:rtl:left-10 sm:ltr:-left-12 mt-5 max-sm:rtl:-left-2 max-sm:ltr:-left-12  flex w-screen max-w-max -translate-x-1/2  transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="absolute   -top-5 left-10 bg-transparent h-5 w-[400px] ">
                  <div className="triangle-up  absolute inset-x-1/2 border-x-8 border-b-8 border-t-0 border-solid border-zinc-900"></div>
                </div>
                <div className="w-96 bg-slate-100 max-w-md flex-auto overflow-hidden rounded-3xl  text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4  z-50">
                    {solutions.map((item, index) => (
                      <div key={item.name}>
                        {item.btn ? (
                          <div
                            onClick={() => {
                              dispatch(signNow());
                            }}
                            key={item.name}
                            className="group cursor-pointer relative flex w-full gap-x-6 rounded-lg p-4 hover:bg-sky-300 "
                          >
                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon
                                aria-hidden="true"
                                className="h-6 w-6 text-zinc-950 group-hover:text-zinc-950"
                              />
                            </div>
                            <div className="h-full flex self-center justify-self-center text-xl font-semibold text-gray-900">
                              {item.name}
                            </div>
                          </div>
                        ) : (
                          <a
                            href={item.href}
                            key={item.name}
                            className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-sky-300 "
                          >
                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon
                                aria-hidden="true"
                                className="h-6 w-6 text-zinc-950 group-hover:text-zinc-950"
                              />
                            </div>
                            <div

                              className="font-semibold flex self-center text-xl justify-self-center text-gray-900"
                            >
                              {item.name}
                            </div>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item, index) => (
                      <a
                        id={`${item.name}`}
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="h-5 w-5 flex-none text-gray-400"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {state.signnow && <LoginIntreface />}
    </>
  );
}

{
  /* <div className="relative">
<button onMouseEnter={() => { setopen(!open) }} className="flex items-center justify-center flex-row gap-2 max-sm:h-10 max-sm:w-10 max-sm:bg-slate-500 max-sm:rounded-full max-sm:hover:bg-slate-600 hover:scale-105 hover:border-[1px] rounded p-1 focus:border-[1px]">

  <svg width="28" height="28" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.2918 3C15.1194 3 16.6147 4.35 16.6147 6C16.6147 7.65 15.1194 9 13.2918 9C11.4642 9 9.96884 7.65 9.96884 6C9.96884 4.35 11.4642 3 13.2918 3ZM13.2918 18C17.7778 18 22.9283 19.935 23.2606 21H3.32295C3.70508 19.92 8.82242 18 13.2918 18ZM13.2918 0C9.61993 0 6.64589 2.685 6.64589 6C6.64589 9.315 9.61993 12 13.2918 12C16.9636 12 19.9377 9.315 19.9377 6C19.9377 2.685 16.9636 0 13.2918 0ZM13.2918 15C8.85565 15 0 17.01 0 21V24H26.5836V21C26.5836 17.01 17.7279 15 13.2918 15Z" fill="#F8F8F8" />
  </svg>
  <div className="text-2xl max-sm:hidden sm:whitespace-nowrap  sm:text-[20px] font-bold text-white font-['Roboto'] ">
    <a href="ar/logIn">
      {signIn}
    </a>
  </div>
</button>

{open ?
  <div>
    <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
      <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        <div className="p-4">
          {solutions.map((item) => (
            <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
              </div>
              <div>
                <a href={item.href} className="font-semibold text-gray-900">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          {callsToAction.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div> : null}

</div> */
}
