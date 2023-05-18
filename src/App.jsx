import { HashRouter, Route, Routes } from "react-router-dom";

import InitialTemplate from "./components/InitialTemplate";
import "./App.css";
import Home from "./components/Home";
import { NavProvider } from "./context/NavContext";

function App() {
  return (
    <NavProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/init" element={<InitialTemplate />} />
        </Routes>
      </HashRouter>
    </NavProvider>
  );
}

export default App;
