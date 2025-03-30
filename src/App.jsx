import { createBrowserRouter, Link, RouterProvider } from "react-router";

const HomePage = () => {
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
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

const SimplePage = ({ pageName }) => {
  return (
    <div>
      <h1>Simple Testing Site</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <h1>/{pageName}</h1>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <SimplePage pageName={"about"} />,
  },
  {
    path: "/contact",
    element: <SimplePage pageName={"contact"} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
