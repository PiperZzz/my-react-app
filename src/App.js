import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState({
    username: "",
    email: "",
  });

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const result = await fetch("http://localhost:8080/api/submit", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const modifiedInput = await result.json();
    setResponse(modifiedInput.message);
  };

  const handlefindUsername = async () => {
    const response = await fetch(`http://localhost:8080/api/username?email=${email}`);
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
        <button onClick={handleSubmit}>Submit</button>
        <h1>{response}</h1>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter an email"
        />
        <button onClick={handlefindUsername}>Get Username</button>
        <h1>{username}</h1>
      </header>
    </div>
  );
}

export default App;
