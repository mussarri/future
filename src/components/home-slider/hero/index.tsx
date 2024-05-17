import React from "react";

const Hero = () => {
  return (
    <div className="position-relative">
      <div className="hero-content max-width position-absolute w-100">
        <div className="d-flex column-gap-4 align-items-center">
          {" "}
          <img src="/img/Group 2.png" className="" alt="" />
          <div className="hero-text">
            <h3 className="fw-semibold text-light fs-1">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="fw-medium text-light fs-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              officia natus possimus libero facilis repellat voluptates.
            </p>
          </div>{" "}
        </div>
        <button className="hero-btn px-4 border rounded mt-5 text-light">
          İletişime Geç
        </button>
      </div>
      <img className="w-100" src="/img/Mask group.png" alt="" />
    </div>
  );
};

export default Hero;
