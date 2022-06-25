import React from "react";
import { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

function SignUp({ setIsAuth }) {
  const [user, setUser] = useState(null);
  const cookies = new Cookies();

  const signUp = () => {
    Axios.post("http://localhost:3001/signup", user).then((res) => {
      const { token, userId, firstName, lastName, username, hashedPassword } =
        res.data;

      //COOKIE SET OPERATIONS

      cookies.set("token", token);
      cookies.set("userId", userId);
      cookies.set("username", username);
      cookies.set("firstName", firstName);
      cookies.set("lastname", lastName);
      cookies.set("hashedPassword", hashedPassword);

      setIsAuth(true);
    });
  };

  return (
    <div id="box">
      <label>Sign Up</label>
      <input
        id="text"
        placeholder="First Name"
        onChange={(event) => {
          setUser({ ...user, firstName: event.target.value });
        }}
      />
      <input
        id="text"
        placeholder="Last Name"
        onChange={(event) => {
          setUser({ ...user, lastName: event.target.value });
        }}
      />
      <input
        id="text"
        placeholder="Username"
        onChange={(event) => {
          setUser({ ...user, username: event.target.value });
        }}
      />
      <input
        id="text"
        placeholder="Password"
        onChange={(event) => {
          setUser({ ...user, password: event.target.value });
        }}
      />

      <button id="button" onClick={signUp}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
