import React from "react";
import {
  StyledParagraph,
  StyledHeader1,
  FlexSection,
} from "../FirstSection/FirstSectionElement";
import {
  Advantage,
  AdvantagesWrapper,
  DescWrapper,
  ImgAdvantage,
  ImgAdvantageWrapper,
  ImgRectangle,
  SectionHeaderWrapper,
  SectionName,
} from "./SecondSection";
import imgPdf from "../../images/icons/pdf.svg";
import Rectangle from "../../images/icons/Rectangle.svg";
import Vector from "../../images/icons/Vector.svg";
import Loyalty from "../../images/icons/ic_baseline-loyalty.svg";
import Flat from "../../images/icons/flat-color-icons_survey.svg";
import CarbonQR from "../../images/icons/carbon_qr-code.svg";
import Carbon from "../../images/icons/carbon_analytics.svg";

const SecondSection = () => {
  return (
    <FlexSection
      flexDirection="column"
      paddingBottom="90px"
      paddingRight="200px"
      paddingTop="140px"
    >
      <SectionHeaderWrapper>
        <SectionName>FEATURES</SectionName>
        <DescWrapper width="570pxx">
          <StyledHeader1 fontSize="46px">Why FeedbackHero?</StyledHeader1>
          <StyledParagraph fontSize="1rem">
            Return customers with NPS service, feedback and FeedbackHero loyalty
            assessment.
          </StyledParagraph>
        </DescWrapper>
      </SectionHeaderWrapper>
      <AdvantagesWrapper>
        <Advantage>
          <ImgAdvantageWrapper>
            <ImgAdvantage src={imgPdf} alt="icon" />
          </ImgAdvantageWrapper>
          <div style={{ padding: "27px 30px 0 30px" }}>
            <StyledHeader1 height="30px" fontSize="26px">
              Export results
            </StyledHeader1>
            <ImgRectangle src={Rectangle} alt="icon line" />
            <StyledParagraph fontSize="1rem" paddingTop="25px">
              With the one click, you can download all your survey results in
              PDF format
            </StyledParagraph>
          </div>
        </Advantage>
        <Advantage>
          <ImgAdvantageWrapper>
            <ImgAdvantage src={Vector} alt="icon" />
          </ImgAdvantageWrapper>
          <div style={{ padding: "27px 30px 0 30px" }}>
            <StyledHeader1 style={{ fontSize: "26px" }}>
              Easy share
            </StyledHeader1>
            <ImgRectangle src={Rectangle} alt="icon line" />
            <StyledParagraph style={{ fontSize: "1rem", paddingTop: "25px" }}>
              Insert the survey directly on your website or send the link to
              your friends
            </StyledParagraph>
          </div>
        </Advantage>
        <Advantage>
          <ImgAdvantageWrapper>
            <ImgAdvantage src={Loyalty} alt="icon" />
          </ImgAdvantageWrapper>
          <div style={{ padding: "27px 30px 0 30px" }}>
            <StyledHeader1 style={{ fontSize: "26px" }}>
              Audience loyalty
            </StyledHeader1>
            <ImgRectangle src={Rectangle} alt="icon line" />
            <StyledParagraph style={{ fontSize: "1rem", paddingTop: "25px" }}>
              Receive instant messages in the messenger when you mention your
              brand online or new reviews
            </StyledParagraph>
          </div>
        </Advantage>
        <Advantage>
          <ImgAdvantageWrapper>
            <ImgAdvantage src={Flat} alt="icon" />
          </ImgAdvantageWrapper>
          <div style={{ padding: "27px 30px 0 30px" }}>
            <StyledHeader1 height="30px" style={{ fontSize: "26px" }}>
              Survey and questionnaire
            </StyledHeader1>
            <ImgRectangle src={Rectangle} alt="icon line" />
            <StyledParagraph style={{ fontSize: "1rem", paddingTop: "25px" }}>
              To collect responses from colleagues, clients or potential
              audience in just a couple of clicks
            </StyledParagraph>
          </div>
        </Advantage>
        <Advantage>
          <ImgAdvantageWrapper>
            <ImgAdvantage src={CarbonQR} alt="icon" />
          </ImgAdvantageWrapper>
          <div style={{ padding: "27px 30px 0 30px" }}>
            <StyledHeader1 style={{ fontSize: "26px" }}>
              QR code generator
            </StyledHeader1>
            <ImgRectangle src={Rectangle} alt="icon line" />
            <StyledParagraph style={{ fontSize: "1rem", paddingTop: "25px" }}>
              Find out what your customers want and understand what you are
              doing right or wrong
            </StyledParagraph>
          </div>
        </Advantage>
        <Advantage>
          <ImgAdvantageWrapper>
            <ImgAdvantage src={Carbon} alt="icon" />
          </ImgAdvantageWrapper>
          <div style={{ padding: "27px 30px 0 30px" }}>
            <StyledHeader1 height="30px" style={{ fontSize: "26px" }}>
              Analyze surveys with built-in analytics
            </StyledHeader1>
            <ImgRectangle src={Rectangle} alt="icon line" />
            <StyledParagraph style={{ fontSize: "1rem", paddingTop: "25px" }}>
              Monitor visitor feedback with easy-to-use dashboards and reports
            </StyledParagraph>
          </div>
        </Advantage>
      </AdvantagesWrapper>
    </FlexSection>
  );
};

export default SecondSection;
