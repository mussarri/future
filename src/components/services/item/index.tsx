/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { LeftArrow } from "../../../icons";

const Item = () => {
  const [hover, setHover] = useState(false);
  useEffect(() => setHover(false), []);

  return (
    <div
      className="item col position-relative overflow-hidden"
      style={{ padding: 0 }}
      onMouseEnter={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {" "}
      <div className="d-flex">
        <div className="item-text">
          <p className="text-light">Lorem ipsum, dolor sit amet consectetur</p>
        </div>
        <img src="/img/Rectangle 15.png" alt="" />
      </div>
      <div className="overlay position-absolute top-0 left-0"></div>
      <div className="service-content position-absolute  d-flex flex-column justify-content-between">
        <h4 className="title text-light">Havayolu Taşımacılığı</h4>
        <i className="icon2 text-light">
          <LeftArrow />
        </i>
      </div>
    </div>
  );
};

export default Item;
