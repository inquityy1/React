import React from "react";
import "./Modal.css";

const About = () => {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <h3>I am a modal</h3>
        </div>
      </div>
      <div
        style={{ marginTop: "80px" }}
        className="ui raised very padded text container segment"
      >
        <h3 className="ui header">About</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </p>
      </div>
    </div>
  );
};

export default About;
