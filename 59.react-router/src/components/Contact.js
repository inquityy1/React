import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Contact = (props) => {
  return (
    <div>
      <Modal />
      <div
        style={{ marginTop: "80px" }}
        className="ui raised very padded text container segment"
      >
        <Link to="/alex" className="ui header">
          alex
        </Link>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </p>
      </div>
      <div
        style={{ marginTop: "80px" }}
        className="ui raised very padded text container segment"
      >
        <Link to="/willma" className="ui header">
          willma
        </Link>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </p>
      </div>
    </div>
  );
};

export default Contact;
