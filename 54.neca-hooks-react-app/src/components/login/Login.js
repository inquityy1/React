import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/auth.service";
import { required } from "../shared/required";

import "./login.css";

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      try {
        const user = await AuthService.login(username, password);
        if (user.role === "admin") {
          props.history.push("/admin_dashboard");
          window.location.reload();
        } else {
          props.history.push("/user_dashboard");
          window.location.reload();
        }
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
        <Form onSubmit={handleLogin} ref={form} className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              name="username"
              value={username}
              className="form-control"
              onChange={onChangeUsername}
              validations={[required]}
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              name="password"
              className="form-control"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
              type="password"
            />
          </div>

          <div className="form-group top">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
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

export default Login;
