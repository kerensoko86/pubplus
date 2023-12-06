import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Login from "./components/Login";

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>();
  const onLogin = (newToken: string) => {
    setToken(newToken);
  };

  const onLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      setToken(storedToken);
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);
  return (
    <div className="App">
      {token ? (
        <Main token={token} user={user} onLogout={onLogout} />
      ) : (
        <Login onLogin={onLogin} setUser={setUser} onLogout={onLogout} />
      )}
    </div>
  );
};

export default App;
