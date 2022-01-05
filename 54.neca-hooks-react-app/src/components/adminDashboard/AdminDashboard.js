import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemsService from "../../services/items.service";
import DeleteModal from "./delete/DeleteModal";

import "./adminDashboard.css";

const AdminDashboard = () => {
  const [items, setItems] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const [idForDelete, setIdForDelete] = useState(undefined);

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

  const handleRemove = async () => {
      try {
        await ItemsService.deleteItem(idForDelete)
        window.location.reload();
      } catch (error) {
        throw error
      }
  };

  const onOpenModal = (id) => {
    setIdForDelete(id)
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <div className="new-item">
        <Link to="/add" className="ui button">
          Add new Item
        </Link>
      </div>
      <DeleteModal
        showModal={showModal}
        hideModal={setShowModal}
        message={"Are you sure u want to delete this item ?"}
        confirmModal={handleRemove}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Price</th>
            <th>ACTIONS</th>
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
                  <td>
                    <Link
                      to={`/update/${item.id}`}
                      className="ui button yellow"
                    >
                      Update
                    </Link>
                    <button onClick={() => onOpenModal(item.id)} className="ui button negative">
                      Delete
                    </button>
                  </td>
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

export default AdminDashboard;
