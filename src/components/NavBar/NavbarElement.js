import styled from "styled-components";
import { Link } from "react-router-dom";
import { variables } from "../../assets/styles/GlobalStyledComponents";

export const Nav = styled.nav`
  background: #ffffff;
  display: flex;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(32, 39, 49, 0.2);
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  padding: 0 60px 0 200px;
  z-index: 1;
  max-width: 1600px;

  @media screen and (max-width: ${variables.breakpointDesktop}) {
    padding: 0 20px 0 20px;
    background: #fff;
  }
`;
export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
`;

export const NavDiv = styled.div`
  display: flex;
  padding-top: 10px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding-left: calc(100% - 840px);
  @media screen and (max-width: ${variables.breakpointPhone}) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: ${variables.breakpointPhone}) {
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-100%, -25%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }
  @media screen and (max-width: ${variables.breakpointPhoneSmall}) {
    font-size: 1.4rem;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #202731;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: ${variables.breakpointDesktop}) {
    padding: 0 1rem;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${variables.breakpointPhone}) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  color: #ffffff;
  display: flex;
  justify-content: center;
  height: 40px;
  align-items: center;
  white-space: nowrap;
  background: linear-gradient(93.31deg, #006ad8 1.67%, #01acb4 98.59%),
    rgba(196, 196, 196, 0.05);
  border-radius: 5px;
  backdrop-filter: blur(37px);
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  margin-left: 80px;
  padding: 14px 40px;
  min-width: 185px;

  @media screen and (max-width: ${variables.breakpointDesktop}) {
    margin-left: ${({ marginLeft }) => marginLeft || "40px"};
  }
`;
