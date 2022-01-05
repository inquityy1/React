import React, { useState, useEffect } from "react";
import ItemsService from "../../services/items.service";

import "./userDashboard.css";

const UserDashboard = () => {
  const [items, setItems] = useState(undefined);

  useEffect(async () => {
    try {
      const response = await ItemsService.getItems();
      if (response) {
        setItems(response.data);
      }
    } catch (error) {
      throw error;
    }
  }, []);

  return (
    <div>
      <div className="new-item"></div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items ? (
            items.map((item, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.price}$</td>
                </tr>
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td>
                <div>No items yet!</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;
