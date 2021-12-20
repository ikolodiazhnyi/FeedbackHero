import styled from "styled-components";
import { variables } from "../../assets/styles/GlobalStyledComponents";

export const DescWrapper = styled.div`
  padding: ${({ paddingTop }) => paddingTop || "0"}
    ${({ paddingRight }) => paddingRight || "0"}
    ${({ paddingBottom }) => paddingBottom || "0"}
    ${({ paddingLeft }) => paddingLeft || "0"};
  display: flex;
  flex-direction: column;
  /* 780px; */
  max-width: ${({ maxWidth }) => maxWidth || "initial"};
  margin-left: ${({ marginLeft }) => marginLeft || "0"};
  width: ${({ width }) => width};
`;

export const SectionHeaderWrapper = styled.header`
  display: flex;
  width: ${({ width }) => width || "100%"};
`;

export const SectionName = styled.h6`
  padding-top: 10px;
  color: #03a8b7;
  font-weight: 300;
  font-size: 16px;
`;

export const AdvantagesWrapper = styled.div`
  display: flex;
  justify-content: ${({ justifeContent }) => justifeContent || "space-between"};
  flex-wrap: wrap;
  padding: 49px 0 0;
`;
export const ImgAdvantage = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 0 0 auto;
`;

export const ImgAdvantageWrapper = styled.div`
  width: ${({ width }) => width || "39px"};
  height: ${({ height }) => height || "39px"};
  position: relative;
  margin: ${({ marginTop }) => marginTop || "32px"}
    ${({ marginRight }) => marginRight || "27px"}
    ${({ marginBottom }) => marginBottom || "0"}
    ${({ marginLeft }) => marginLeft || "auto"};
  box-shadow: ${({ boxShadow }) => boxShadow || "none"};
  border-radius: ${({ borderRadius }) => borderRadius || "0"};
`;

export const StyledImg = styled.img`
  padding: ${({ paddingTop }) => paddingTop || "0"}
    ${({ paddingRight }) => paddingRight || "0"}
    ${({ paddingBottom }) => paddingBottom || "0"}
    ${({ paddingLeft }) => paddingLeft || "0"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  margin: ${({ marginTop }) => marginTop || "0"}
    ${({ marginRight }) => marginRight || "0"}
    ${({ marginBottom }) => marginBottom || "0"}
    ${({ marginLeft }) => marginLeft || "0"};
    max-width: ${({ maxWidth }) => maxWidth || "initial"};

  @media screen and (max-width: ${variables.breakpointPhoneSmall}) {
    height: ${({ spHeight }) => spHeight || "auto"};
    width: ${({ spWidth }) => spWidth || "auto"};
  }
`;

export const ShadowBorderDiv = styled.div`
  width: ${({ width }) => width || "360px"};
  height: ${({ height }) => height || "318px"};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ marginBottom }) => marginBottom || "60px"};
  margin-right: ${({ marginRight }) => marginRight || 0};
`;
