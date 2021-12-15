import React from "react";
import {
  StyledHeader1,
  StyledHeader6,
  StyledParagraph,
} from "../FirstSection/FirstSectionElement";
import {
  ImgAdvantage,
  ImgAdvantageWrapper,
  ShadowBorderDiv,
} from "../SecondSection/SecondSection";
import { AdvantageDescWrapper } from "../styles/GlobalStyledComponents";

const SingleAdvantage = ({
  styledHeader1Content,
  styledHeader6Content,
  styledParagraphContent,
  advantageProp,
  imgAdvantageWrapperProps,
  imgAdvantageProp,
  styledHeader1Props,
  styledHeader6Props,
  styledParagraphProps,
}) => {
  return (
    <ShadowBorderDiv {...advantageProp}>
      <ImgAdvantageWrapper {...imgAdvantageWrapperProps}>
        <ImgAdvantage src={imgAdvantageProp} alt="icon" />
      </ImgAdvantageWrapper>
      <AdvantageDescWrapper>
        <StyledHeader1 {...styledHeader1Props}>
          {styledHeader1Content}
        </StyledHeader1>
        <StyledHeader6 {...styledHeader6Props}>
          {styledHeader6Content}
        </StyledHeader6>
        <StyledParagraph {...styledParagraphProps}>
          {styledParagraphContent}
        </StyledParagraph>
      </AdvantageDescWrapper>
    </ShadowBorderDiv>
  );
};

export default SingleAdvantage;
