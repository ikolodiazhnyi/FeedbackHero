import React from "react";
import {
  HugeHeader,
  PYourBusinnessSuperhero,
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
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "130px",
      }}
    >
      <SectionHeaderWrapper>
        <SectionName>FEATURES</SectionName>
        <DescWrapper style={{ width: "570px" }}>
          <HugeHeader style={{ fontSize: "46px" }}>
            Why FeedbackHero?
          </HugeHeader>
          <PYourBusinnessSuperhero style={{ fontSize: "1rem" }}>
            Return customers with NPS service, feedback and FeedbackHero loyalty
            assessment.
          </PYourBusinnessSuperhero>
        </DescWrapper>
      </SectionHeaderWrapper>
      <AdvantagesWrapper>
        <Advantage>
          <ImgAdvantageWrapper>
            <ImgAdvantage src={imgPdf} alt="icon" />
          </ImgAdvantageWrapper>
          <div style={{ padding: "27px 30px 0 30px" }}>
            <HugeHeader height="30px" style={{ fontSize: "26px" }}>
              Export results
            </HugeHeader>
            <ImgRectangle src={Rectangle} alt="icon line" />
            <PYourBusinnessSuperhero
              style={{ fontSize: "1rem", paddingTop: "25px" }}
            >
              With the one click, you can download all your survey results in
              PDF format
            </PYourBusinnessSuperhero>
          </div>
        </Advantage>
        <Advantage>
          <ImgAdvantageWrapper>
            <ImgAdvantage src={Vector} alt="icon" />
          </ImgAdvantageWrapper>
          <div style={{ padding: "27px 30px 0 30px" }}>
            <HugeHeader style={{ fontSize: "26px" }}>Easy share</HugeHeader>
            <ImgRectangle src={Rectangle} alt="icon line" />
            <PYourBusinnessSuperhero
              style={{ fontSize: "1rem", paddingTop: "25px" }}
            >
              Insert the survey directly on your website or send the link to
              your friends
            </PYourBusinnessSuperhero>
          </div>
        </Advantage>
        <Advantage>
          <ImgAdvantageWrapper>
            <ImgAdvantage src={Loyalty} alt="icon" />
          </ImgAdvantageWrapper>
          <div style={{ padding: "27px 30px 0 30px" }}>
            <HugeHeader style={{ fontSize: "26px" }}>
              Audience loyalty
            </HugeHeader>
            <ImgRectangle src={Rectangle} alt="icon line" />
            <PYourBusinnessSuperhero
              style={{ fontSize: "1rem", paddingTop: "25px" }}
            >
              Receive instant messages in the messenger when you mention your
              brand online or new reviews
            </PYourBusinnessSuperhero>
          </div>
        </Advantage>
        <Advantage>
          <ImgAdvantageWrapper>
            <ImgAdvantage src={Flat} alt="icon" />
          </ImgAdvantageWrapper>
          <div style={{ padding: "27px 30px 0 30px" }}>
            <HugeHeader height='30px' style={{ fontSize: "26px" }}>
              Survey and questionnaire
            </HugeHeader>
            <ImgRectangle src={Rectangle} alt="icon line" />
            <PYourBusinnessSuperhero
              style={{ fontSize: "1rem", paddingTop: "25px" }}
            >
              To collect responses from colleagues, clients or potential
              audience in just a couple of clicks
            </PYourBusinnessSuperhero>
          </div>
        </Advantage>
        <Advantage>
          <ImgAdvantageWrapper>
            <ImgAdvantage src={CarbonQR} alt="icon" />
          </ImgAdvantageWrapper>
          <div style={{ padding: "27px 30px 0 30px" }}>
            <HugeHeader style={{ fontSize: "26px" }}>
              QR code generator
            </HugeHeader>
            <ImgRectangle src={Rectangle} alt="icon line" />
            <PYourBusinnessSuperhero
              style={{ fontSize: "1rem", paddingTop: "25px" }}
            >
              Find out what your customers want and understand what you are
              doing right or wrong
            </PYourBusinnessSuperhero>
          </div>
        </Advantage>
        <Advantage>
          <ImgAdvantageWrapper>
            <ImgAdvantage src={Carbon} alt="icon" />
          </ImgAdvantageWrapper>
          <div style={{ padding: "27px 30px 0 30px" }}>
            <HugeHeader height="30px" style={{ fontSize: "26px" }}>
              Analyze surveys with built-in analytics
            </HugeHeader>
            <ImgRectangle src={Rectangle} alt="icon line" />
            <PYourBusinnessSuperhero
              style={{ fontSize: "1rem", paddingTop: "25px" }}
            >
              Monitor visitor feedback with easy-to-use dashboards and reports
            </PYourBusinnessSuperhero>
          </div>
        </Advantage>
      </AdvantagesWrapper>
    </section>
  );
};

export default SecondSection;
