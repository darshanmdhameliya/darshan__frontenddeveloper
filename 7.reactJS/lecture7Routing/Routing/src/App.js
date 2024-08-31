import React from 'react';
import './App.css';
import Navbar1 from "./componets/Navbar";
import Home from "./componets/Home";
import { ContactUs } from './componets/ContactUs';
import Error from "./componets/Error";
import SignUp from "./componets/SignUp";
import AboutUs from './componets/AboutUs';
import Cart from './componets/Cart';
import Order from './componets/Order';
import { BrowserRouter  , Routes , Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
