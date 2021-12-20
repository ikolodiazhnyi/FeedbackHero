import styled from "styled-components";
import { variables } from "../../assets/styles/GlobalStyledComponents";
import { Link } from "react-router-dom";

export const FlexSection = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  background-color: ${({ bg }) => bg || "#fff"};
  padding: ${({ paddingTop }) => paddingTop || "0"}
    ${({ paddingRight }) => paddingRight || "0"}
    ${({ paddingBottom }) => paddingBottom || "0"}
    ${({ paddingLeft }) => paddingLeft || "0"};

  @media screen and (max-width: ${variables.breakpointDesktop}) {
    padding: ${({ dPaddingTop }) => dPaddingTop || "0"} 20px
      ${({ dPaddingBottom }) => dPaddingBottom || "0"} 20px;
  }

  @media screen and (max-width: ${variables.breakpointPhone}) {
    flex-direction: ${({ pFlexDirection }) => pFlexDirection || "column"};
    padding: ${({ pPaddingTop }) => pPaddingTop || "0"} 20px
      ${({ pPaddingBottom }) => pPaddingBottom || "0"} 20px;
  }
`;

export const StyledHeader6 = styled.h6`
  text-transform: ${({ textTransform }) => textTransform || "uppercase"};
  color: ${({ color }) => color || "#03a8b7"};
  font-size: ${({ fontSize }) => fontSize || "auto"};
  font-weight: ${({ fontWeight }) => fontWeight || "300"};
  line-height: ${({ lineHeight }) => lineHeight || "auto"};
  padding: ${({ paddingTop }) => paddingTop || "0"}
    ${({ paddingRight }) => paddingRight || "0"}
    ${({ paddingBottom }) => paddingBottom || "0"}
    ${({ paddingLeft }) => paddingLeft || "0"};
`;
export const StyledHeader1 = styled.h1`
  font-size: ${({ fontSize }) => fontSize || "auto"};
  height: ${({ height }) => height || "auto"};
  font-weight: ${({ fontWeight }) => fontWeight || "auto"};
  margin: ${({ marginTop }) => marginTop || "0"}
    ${({ marginRight }) => marginRight || "0"}
    ${({ marginBottom }) => marginBottom || "0"}
    ${({ marginLeft }) => marginLeft || "0"};
  @media screen and (max-width: ${variables.breakpointPhone}) {
    height: ${({ pHeight }) => pHeight || "auto"};
  }
`;

export const FirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 105px;
`;

export const StyledDiv = styled.div`
  height: ${({ height }) => height || "initial"};
  display: ${({ display }) => display || "initial"};
  justify-content: ${({ justifyContent }) => justifyContent || "initial"};
  align-items: ${({ alignItems }) => alignItems || "initial"};
  padding: ${({ paddingTop }) => paddingTop || "0"}
    ${({ paddingRight }) => paddingRight || "0"}
    ${({ paddingBottom }) => paddingBottom || "0"}
    ${({ paddingLeft }) => paddingLeft || "0"};
  margin: ${({ marginTop }) => marginTop || "0"}
    ${({ marginRight }) => marginRight || "0"}
    ${({ marginBottom }) => marginBottom || "0"}
    ${({ marginLeft }) => marginLeft || "0"};
  max-width: ${({ maxWidth }) => maxWidth || "auto"};
  width: ${({ width }) => width || "auto"};
  flex-direction: ${({ flexDirection }) => flexDirection || "auto"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
  background: ${({ bg }) => bg || "#fff"};
  border-radius: ${({ borderRadius }) => borderRadius || "0"};
  text-align: ${({ textAlign }) => textAlign || "initial"};
  background: ${({ bg }) => bg || "#fff"};

  @media screen and (max-width: ${variables.breakpointPhone}) {
    margin-bottom: ${({ pMarginBottom }) => pMarginBottom || "0"};
    width: ${({ pWidth }) => pWidth || "auto"};
    flex-direction: ${({ pFlexDirection }) => pFlexDirection || "auto"};
    justify-content: ${({ pJustifyContent }) => pJustifyContent || "initial"};
  }
`;

export const StyledParagraph = styled.p`
  padding: ${({ paddingTop }) => paddingTop || "0"}
    ${({ paddingRight }) => paddingRight || "0"}
    ${({ paddingBottom }) => paddingBottom || "0"}
    ${({ paddingLeft }) => paddingLeft || "0"};
  font-size: ${({ fontSize }) => fontSize || "auto"};
  font-weight: 300;
  color: rgba(24, 30, 37, 0.5);
`;

export const LinkBtn = styled(Link)`
  color: #ffffff;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: ${({ bg }) =>
    bg ||
    `linear-gradient(93.31deg, #006ad8 1.67%, #01acb4 98.59%),
    rgba(196, 196, 196, 0.05);`};
  border-radius: 5px;
  backdrop-filter: blur(37px);
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  padding: 14px 40px;
  display: inline-flex;
  margin: ${({ marginTop }) => marginTop || "0"}
    ${({ marginRight }) => marginRight || "0"}
    ${({ marginBottom }) => marginBottom || "0"}
    ${({ marginLeft }) => marginLeft || "0"};
  font-size: 14px;
  height: ${({ height }) => height || "50px"};
  font-weight: 300;
  width: ${({ width }) => width || "auto"};

  @media screen and (max-width: ${variables.breakpointPhone}) {
    width: ${({ pWidth }) => pWidth || "auto"};
    height: ${({ pHeight }) => pHeight || "50px"};
    padding: 7px 20px;
    font-size: 10px;
  }
`;
