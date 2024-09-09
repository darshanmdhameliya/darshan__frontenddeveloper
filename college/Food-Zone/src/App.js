import React from 'react';
import './App.css';
import Home from './componets/Home';
import Ouemenus from './componets/OurMenus'
import AboutUs from './componets/AboutUs';
import { ContactUs } from './componets/ContactUs';
import Cart from './componets/Cart';
import Order from './componets/Order';
import SignUp from './componets/SignUp';
import Navbar1 from './componets/Navbar';
import Error from './componets/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/OurMenus' element={<Ouemenus />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;