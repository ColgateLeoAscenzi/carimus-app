import './App.css';

import React, {useState, useEffect} from 'react';

import NavbarComp from "./components/NavbarComp/NavbarComp";
// import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";

function App() {

  const fetchItems = async () => {
    const data = await fetch("http://localhost:5000/test");
    const items = await data.json();
    console.log(items);
  }
  useEffect(() => {
    fetchItems();
  }, []);
  

  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <NavbarComp></NavbarComp>
          <Switch>
            <Route path="/about" component={AboutPage}/>
            <Route path="/work" component={WorkPage}/>
            <Route path="/services" component={ServicesPage}/>
            <Route path="/careers" component={CareersPage}/>
            <Route path="/news" component={NewsPage}/>
            <Route path="/contact" component={ContactPage}/>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
