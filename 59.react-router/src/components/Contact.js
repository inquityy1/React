import React from "react";
import { Link } from "react-router-dom";
// import Modal from "./Modal";
import { connect } from "react-redux";

const Contact = ({ cards }) => {
  return (
    <div>
      {/* <Modal /> */}
      {cards.map((card) => {
        return (
          <div
            key={card.id}
            style={{ marginTop: "80px" }}
            className="ui raised very padded text container segment"
          >
            <Link to={`/${card.title}`} className="ui header">
              {card.title}
            </Link>
            <p>{card.body}</p>
          </div>
        );
      })}
      {/* <div
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
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps)(Contact);
