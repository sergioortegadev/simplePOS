import { Link } from "react-router-dom";
import CrudApp from "./CrudApp";

const Home = () => {
  return (
    <>
      <img src="../src/assets/aplitivo.png" className="logo" alt="Vite logo" />
      <h1>simplePOS</h1>
      <button>
        <Link to="/init">Initial Template</Link>
      </button>
      <CrudApp />
    </>
  );
};

export default Home;
