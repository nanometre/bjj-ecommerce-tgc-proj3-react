// import dependencies
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  BrowserRouter as Router, // Used for routing
  Routes, // represents a group of route
  Route, // represents one pairing of URL to component
  Link // represents a <a href> that you can click
} from "react-router-dom";
import "./assets/styles/app.css"

// import page components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <div id="page">
        <Router>
          {/* Start of static Navbar */}
          <Navbar id="nav" />
          {/* End of static Navbar */}

          {/* Start of routing */}
          <div id="content" className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<LoginRegister />} />
              <Route path="/products/*" element={<Products />} />
            </Routes>
          </div>
          {/* End of routing */}
        </Router>

        {/* Start of static Footer */}
        <Footer id="footer"/>
        {/* End of static Footer */}
      </div>
    </div>
  );
}

export default App;
