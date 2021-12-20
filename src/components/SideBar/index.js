import React from "react";
import { NavBtnLink } from "../NavBar/NavbarElement";
import {
  Close,
  Icon,
  SidebarBtnWrap,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SideBarStyled";

const SideBar = ({isSidebarOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isSidebarOpen}>
      <Icon onClick={toggle}>
        <Close onClick={toggle}/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">Features</SidebarLink>
          <SidebarLink to="discover">Pricing</SidebarLink>
          <SidebarLink to="services">Blog</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <NavBtnLink marginLeft="0" to="">Register</NavBtnLink>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
