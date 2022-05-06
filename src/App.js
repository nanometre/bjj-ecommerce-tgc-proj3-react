// import dependencies
import React from "react";
import {
  BrowserRouter as Router, // Used for routing
  Routes, // represents a group of route
  Route, // represents one pairing of URL to component
  Link // represents a <a href> that you can click
} from "react-router-dom";

// import page components
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SubmittedForm from "./pages/SubmittedForm";

function App() {
  return (
    <div className="App">
      <Router>
      {/* Start of static elements */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      {/* End of static elements */}

      {/* Start of routing */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/submitted-form" element={<SubmittedForm/>}/>
      </Routes>
      {/* End of routing */}

      </Router>
    </div>
  );
}

export default App;
