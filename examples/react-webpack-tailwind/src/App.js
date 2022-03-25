import logo from "./logo.svg";

function App() {
  return (
    <div className="text-center h-screen bg-surface6">
      <header className="min-h-full flex flex-col items-center justify-center text-text5">
        <img src={logo} className="h-272 pointer-events-none" alt="logo" />
        <p className="typography-20 mb-40">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="inline-flex items-center"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <pixiv-icon name="24/Book" />
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
