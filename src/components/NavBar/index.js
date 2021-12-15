import React from "react";
import Logo from "../../images/NavBar/FeedbackHeroLogo3.svg";
import {
  Nav,
  NavBtn,
  NavBtnLink,
  NavContainer,
  NavDiv,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from "./NavbarElement";

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="">
          <img src={Logo} alt="" />
        </NavLogo>
        <NavDiv>
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
        </NavDiv>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
