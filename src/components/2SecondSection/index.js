import React from "react";
import {
  StyledParagraph,
  StyledHeader1,
  FlexSection,
} from "../1FirstSection/FirstSectionStyled";
import {
  ShadowBorderDiv,
  AdvantagesWrapper,
  DescWrapper,
  ImgAdvantage,
  ImgAdvantageWrapper,
  SectionHeaderWrapper,
  SectionName,
  StyledImg,
} from "./SecondSectionStyled";
import imgPdf from "../../images/icons/SecondSection/pdf.svg";
import Rectangle from "../../images/icons/SecondSection/Rectangle.svg";
import Vector from "../../images/icons/SecondSection/Vector.svg";
import Loyalty from "../../images/icons/SecondSection/ic_baseline-loyalty.svg";
import Flat from "../../images/icons/SecondSection/flat-color-icons_survey.svg";
import CarbonQR from "../../images/icons/SecondSection/carbon_qr-code.svg";
import Carbon from "../../images/icons/SecondSection/carbon_analytics.svg";

const SecondSection = () => {
  const advantagesValues = [
    {
      h1: "Export results",
      p: "With the one click, you can download all your survey results in PDF format",
      img: imgPdf,
    },
    {
      h1: "Easy share",
      p: "Insert the survey directly on your website or send the link to your friends",
      img: Vector,
    },
    {
      h1: "Audience loyalty",
      p: "Receive instant messages in the messenger when you mention your brand online or new reviews",
      img: Loyalty,
    },
    {
      h1: "Survey and questionnaire",
      p: "To collect responses from colleagues, clients or potential audience in just a couple of clicks",
      img: Flat,
    },
    {
      h1: "QR code generator",
      p: "Find out what your customers want and understand what you are doing right or wrong",
      img: CarbonQR,
    },
    {
      h1: "Analyze surveys with built-in analytics",
      p: "Monitor visitor feedback with easy-to-use dashboards and reports",
      img: Carbon,
    },
  ];
  const advantages = advantagesValues.map(({ h1, p, img }) => {
    return (
      <ShadowBorderDiv>
        <ImgAdvantageWrapper>
          <ImgAdvantage src={img} alt="icon" />
        </ImgAdvantageWrapper>
        <div style={{ padding: "27px 30px 0 30px" }}>
          <StyledHeader1 height="30px" fontSize="26px">
            {h1}
          </StyledHeader1>
          <StyledImg marginTop="54px" src={Rectangle} alt="icon line" />
          <StyledParagraph fontSize="1rem" paddingTop="25px">
            {p}
          </StyledParagraph>
        </div>
      </ShadowBorderDiv>
    );
  });
  return (
    <FlexSection
      flexDirection="column"
      paddingBottom="90px"
      paddingRight="200px"
      paddingTop="140px"
      paddingLeft="200px"
      pFlexDirection="column"
      pPaddingTop="50px"
    >
      <SectionHeaderWrapper>
        <SectionName>FEATURES</SectionName>
        <DescWrapper pMarginLeft="0" maxWidth="570px" marginLeft="348px">
          <StyledHeader1 fontSize="46px">Why FeedbackHero?</StyledHeader1>
          <StyledParagraph fontSize="1rem">
            Return customers with NPS service, feedback and FeedbackHero loyalty
            assessment.
          </StyledParagraph>
        </DescWrapper>
      </SectionHeaderWrapper>
      <AdvantagesWrapper>{advantages}</AdvantagesWrapper>
    </FlexSection>
  );
};

export default SecondSection;
