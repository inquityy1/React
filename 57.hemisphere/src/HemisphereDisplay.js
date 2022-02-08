import React from "react";
import pic1 from "./img/picture1.jpg";
import pic2 from "./img/picture2.jpg";

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere =
    latitude > 0 ? "Northern hemisphere" : "Southern hemisphere";
  const picture = latitude > 0 ? pic1 : pic2;

  return (
    <div>
      <img src={picture} alt="" />
      <p>{hemisphere}</p>
    </div>
  );
};

export default HemisphereDisplay;
