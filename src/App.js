import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Home from "./components/home"

import {GlobalProvider} from "./components/globalState"


function App() {
  return (
    <GlobalProvider>
      <Header />
      <Home />
    </GlobalProvider>
  );
}

export default App;
