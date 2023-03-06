function App() {
  const name = import.meta.env.VITE_NAME || "Simple Testing Site";
  const link =
    import.meta.env.VITE_LINK ||
    "https://github.com/iamalipe/simple-testing-site";
  return (
    <div className="App">
      <div>
        <h1>{"<Hello World/>"}</h1>
        <h1>{name}</h1>
        <h2>
          <a href={link}>Github</a>
        </h2>
      </div>
    </div>
  );
}

export default App;
