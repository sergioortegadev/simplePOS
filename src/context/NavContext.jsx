import { createContext, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [openForm, setOpenForm] = useState(false);
  const [openTable, setOpenTable] = useState(false);
  const [openCards, setOpenCards] = useState(false);
  const openNav = (btn) => {
    switch (btn) {
      case "home":
        {
          setOpenForm(false);
          setOpenTable(false);
          setOpenCards(false);
        }
        break;

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

  const data = { openForm, openTable, openCards, openNav };
  return <NavContext.Provider value={data}>{children}</NavContext.Provider>;
};

export { NavProvider };
export default NavContext;
