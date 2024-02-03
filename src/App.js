import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);

  const getMessages = async () => {
    console.log("here");
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(message);

  return (
    <div className="app">
      {/* this is for the sidebar */}
      <section className="side-bar">
        <button className="new-chat-button">+ New Chat</button>
        <ul className="history">
          <li>There is a movie about me</li>
          <li>Let's jump in the pool!</li>
        </ul>
        <nav className="main-nav">
          <p>Made by LesDeane</p>
        </nav>
      </section>

      {/* this is for the main body */}
      <section className="main">
        <h1 className="app-name">LesGPT v1.0</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <div className="submit-symbol" onClick={getMessages}>
              ➤
            </div>
          </div>
          <p className="info">
            LesGPT v1.0 AI chatbot can make mistakes. Consider checking
            important information using other sources.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
