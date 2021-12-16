import React from "react";
import {
  StyledDiv,
  StyledParagraph,
} from "../../FirstSection/FirstSectionElement";
import { StyledLi, StyledUl } from "./UnorderedListStyled";
import tick from "../../../images/SixthSection/tick.svg"

const UnorderedList = ({ ul }) => {
  const benefits = ul.map((benefit) => {
    return (
      <StyledLi>
        <StyledDiv display="flex">
          <img src={tick} alt="" />
          <StyledParagraph fontSize="16px" paddingLeft="20px" paddingTop="0">
            {benefit}
          </StyledParagraph>
        </StyledDiv>
      </StyledLi>
    );
  });
  return <StyledUl>{benefits}</StyledUl>;
};

export default UnorderedList;
