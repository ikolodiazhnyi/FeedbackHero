import React from "react";
import {
  Nav,
  NavBtn,
  NavBtnLink,
  NavContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from "./NavbarElement";

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="">Feedback Hero</NavLogo>
        <NavMenu>
          <NavItem>
            <NavLink to="features">Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="pricing">Pricing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="blog">Blog</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="">Register</NavBtnLink>
        </NavBtn>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
