import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loginInput, setLoginInput] = useState({
    username: "",
    password: ""
  });

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [response, setResponse] = useState("");
  const [loginResponse, setLoginResponse] = useState("");

  const handleRegister = async () => {
    if (input.username.trim() === "" || input.email.trim() === "") {
      setResponse("Please enter both username and email.");
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(input.email)) {
      setResponse("Please enter a valid email address.");
      return;
    }

    try {
      const result = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const modifiedInput = await result.json();
      setResponse(modifiedInput.message);
    } catch (error) {
      console.error(error);
      setResponse("An error occurred.");
    }
  };

  const handleLogin = async () => {
    if (loginInput.username.trim() === "" || loginInput.password.trim() === "") {
      setLoginResponse("Please enter both username and password.");
      return;
    }

    try {
      const result = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        body: JSON.stringify(loginInput),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result.ok) {
        const data = await result.json();
        localStorage.setItem('token', data.token);
        setLoginResponse("Your token is: " + data.token);
      } else {
        setLoginResponse("Failed to log in. Please check your username and password.");
      }
    } catch (error) {
      console.error(error);
      setLoginResponse("An error occurred.");
    }
  };


  const handlefindUsername = async () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setUsername("Please enter a valid email address.");
      return;
    }

    const token = localStorage.getItem('token');

    const response = await fetch(`http://localhost:8080/api/username?email=${email}`, {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    });

    if (response.ok) {
      const data = await response.text();
      setUsername(data);
    } else {
      setUsername("User not found");
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={input.username}
          onChange={(e) => setInput({ ...input, username: e.target.value })}
          placeholder="Enter a username"
        />
        <input
          type="email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          placeholder="Enter an email"
        />
        <input
          type="password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          placeholder="Enter a password"
        />
        <button onClick={handleRegister}>Register</button>
        <h1>{response}</h1>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter an email"
        />
        <button onClick={handlefindUsername}>Get Username</button>
        <h1>{username}</h1>
        <input
          type="text"
          value={loginInput.username}
          onChange={(e) => setLoginInput({ ...loginInput, username: e.target.value })}
          placeholder="Enter a username"
        />
        <input
          type="password"
          value={loginInput.password}
          onChange={(e) => setLoginInput({ ...loginInput, password: e.target.value })}
          placeholder="Enter a password"
        />
        <button onClick={handleLogin}>Login</button>
        <h1>{loginResponse}</h1>
      </header>
    </div>
  );
}

export default App;