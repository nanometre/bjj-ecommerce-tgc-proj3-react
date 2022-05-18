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
import "./assets/styles/bg-images.css"

// import page components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";

// import provider
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import ContactUs from "./pages/ContactUs";


function App() {
  return (
    <div className="App">
      <div id="page">
        <Router>
          <UserProvider>
            <CartProvider>
              {/* Navbar */}
              <Navbar id="nav" />
              {/* Routes */}
              <div id="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/users/*" element={<Users />} />
                  <Route path="/products/*" element={<Products />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/orders" element={<Orders />}/>
                  <Route path="/checkout/*" element={<Checkout />}/>
                  <Route path="/error" element={<Error />}/>
                  <Route path="*" element={<Error />}/>
                  
                </Routes>
              </div>
            </CartProvider>
          </UserProvider>
        </Router>
        {/* Footer */}
        <Footer id="footer" />
        <ToastContainer position="bottom-right"/>
      </div>
    </div>
  );
}

export default App;
