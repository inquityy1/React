import React from "react";

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere =
    latitude > 0 ? "Northern hemisphere" : "Southern hemisphere";

  return (
    <div>
      <p>{hemisphere}</p>
    </div>
  );
};

export default HemisphereDisplay;
