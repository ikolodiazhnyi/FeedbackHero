import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const Close = styled(FaTimes)`
  color: #027fcd;
  transition: 0.2s color ease-in-out;
  &:hover {
    color: #027fcd;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 2.3rem;
  right: 1.7rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #0d0d0d;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template: repeat(4, 80px) / 1fr;
  text-align: center;

  @media screen and (max-width: ) {
    grid-template-rows: repeat(4, 60px);
  }
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #027fcd;
  cursor: pointer;

  &:hover {
    color: #03a8b7;
  }
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
