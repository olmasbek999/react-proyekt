import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Katolog from "./pages/Katolog";

import Dokonlar from "./pages/Dokonlar";
import Sale from "./pages/SotibOlish/Sale";
import TovuqGosht from "./pages/SotibOlish/TovuqGosht";
import Makroishlash from "./pages/Makroishlash";
import Aloqa from "./pages/Aloqa";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Katolog />} />
        <Route path="/dokonlar" element={<Dokonlar />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/tovuqgosht" element={<TovuqGosht />} />
        <Route path="/makroishlash" element={<Makroishlash />} />
        <Route path="/aloqa" element={<Aloqa />} />
      </Routes>
    </>
  );
}

export default App;
