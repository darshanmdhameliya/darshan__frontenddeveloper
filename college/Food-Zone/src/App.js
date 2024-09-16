import React from 'react';
import './App.css';
import Home from './componets/Home';
import Ouemenus from './componets/OurMenus'
import AboutUs from './componets/AboutUs';
import { ContactUs } from './componets/ContactUs';
import Cart from './componets/Cart';
import Order from './componets/Order';
import FAQ from './componets/FAQ';
import LikedItems from './componets/LikedItems.jsx';
import Login from './componets/Login';
import SignUp from './componets/SignUp';
import Navbar1 from './componets/Navbar';
import Error from './componets/Error'
import Click1 from './componets/Click1'
import Click2 from './componets/Click2'
import Click3 from './componets/Click3'
import Click4 from './componets/Click4'
import Click5 from './componets/Click5'
import Click6 from './componets/Click6'
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
          <Route path='/FAQ' element={<FAQ />} />
          <Route path="/liked-items" element={<LikedItems />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<Error />} />
          <Route path='/Click1' element={<Click1 />} />
          <Route path='/Click2' element={<Click2 />} />
          <Route path='/Click3' element={<Click3 />} />
          <Route path='/Click4' element={<Click4 />} />
          <Route path='/Click5' element={<Click5 />} />
          <Route path='/Click6' element={<Click6 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;