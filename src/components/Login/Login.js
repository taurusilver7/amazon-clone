import React, { useState } from "react";
import "./Login.css";

import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();

    // firebase login logic involved
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    // firebase register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created a user & password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazoon_logo.svg.png"
          alt="login-logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login__singIn" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          By contnuing, you agree to the AMAZON CLONE Conditions of Use & Sale,
          privacy note.
        </p>
        <button onClick={register} className="login__signUp">
          Create an Account
        </button>
      </div>
    </div>
  );
};

export default Login;
