import React, { useEffect, useState, useRef } from "react";
import {
  useParams,
} from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import ItemsService from "../../../services/items.service";
import { required } from "../../shared/required";

import "./updateItem.css";

const UpdateItem = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [item, setItem] = useState(null)
  const { id } = useParams();

  useEffect(async() => {
    try {
      const found = await ItemsService.getItem(id)
      setItem(found)
    } catch (error) {
      throw error
    }
  }, [])

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const onChangeValue = (e) => {
    const value = e.target.value
    const newItem = Object.assign({}, item, {
        [e.nativeEvent.target.name]: value === typeof("number") ? Number(value) : value
    })
    setItem(newItem)
  };

  const handleSave = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      try {
        await ItemsService.updateItem(item);
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
                value={item?.name}
                className="form-control"
                onChange={onChangeValue}
                validations={[required]}
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <Input
                name="address"
                value={item?.address}
                className="form-control"
                onChange={onChangeValue}
                validations={[required]}
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <Input
                name="price"
                value={item?.price}
                className="form-control"
                onChange={onChangeValue}
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
}

export default UpdateItem;
