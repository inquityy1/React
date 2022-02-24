import React, { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";

function User() {
  const params = useParams();

  const { getUser, user } = useContext(GithubContext);

  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>{user.login}</div>;
}

export default User;
