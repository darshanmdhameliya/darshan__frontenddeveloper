import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Link, NavLink } from 'react-router-dom'
import Logo from "./Logo";

export default function Navbar1() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link to="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5h7bJMmireQDcZYmO-uNrBu9iCOyWImLCJQ&s">
              <Logo />
            </Link>

            <p className="font-bold text-inherit m-5 ">FoodyZone</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" >
          <NavbarItem>
            <NavLink to="/">
              Home
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive>
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
                className="w-full"
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
