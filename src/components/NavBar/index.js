import React from "react";
import Logo from "../../images/FeedbackHeroLogo3.svg";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBtn,
  NavBtnLink,
  NavContainer,
  NavDiv,
  NavLink,
  NavLogo,
  NavMenu,
  MobileIcon,
} from "./NavbarElement";
import { StyledImg } from "../2SecondSection/SecondSectionStyled";


const Navbar = ({toggle}) => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="">
          <StyledImg spHeight="70%" spWidth="70%" src={Logo} alt="" />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavDiv>
          <NavMenu>
            <li>
              <NavLink to="features">Features</NavLink>
            </li>
            <li>
              <NavLink to="pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>
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
