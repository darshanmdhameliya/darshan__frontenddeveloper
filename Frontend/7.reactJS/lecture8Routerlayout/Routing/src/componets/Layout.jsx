import React from 'react'
import Navbar1 from './Navbar';
import Home from './Home';
import { ContactUs } from './ContactUs';
import Error from './Error';
import SignUp from './SignUp';
import AboutUs from './AboutUs';
import Cart from './Cart';
import Order from './Order';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';


const Layout = () => {
    return (

        <BrowserRouter>
            <Navbar1 />
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/AboutUs" element={<AboutUs />} ></Route>
                <Route path="/ContactUs" element={<ContactUs />} ></Route>
                <Route path="/SignUp" element={<SignUp />} ></Route>
                <Route path="/Cart" element={<Cart />} ></Route>
                <Route path="/Order" element={<Order />} ></Route>
                <Route path="/*" element={<Error />} ></Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Layout
