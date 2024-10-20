"use client"
import React, { useEffect } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import { baseUrl } from '@/baseUrl';
import { GoogleAuthLogo } from '../../../../../public/svg';

function GoogleOAuth() {

    const responseGoogle = process.env.BaseUrl
    // const login = useGoogleLogin({
    //     onSuccess: credentialResponse => {
    //         console.log(credentialResponse)
    //         axios.post(`${baseUrl}/api/authenticate/google`, credentialResponse)
    //             .then((req) => { console.log(req) })
    //             .catch((err) => { err })
    //     },
    //     onError: () => console.log('Login Failed')
    // });

    return (
        <div className='w-full  bg-slate-50 flex justify-center items-center'>

            <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_google_id_client_OAuth}>
                <GoogleLogin
                    width="400"
                    size='large'
                    text='signin_with'
                    onSuccess={(credentialResponse) => {
                        console.log(credentialResponse.credential);
                        axios.post(`${baseUrl}/api/authenticate/google`, credentialResponse)
                            .then((req) => { console.log(req) })
                            .catch((err) => { err })
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }} useOneTap
                />
            </GoogleOAuthProvider>
            {/* <div className="w-full lg:w-1/1 mb-2 lg:mb-0">
                <button type="button" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                    <GoogleAuthLogo />

                </button>
            </div> */}
        </div>
    )
}

export default GoogleOAuth
