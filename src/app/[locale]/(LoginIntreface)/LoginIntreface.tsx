"use client"
import { signNow } from '@/Redux/HeaderSlice';
import { baseUrl } from '@/baseUrl';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { X } from 'lucide-react';
import Link from 'next/link';
import React, { createRef, useEffect, useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { z } from 'zod';

function LoginIntreface() {
  const state: any = useSelector<any>((state) => state.HeaderSlice);
  const dispatch = useDispatch()
  const recaptchaRef = createRef<String>();
  const [Recap, setRecap] = useState<String>()
  const signupSchema = z.object({
    username: z.string().max(15, { message: "username must be at least 2 characters" }),
    rememberMe: z.boolean().default(false),
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
    axios.post(`${baseUrl}/api/authenticate`, users, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "re-captcha-token": Recap
      },
    })
      .then((e) => console.log(e.data))
      .catch(err => console.log(err))
  }




  return (
    <>

      {/* <button onClick={() => { dispatch(signNow()) }}>click</button> */}
      {state.signnow &&
        (
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
                      // ref={recaptchaRef}
                      onChange={(value: any) => {
                        setRecap(value)
                        console.log(Recap);

                      }}
                    />
                    {/* <Recaptcha /> */}
                    <button
                      onClick={() => handleSubmit(onSubmit)}
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
        )
      }
    </>
  )
}

export default LoginIntreface