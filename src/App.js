import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Home from "./components/home";

import { GlobalProvider } from "./components/globalState";
import FAQ from "./components/faq";
import MyForm from "./components/form";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home } />
          <Route path="/form" exact component={MyForm } />
          <Route path="/faq" exact component={FAQ} />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
