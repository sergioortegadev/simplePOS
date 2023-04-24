import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <img src="../src/assets/aplitivo.png" className="logo" alt="Vite logo" />
      <h1>simplePOS</h1>
      <button>
        <Link to="/init">Initial Template</Link>
      </button>
    </>
  );
};

export default Home;
