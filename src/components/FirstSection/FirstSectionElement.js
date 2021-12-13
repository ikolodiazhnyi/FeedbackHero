import styled from "styled-components";

import { Link } from "react-router-dom";

export const FlexSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 105px;
`;

export const StyledHeader6 = styled.h6`
  text-transform: uppercase;
  color: #03a8b7;
  font-size: 1rem;
  font-weight: 300;
`;
export const StyledHeader1 = styled.h1`
  font-size: 66px;
  height: ${({ height }) => height || "auto"};
`;

export const FirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 105px;
`;

export const StyledDiv = styled.div`
  padding-left: 202px;
  max-width: 727px;
`;

export const StyledParagraph = styled.p`
  padding-top: 30px;
  font-size: 26px;
  font-weight: 300;
  color: rgba(24, 30, 37, 0.5);
`;

export const LinkBtn = styled(Link)`
  color: #ffffff;
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
  padding: 14px 40px;
  display: inline-flex;
  margin-top: 54px;
  font-size: 14px;
  height: 50px;
  font-weight: 300;
`;

export const ImgCustomerSatisfactionScore = styled.img`
  width: 697px;
  padding-right: 60.4px;
  height: 447.8px;
`;
