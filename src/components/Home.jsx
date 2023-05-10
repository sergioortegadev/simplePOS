import { useState } from "react";
import { NavLink } from "react-router-dom";
import CrudApp from "./CrudApp";

const Home = () => {
  // NAV buttons
  const [openForm, setOpenForm] = useState(false);
  const [openTable, setOpenTable] = useState(false);
  const [openCards, setOpenCards] = useState(false);
  const openNav = (btn) => {
    switch (btn) {
      case "form":
        {
          setOpenForm(true);
          setOpenTable(false);
          setOpenCards(false);
        }
        break;

      case "table":
        {
          setOpenTable(true);
          setOpenForm(false);
          setOpenCards(false);
        }
        break;

      case "cards":
        {
          setOpenCards(true);
          setOpenForm(false);
          setOpenTable(false);
        }
        break;

      default:
        console.log("bnt apretado");
        break;
    }
  };

  return (
    <main className="contenedor">
      <img src="../src/assets/aplitivo.png" className="logo" alt="Vite logo" />
      <h1>simplePOS</h1>

      <nav className="nav">
        <button>
          <NavLink to="/init" className="nav-btn" activeclassname="active">
            Initial Template
          </NavLink>
        </button>
        <button onClick={(e) => openNav("form")}>
          <NavLink className="nav-btn" activeclassname="active">
            Cargar Datos
          </NavLink>
        </button>
        <button onClick={(e) => openNav("table")}>
          <NavLink className="nav-btn" activeclassname="active">
            DB Tabla
          </NavLink>
        </button>
        <button onClick={(e) => openNav("cards")}>
          <NavLink className="nav-btn" activeclassname="active">
            DB Cards
          </NavLink>
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
