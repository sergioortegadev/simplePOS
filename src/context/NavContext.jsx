import { createContext, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [openForm, setOpenForm] = useState(false);
  const [openFormEdit, setOpenFormEdit] = useState(false);
  const [openTable, setOpenTable] = useState(false);
  const [openCards, setOpenCards] = useState(false);
  const openNav = (btn) => {
    switch (btn) {
      case "home":
        {
          setOpenForm(false);
          setOpenFormEdit(false);
          setOpenTable(false);
          setOpenCards(false);
        }
        break;

      case "edit":
        {
          setOpenForm(false);
          setOpenFormEdit(true);
          setOpenTable(false);
          setOpenCards(false);
        }
        break;

      case "form":
        {
          setOpenForm(true);
          setOpenFormEdit(false);
          setOpenTable(false);
          setOpenCards(false);
        }
        break;

      case "table":
        {
          setOpenForm(false);
          setOpenFormEdit(false);
          setOpenTable(true);
          setOpenCards(false);
        }
        break;

      case "cards":
        {
          setOpenForm(false);
          setOpenFormEdit(false);
          setOpenTable(false);
          setOpenCards(true);
        }
        break;

      default:
        console.log("bnt apretado");
        break;
    }
  };

  const data = { openForm, openFormEdit, openTable, openCards, openNav };
  return <NavContext.Provider value={data}>{children}</NavContext.Provider>;
};

export { NavProvider };
export default NavContext;
