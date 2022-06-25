import React from "react";
import { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

function Login({ setIsAuth }) {
  const [username, setUsername] = useState(null);
  const [password, setPasssword] = useState(null);
  const cookies = new Cookies();

  const login = () => {
    Axios.post("http://localhost:3001/login", { username, password }).then(
      (res) => {
        const { firstName, lastName, username, userId, token } = res.data;

        //COOKIE SET OPERATIONS

        cookies.set("token", token);
        cookies.set("userId", userId);
        cookies.set("username", username);
        cookies.set("firstName", firstName);
        cookies.set("lastname", lastName);
        setIsAuth(true);
      }
    );
  };
  return (
    <div id="box">
      <label>Log In</label>

      <input
        id="text"
        placeholder="Username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />

      <input
        id="text"
        placeholder="Password"
        onChange={(event) => {
          setPasssword(event.target.value);
        }}
      />

      <button id="button" onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;
