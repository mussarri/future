/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Slider from "react-slick";
import Hero from "./hero";

const ArrowLeft = ({ onClick }: { onClick: any }) => (
  <div className="slick-left " onClick={onClick} style={{ zIndex: 1 }}>
    <div className=" ">
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="35"
          cy="35"
          r="33.5"
          transform="rotate(-180 35 35)"
          stroke="white"
          stroke-width="3"
        />{" "}
      </svg>{" "}
      <svg
        width="36"
        height="29"
        viewBox="0 0 36 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="position-absolute center"
      >
        <path
          d="M1.2381 13.6689L14.124 0.783215C14.3927 0.514561 14.7571 0.363634 15.137 0.363634C15.517 0.363634 15.8813 0.514561 16.15 0.783215C16.4187 1.05187 16.5696 1.41624 16.5696 1.79617C16.5696 2.1761 16.4187 2.54047 16.15 2.80912L5.70702 13.2501L33.75 13.2501C34.1298 13.2501 34.494 13.4009 34.7625 13.6694C35.031 13.9379 35.1818 14.3021 35.1818 14.6818C35.1818 15.0615 35.031 15.4257 34.7625 15.6942C34.494 15.9627 34.1298 16.1136 33.75 16.1136L5.70702 16.1136L16.15 26.5545C16.4187 26.8232 16.5696 27.1875 16.5696 27.5675C16.5696 27.9474 16.4187 28.3118 16.15 28.5804C15.8813 28.8491 15.517 29 15.137 29C14.7571 29 14.3927 28.8491 14.124 28.5804L1.2381 15.6948C1.10498 15.5618 0.999372 15.4039 0.92732 15.2301C0.855268 15.0563 0.818181 14.87 0.818181 14.6818C0.818181 14.4937 0.855268 14.3074 0.92732 14.1335C0.999372 13.9597 1.10498 13.8018 1.2381 13.6689Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
);

const ArrowRight = ({ onClick }: { onClick: any }) => (
  <div className="slick-right" onClick={onClick}>
    {" "}
    <div className="">
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="35"
          cy="35"
          r="33.5"
          transform="rotate(-180 35 35)"
          stroke="white"
          stroke-width="3"
        />{" "}
      </svg>{" "}
      <svg
        width="36"
        height="29"
        viewBox="0 0 36 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="center"
      >
        <path
          d="M34.762 15.3311L21.876 28.2168C21.6074 28.4854 21.243 28.6364 20.863 28.6364C20.4831 28.6364 20.1187 28.4854 19.8501 28.2168C19.5814 27.9481 19.4305 27.5838 19.4305 27.2038C19.4305 26.8239 19.5814 26.4595 19.8501 26.1909L30.293 15.7499H2.25001C1.87028 15.7499 1.5061 15.5991 1.23759 15.3306C0.969085 15.0621 0.818237 14.6979 0.818237 14.3182C0.818237 13.9385 0.969085 13.5743 1.23759 13.3058C1.5061 13.0373 1.87028 12.8864 2.25001 12.8864H30.293L19.8501 2.44549C19.5814 2.17684 19.4305 1.81247 19.4305 1.43253C19.4305 1.0526 19.5814 0.688232 19.8501 0.41958C20.1187 0.150927 20.4831 0 20.863 0C21.243 0 21.6074 0.150927 21.876 0.41958L34.762 13.3052C34.8951 13.4382 35.0007 13.5961 35.0727 13.7699C35.1448 13.9437 35.1819 14.13 35.1819 14.3182C35.1819 14.5063 35.1448 14.6926 35.0727 14.8665C35.0007 15.0403 34.8951 15.1982 34.762 15.3311Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
);
function AppendDots(dots: any) {
  return (
    <div>
      <ul> {dots} </ul>
    </div>
  );
}

const HomeSlider = () => {
  const settings = {
    dots: true,
    appendDots: AppendDots,
    prevArrow: <ArrowLeft onClick={onclick} />,
    nextArrow: <ArrowRight onClick={onclick} />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="position-relative w-100 slider">
      <Slider {...settings}>
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </Slider>
    </div>
  );
};

export default HomeSlider;
