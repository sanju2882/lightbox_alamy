import { useState } from "react";

import "./App.css";
import Header from "./components/layouts/header";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import BrowserRouterWrap from "./components/pages/routes/browserRouterWrap";

function App() {
  return (
    <>
      <BrowserRouterWrap>
          <Route path="/" element={<Header />} />
          <Route path="/home" element={<HomePage />} />
      </BrowserRouterWrap> 
    </>
  );
}

export default App;
