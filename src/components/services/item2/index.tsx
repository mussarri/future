/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Leaf, LeftArrow, LeftDown, WhiteLeaf } from "../../../icons";

const Item2 = () => {
  const [hover, setHover] = useState(false);
  useEffect(() => setHover(false), []);

  return (
    <div
      className="item2 col position-relative overflow-hidden"
      style={{ padding: 0 }}
    >
      {" "}
      <img className="w-100" src="/img/Rectangle 2996.png" alt="" />
      <div className="overlay-green position-absolute top-0 left-0"></div>
      <div
        className="service-content position-absolute right-0  d-flex flex-column justify-content-between align-items-end"
        style={{ top: 10, right: 10, height: "100%", paddingBottom: 30 }}
      >
        <h4
          className="text-light d-flex align-items-center"
          style={{ width: "max-content" }}
        >
          Yeşil Lojistik{" "}
          <i className="m-2 etxt-light">
            <WhiteLeaf />
          </i>
        </h4>
        <i className="icon text-light text-right">
          <LeftDown />
        </i>
      </div>
    </div>
  );
};

export default Item2;
