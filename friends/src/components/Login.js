import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWIthAuth";
const Login = props => {
  const [user, setUser] = useState({
    credentials: { userName: "", password: "" }
  });

  const handleChange = e => {
    setUser({
      credentials: {
        ...user.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/login", user.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={user.credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.credentials.password}
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
