import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #ffffff;
  display: flex;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(32, 39, 49, 0.2);
  font-weight: 400;

  @media screen and (max-width: 960px) {
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  padding: 0 60px;
  z-index: 1;
  max-width: 1600px;
`;
export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding-left: 200px;
`;

export const NavItem = styled.li`
  height: 90px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #202731;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavBtnLink = styled(Link)`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 185px;
  height: 40px;
  white-space: nowrap;
  background: linear-gradient(93.31deg, #006ad8 1.67%, #01acb4 98.59%),
    rgba(196, 196, 196, 0.05);
  border-radius: 5px;
  backdrop-filter: blur(37px);
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
`;
