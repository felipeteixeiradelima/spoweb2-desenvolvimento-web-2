import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalogo from "./components/Catalogo";
import Ciencia from "./components/Ciencia";
import Historia from "./components/Historia";
import Home from "./components/Home";
import Literatura from "./components/Literatura";
import NotFound from "./components/NotFound";
import Topo from "./components/Topo";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Topo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/ciencia" element={<Ciencia />} />
          <Route path="/literatura" element={<Literatura />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
