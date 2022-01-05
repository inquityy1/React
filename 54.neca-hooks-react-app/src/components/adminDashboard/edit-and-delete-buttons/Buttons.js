import React from "react";
import { Link } from "react-router-dom";

const Buttons = (id) => {
  return (
    <td>
      <Link to={`/dashboard/new/${id}`} className="ui button yellow">
        Edit
      </Link>
      <Link to={`/dashboard/delete/${id}`} className="ui button negative">
        Delete
      </Link>
    </td>
  );
};

export default Buttons;
