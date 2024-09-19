import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import { PageObj } from "./PageObj.jsx";
import { useNavigate } from 'react-router-dom';
// icon 
import { IoMdHeart } from "react-icons/io";


export function Navbar1({ likedItemsCount }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "OurMenus",
    "AboutUs",
    "ContactUs",
    "FAQ",
    "Login",
    "SignUp"
  ];

  const navigate = useNavigate();
  const goToLikedItems = () => {
    navigate('/liked-items');
  };

  return (

    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} className=" bg-orange-300 md:p-0">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />

          <NavbarBrand>
            <Link>
              <div className=" -mt-4">
                <Logo />
              </div>
            </Link>
            <p className="font-bold text-inherit m-5 ">FoodyZone</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" >
          <NavbarItem>
            <NavLink to="/" >
              Home
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/OurMenus" >
              Our Menus
            </NavLink>
          </NavbarItem>
          <NavbarItem >
            <NavLink to="/AboutUs" >
              AboutUs
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/ContactUs">
              ContactUs
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/Cart">
              Cart
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/Order">
              Order
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/FAQ">
              FAQ
            </NavLink>
          </NavbarItem>

          <NavbarItem>
            <NavLink to="/liked-items">
              <IoMdHeart className=' size-10 rounded-bl-2xl  p-2' onClick={goToLikedItems} />
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/Login">
              Login
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/SignUp">
              SignUp
            </NavLink>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-fit "
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

    </>
  );
}


export default Navbar1