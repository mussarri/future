import React from "react";
import Item from "./item";

const Services = () => {
  return (
    <div className="max-width mt-5">
      <h3 className="services-title mb-0 ">Hizmetlerimiz</h3>
      <img src="/img/Group 473.png" alt="" />
      <p className="fw-medium">
        Kaliteli, Güvenilir, Tam Zamanında, Çözüm Odaklı Hizmetler
      </p>
      <div className="container">
        <div className="services row row-cols-4 gap-4 ">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};

export default Services;
