// import dependencies
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./assets/styles/app.css"

// import page components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";

// import provider
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <div id="page">
        <Router>
          <UserProvider>
            {/* Navbar */}
            <Navbar id="nav" />
            {/* Routes */}
            <div id="content" className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users/*" element={<Users />} />
                <Route path="/products/*" element={<Products />} />
              </Routes>
            </div>
          </UserProvider>
        </Router>
        {/* Footer */}
        <Footer id="footer" />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
