import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const result = await fetch("http://localhost:8080/api/submit", {
      method: "POST",
      body: input,
      headers: {
        "Content-Type": "text/plain",
      },
    });

    const modifiedInput = await result.text();
    setResponse(modifiedInput);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a string"
        />
        <button onClick={handleSubmit}>Submit</button>
        <h1>{response}</h1>
      </header>
    </div>
  );
}

export default App;