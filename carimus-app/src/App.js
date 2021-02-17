import "./App.css";

import React, { useState, useEffect } from "react";

import NavbarComp from "./components/NavbarComp";
// import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";
import HomePage from "./pages/HomePage";
import NCSUProj from "./components/projects/NSCUProj";
import QuantaProj from "./components/projects/QuantProj";
import SEPIProj from "./components/projects/SEPIProj";
import SwingProj from "./components/projects/SwingProj";

import BlankComponent from "./components/BlankComponent";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const fetchItems = async () => {
  //   const data = await fetch("http://leoascenzi.com:5000/test");
  //   const items = await data.json();
  //   console.log(items);
  // };
  // useEffect(() => {
  //   fetchItems();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavbarComp></NavbarComp>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/work" component={WorkPage} />
            <Route
              path="/projects/ncsu-clean-energy"
              component={NCSUProj}
              exact
            />
            <Route
              path="/projects/quanta-services"
              component={QuantaProj}
              exact
            />
            <Route path="/projects/sepi-inc" component={SEPIProj} exact />
            <Route path="/projects/swing-racquet" component={SwingProj} exact />
            <Route path="/services" component={ServicesPage} />
            <Route path="/careers" component={CareersPage} />
            <Route path="/news" component={NewsPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
