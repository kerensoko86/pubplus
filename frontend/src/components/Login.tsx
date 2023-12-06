import React, { useState } from "react";
import { Employee } from "../types";
import axiosInstance from "../api/axiosInstance";
import "../css/login.css";

interface LoginProps {
  onLogin: (token: string) => void;
  setUser: (user: Employee) => void;
  onLogout: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, setUser, onLogout }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post("/login", {
        username,
        password,
      });

      const { token, user } = response.data;
      localStorage.setItem("authToken", token);

      onLogin(token);
      if (user) {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error: any) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
      onLogout();
    }
  };

  return (
    <div className="login-container">
      {error ? (
        <div className="error">Error: {error}</div>
      ) : (
        <div>
          <h2>Login</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              className="login-input"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              className="login-input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
