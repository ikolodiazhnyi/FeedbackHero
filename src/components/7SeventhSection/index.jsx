import React from "react";
import {
  FlexSection,
  StyledDiv,
  StyledHeader1,
  StyledParagraph,
} from "../1FirstSection/FirstSectionStyled";
import {
  DescWrapper,
  SectionHeaderWrapper,
  SectionName,
} from "../2SecondSection/SecondSectionStyled";

const SeventhSection = () => {
  const numbersValues = [
    { h1: "1000+", p: "Reviews every day" },
    { h1: "550+", p: "Trades connected" },
    { h1: "240+", p: "Companies we serve" },
  ];
  const numbers = numbersValues.map(({ h1, p }) => {
    return (
      <StyledDiv
        display="flex"
        flexDirection="column"
        marginLeft="147px"
        bg="#FCFCFC"
      >
        <StyledHeader1 fontWeight="300" fontSize="66px">
          {h1}
        </StyledHeader1>
        <StyledParagraph paddingTop={"10px"} fontSize="16px">
          {p}
        </StyledParagraph>
      </StyledDiv>
    );
  });
  return (
    <FlexSection bg="#FCFCFC" paddingTop="129px" paddingBottom="144px" paddingRight="204px" paddingLeft="200px">
      <StyledDiv width="100%" bg="#FCFCFC">
        <StyledDiv display="flex" flexDirection="column" bg="#FCFCFC">
          <SectionHeaderWrapper>
            <SectionName>OUR SERVICE IS</SectionName>
            <DescWrapper paddingLeft="304px">
              <StyledHeader1 fontSize="46px">
                FeedbackHero in Numbers
              </StyledHeader1>
              <StyledParagraph fontSize="1rem">
                The FeedbackHero is growing right now and getting more and more
                every day. <br />
                Join our service now!
              </StyledParagraph>
            </DescWrapper>
          </SectionHeaderWrapper>
        </StyledDiv>
        <StyledDiv
          display="flex"
          justifyContent="flex-end"
          marginTop="54px"
          bg="#FCFCFC"
        >
          {numbers}
        </StyledDiv>
      </StyledDiv>
    </FlexSection>
  );
};

export default SeventhSection;
