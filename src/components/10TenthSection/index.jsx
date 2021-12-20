import React from "react";
import {
  StyledDiv,
  StyledHeader6,
} from "../1FirstSection/FirstSectionStyled";

const TenthSection = () => {
  return (
    <StyledDiv
      display="flex"
      justifyContent="space-between"
      height="50px"
      width="100%"
      bg="#202731"
      paddingRight="200px"
      paddingLeft="200px"
      paddingTop="15px"
      paddingBottom="15px"
    >
      <StyledHeader6 fontWeight="100" textTransform="none" color="#F8F8F8">
        © FeedbackHero, 2021
      </StyledHeader6>
      <StyledHeader6 fontWeight="100" textTransform="none" color="#F8F8F8">
        All rights reserver
      </StyledHeader6>
    </StyledDiv>
  );
};

export default TenthSection;
