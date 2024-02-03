const App = () => {
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
            <input />
            <div className="submit-symbol">➤</div>
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
