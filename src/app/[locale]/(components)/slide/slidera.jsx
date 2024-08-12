"use client";
import React, { useState, useEffect } from "react";
import "./slider.css";
import backButton from "./icons/back.svg";
import nextButton from "./icons/next.svg";
import Image from "next/image";

const Slidera = ({
  imageList,
  width,
  height,
  loop = true,
  autoPlay = true,
  autoPlayInterval = 3000,
  showArrowControls = true,
  showDotControls = true,
  bgColor = "none",
}) => {
  let [active, setActive] = useState(0);

  const setPreviousImage = () => {
    if (active !== 0) {
      setActive((active -= 1));
    } else {
      if (loop) {
        setActive((active = imageList.length - 1));
      }
    }
  };

  const setNextImage = () => {
    if (active !== imageList.length - 1) {
      setActive((active += 1));
    } else {
      if (loop) {
        setActive((active = 0));
      }
    }
  };

  const leftClickHandle = () => {
    setPreviousImage();
  };

  const rightClickHandle = () => {
    setNextImage();
  };

  const dotClickHandler = (e) => {
    const dotNum = e.target.getAttribute("data-key");
    setActive((active = parseInt(dotNum)));
  };

  useEffect(() => {
    if (autoPlay) {
      let autoSlider = setInterval(setNextImage, autoPlayInterval);
      return () => clearInterval(autoSlider);
    }
  }, [active]);

  return (
    <>
      <div className={""} style={{ backgroundColor: bgColor }}>
        <div style={{ position: "relative",height: height }}>
        {((showArrowControls && !loop && active !== 0) ||
          (showArrowControls && loop)) && (
          <div
            className="leftClick"
            style={{
              height: height,
            }}
            onClick={rightClickHandle}>
            <div className="twice">
              <Image className="button c1" src={backButton} alt="back" />
              <Image className="button" src={backButton} alt="back" />
            </div>
          </div>
        )}
          <img
            src={imageList[active].url}
            style={{
              width: width,
              height: height,
              objectFit: "cover",
            }}
            alt="image"
          />
          {((showArrowControls && !loop && active !== imageList.length - 1) ||
            (showArrowControls && loop)) && (
            <div
              className="rightClick "
              style={{
                height: height,
              }}
              onClick={leftClickHandle}>
              <Image className="button c2" src={nextButton} alt="next" />
              <Image className="button" src={nextButton} alt="next" />
            </div>
          )}
          {showDotControls && (
            <div className="dots">
              {imageList.map((el, index) => {
                if (index !== active) {
                  return (
                    <div
                      key={index}
                      className="dot"
                      data-key={index}
                      onClick={dotClickHandler}
                    />
                  );
                } else {
                  return <div key={index} className="activeDot"></div>;
                }
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Slidera;
