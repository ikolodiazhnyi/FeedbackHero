import React from "react";
import {
  FlexSection,
  StyledDiv,
  StyledHeader1,
  StyledHeader6,
  StyledParagraph,
} from "../FirstSection/FirstSectionElement";

const ThirdSection = () => {
  return (
    <FlexSection>
      <StyledDiv>
        <StyledHeader6>EASY TO USE</StyledHeader6>
        <StyledHeader1>How it works?</StyledHeader1>
        <StyledParagraph>
          We generate a QR code and a short link. Then you offer it to visitors
          (leave stickers on the table, print on table awnings, send by e-mail)
          and get feedback. Through a personal account you will be able to
          collect statistics of the received comments and to do mailing.
        </StyledParagraph>
      </StyledDiv>
    </FlexSection>
  );
};

export default ThirdSection;
