import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import ItemsService from "../../../services/items.service";
import { required } from "../../shared/required";

import "./addItem.css";

const AddItem = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };

  const onChangePrice = (e) => {
    const price = Number(e.target.value);
    setPrice(price);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      try {
        console.log("Validation passed");
        const item = {
          id: Math.floor(Math.random() * 100 + 1),
          name: name,
          address,
          price,
        };
        await ItemsService.addItem(item);
        window.location.href = "/admin_dashboard";
      } catch (error) {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    } else {
      setLoading(false);
    }
  };
  return (
    <div className="col-md-12">
      <div className="card card-container">
        <Form onSubmit={handleSave} ref={form} className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Input
              name="name"
              value={name}
              className="form-control"
              onChange={onChangeName}
              validations={[required]}
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <Input
              name="address"
              value={address}
              className="form-control"
              onChange={onChangeAddress}
              validations={[required]}
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <Input
              name="price"
              className="form-control"
              value={price}
              onChange={onChangePrice}
              validations={[required]}
              type="number"
            />
          </div>

          <div className="form-group top">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Save</span>
            </button>
          </div>

          {/* Using && to shorten the ternary or if checks */}
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}

          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default AddItem;
