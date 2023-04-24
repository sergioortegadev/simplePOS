import { HashRouter, Route, Routes } from "react-router-dom";
import InitialTemplate from "./components/InitialTemplate";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/init" element={<InitialTemplate />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
