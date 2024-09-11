"use client";
import { RecaptchaAction } from "@/Redux/storeSlice";
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";

function Recaptcha() {
  const [DataOfRecaptchan, setDataOfRecaptchan] = useState(String());

  const dispatch = useDispatch();
  const state = useSelector((state) => state.storeSlice);

  function onChange(value: any) {
    setDataOfRecaptchan(value);
    dispatch(RecaptchaAction(value));
  }

  useEffect(() => {
    console.log("state Captcha value:", state.RecaptchaValue);
  }, [DataOfRecaptchan])



  return (
    <>
      <ReCAPTCHA
        sitekey="6Les2igqAAAAAPMpPY1NFm7zKIH2X27k0rFKtnc0"
        onChange={onChange}
      />

    </>
  );
}

export default Recaptcha;


// {/* <button
//         onClick={() => {
//           console.log("Redux value: ", state);
//         }}
//       >
//         Redux test
//       </button>
//       <br />
//       <br />
//       <button
//         onClick={() => {
//           dispatch(RecaptchaAction(DataOfRecaptchan));
//           console.log("Redux value: ", state.RecaptchaValue);

//           // actionOfState("RecaptchaAction", DataOfRecaptchan);
//         }}
//       >
//         Redux enter
//       </button>
//       <div>ee :{state.RecaptchaValue}</div> */}