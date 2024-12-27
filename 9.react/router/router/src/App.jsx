import "./App.css";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import ContectUs from "./pages/ContectUs";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Faq from "./pages/Faq";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HelpLayout from "./pages/HelpLayout";
import CareerLayout from "./pages/CareerLayout";
import Career, { CareerLoader } from "./pages/Career";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<ContectUs />} />
      </Route>
      <Route path="career" element={<CareerLayout/>}>
        <Route index element={<Career/>} loader={CareerLoader}/>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
