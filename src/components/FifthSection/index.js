import React from "react";
import {
  FlexSection,
  StyledDiv,
  StyledHeader1,
  StyledHeader6,
  StyledParagraph,
} from "../FirstSection/FirstSectionElement";
import {
  DescWrapper,
  SectionHeaderWrapper,
  SectionName,
  StyledImg,
} from "../SecondSection/SecondSection";
import man from "../../images/FifthSection/unsplash1.svg";
import vector from "../../images/FifthSection/Vector.svg";
import buttonBack from "../../images/FifthSection/buttonBack.svg";
import buttonForward from "../../images/FifthSection/buttonForward.svg";
import ferrero from "../../images/FifthSection/companiesLogos/Ferrero.svg";
import leonardo from "../../images/FifthSection/companiesLogos/Leonardo.svg";
import poste from "../../images/FifthSection/companiesLogos/Poste.svg";
import saras from "../../images/FifthSection/companiesLogos/Saras.svg";
import SingleCompanyLogo from "../SingleCompanyLogo/SingleCompanyLogo";

const FifthSection = () => {
  const companiesLogos = [ferrero, saras, poste, poste, leonardo, ferrero];
  const companies = companiesLogos.map((companyLogo) => {
    return (
      <SingleCompanyLogo
        companyLogo={companyLogo}
        ShadowBorderDivProps={{
          width: "240px",
          height: "160px",
          marginRight: "30px",
          marginBottom: "30px",
          className: "align-justify-center",
        }}
      />
    );
  });
  return (
    <FlexSection
      paddingTop="150px"
      bg="#FCFCFC"
      flexDirection="column"
      paddingRight="172px"
      paddingBottom="120px"
    >
      <SectionHeaderWrapper>
        <SectionName>OUR CLIENTS</SectionName>
        <DescWrapper width="780px" marginLeft="346px">
          <StyledHeader1 fontSize="46px">We are trusted</StyledHeader1>
        </DescWrapper>
      </SectionHeaderWrapper>
      <StyledDiv
        display="flex"
        alignItems="flex-start"
        maxWidth="auto"
        paddingTop="62px"
        bg="#FCFCFC"
      >
        <StyledImg paddingRight="60px" paddingTop="0" src={man} alt="" />
        <StyledImg paddingRight="60px" paddingTop="0" src={vector} alt="" />
        <StyledDiv width="680px" bg="#FCFCFC">
          <StyledHeader1 fontSize="26px" paddingTop="0" fontWeight="100">
            Some text with rewiev from client Some text with rewiev from client.
            Some text with rewiev from client Some text with rewiev from client
            . Some text with rewiev from client Some text with rewiev from
            client/
          </StyledHeader1>
          <StyledHeader6
            color="#000"
            paddingTop="81px"
            fontSize="16px"
            textTransform="normal"
          >
            Alberto Coltraliano, CEO
          </StyledHeader6>
          <StyledParagraph paddingBottom="67px" paddingTop="0" fontSize="16px">
            Hilton Corporation Ltd
          </StyledParagraph>
          <StyledDiv bg="#FCFCFC">
            <StyledImg
              paddingRight="30px"
              paddingTop="0"
              src={buttonForward}
              alt=""
            />
            <StyledImg paddingTop="0" src={buttonBack} alt="" />
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
      <StyledDiv
        maxWidth="100%"
        paddingTop="142px"
        display="flex"
        alignItems="flex-start"
        flexDirection="row"
        bg="#FCFCFC"
      >
        <StyledDiv maxWidth="360px"bg="#FCFCFC">
          <StyledHeader1 fontSize="46px">
            Companies that have already joined us
          </StyledHeader1>
        </StyledDiv>
        <StyledDiv
          paddingLeft="40px"
          display="flex"
          alignItems="flex-start"
          flexDirection="row"
          flexWrap="wrap"
          maxWidth="auto"
          bg="#FCFCFC"
        >
          {companies}
        </StyledDiv>
      </StyledDiv>
    </FlexSection>
  );
};

export default FifthSection;
