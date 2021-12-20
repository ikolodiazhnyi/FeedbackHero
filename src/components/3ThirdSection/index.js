import React from "react";
import {
  FlexSection,
  LinkBtn,
  StyledDiv,
  StyledHeader1,
  StyledHeader6,
  StyledParagraph,
} from "../1FirstSection/FirstSectionStyled";
import unsplash1 from "../../images/ThirdSection/unsplash1.svg";
import unsplash2 from "../../images/ThirdSection/unsplash2.svg";
import { StyledImg } from "../2SecondSection/SecondSectionStyled";

const ThirdSection = () => {
  return (
    <FlexSection
      paddingTop="150px"
      paddingLeft="200px"
      paddingRight="200px"
      paddingBottom="204px"
      flexDirection="column"
      pFlexDirection="column"
      bg="#FCFCFC"
    >
      <StyledDiv
        maxWidth="auto"
        display="flex"
        justifyContent="space-between"
        bg="#FCFCFC"
        marginBottom="150px"
        pFlexDirection="column"
        pJustifyContent="space-evenly"
      >
        <StyledDiv
          width="360px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          bg="#FCFCFC"
        >
          <StyledHeader6 lineHeight="140%">EASY TO USE</StyledHeader6>
          <StyledHeader1 marginTop="11px" fontSize="46px">
            How it works?
          </StyledHeader1>
          <StyledParagraph fontSize="16px">
            We generate a QR code and a short link. Then you offer it to
            visitors (leave stickers on the table, print on table awnings, send
            by e-mail) and get feedback.
          </StyledParagraph>
          <StyledParagraph fontSize="16px">
            Through a personal account you will be able to collect statistics of
            the received comments and to do mailing.
          </StyledParagraph>
        </StyledDiv>
        <StyledImg src={unsplash1} alt="" />
      </StyledDiv>
      <StyledDiv
        maxWidth="auto"
        display="flex"
        justifyContent="space-between"
        flexDirection="row-reverse"
        bg="#FCFCFC"
        pFlexDirection="column"
        pJustifyContent="space-evenly"
      >
        <StyledDiv
          width="360px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          bg="#FCFCFC"
        >
          <StyledHeader6 lineHeight="140%">WHO'LL BENEFIT?</StyledHeader6>
          <StyledHeader1 marginTop="10px" fontSize="46px">
            Fits to any business
          </StyledHeader1>
          <StyledParagraph fontSize="16px">
            FeedbackHero is effective in diferrent areas of business:
            restaurants, hotels, E-commerce, Auto service, Auto salons & Lease,
            Beauty & Cosmetics and other business areas
          </StyledParagraph>
          <LinkBtn width="154px" marginTop="32px" to="">
            START USING
          </LinkBtn>
        </StyledDiv>
        <img src={unsplash2} alt="" />
      </StyledDiv>
    </FlexSection>
  );
};

export default ThirdSection;
