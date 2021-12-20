import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style: none;
  height: ${({ height }) => height || "235px"};
  padding: ${({ paddingTop }) => paddingTop || "28px"}
    ${({ paddingRight }) => paddingRight || "0"}
    ${({ paddingBottom }) => paddingBottom || "0"}
    ${({ paddingLeft }) => paddingLeft || "41px"};
`;

export const StyledLi = styled.li`
  padding: ${({ paddingTop }) => paddingTop || "0"}
    ${({ paddingRight }) => paddingRight || "0"}
    ${({ paddingBottom }) => paddingBottom || "20px"}
    ${({ paddingLeft }) => paddingLeft || "0"};
`;
