import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { Context } from "../../Context/Context";
import axios from "axios";

export default function Login() {
  const userRef = useRef(null);
  const passwordRef = useRef(null);
  const { user, dispatch, isFetching } = useContext(Context);

  const [error, setError] = useState(false);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const unameEntered = userRef.current.value;
    const passEntered = passwordRef.current.value;
    if (unameEntered && passEntered) {
      setError(false);
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("/auth/login", {
          username: unameEntered,
          password: passEntered,
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        console.log("logIn success uhuu", res.data);
      } catch (error) {
        dispatch({ type: "LOGIN_FAILURE" });
        console.log("username or password incorrect");
      }
    } else {
      console.log("fill form correctly");
      setError(true);
    }
  };
  // console.log("user", user);
  // console.log("isFetching", isFetching);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={HandleSubmit}>
        <label>UserName</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <Link to="/register">
        <button className="loginRegisterButton">Register</button>
      </Link>
      {error && (
        <span style={{ color: "#f50057", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
}
