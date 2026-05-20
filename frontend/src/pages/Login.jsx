import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "../styles/login.css";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (
      username === "admin" &&
      password === "1234"
    ) {

      alert("Login Successful");

      navigate("/dashboard");

    } else {

      alert("Invalid Username or Password");
    }
  };

  return (

    <div className="login-container">

      <div className="login-box">

        <h1>
          Faculty Management System
        </h1>

        <h2>
          Admin Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;