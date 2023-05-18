import { Link } from "react-router-dom";
import CrudApp from "./CrudApp";
import { useContext } from "react";
import NavContext from "../context/NavContext";

const Home = () => {
  // NAV-Buttons through useContext
  const { openForm, openTable, openCards, openNav } = useContext(NavContext);

  return (
    <main className="contenedor">
      <img src="../src/assets/aplitivo.png" className="logo" alt="Vite logo" />
      <h1>simplePOS</h1>

      <nav className="nav">
        <button className="nav-btn" onClick={(e) => openNav("home")}>
          <Link to="/" activeclassname="active">
            Home
          </Link>
        </button>
        <button className="nav-btn" onClick={(e) => openNav("table")}>
          <Link activeclassname="active">DB Tabla</Link>
        </button>
        <button className="nav-btn" onClick={(e) => openNav("cards")}>
          <Link activeclassname="active">DB Cards</Link>
        </button>
        <button className="nav-btn">
          <Link to="/init" activeclassname="active">
            Initial Template
          </Link>
        </button>
      </nav>
      <CrudApp
        openForm={openForm}
        openTable={openTable}
        openCards={openCards}
      />
    </main>
  );
};

export default Home;
