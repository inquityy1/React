import React from "react";

const HemisphereDisplay = (props) => {
  console.log(props.latitude);

  return (
    <div>
      <p>Hey you are in Northern hemisphere!</p>
    </div>
  );
};

export default HemisphereDisplay;
