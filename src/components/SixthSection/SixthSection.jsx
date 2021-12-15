import React from "react";
import {
  FlexSection,
  StyledHeader1,
  StyledParagraph,
} from "../FirstSection/FirstSectionElement";
import {
  DescWrapper,
  SectionHeaderWrapper,
  SectionName,
} from "../SecondSection/SecondSection";

const SixthSection = () => {
  return (
    <FlexSection paddingTop="140px">
      <SectionHeaderWrapper>
        <SectionName>PRICING</SectionName>
        <DescWrapper width="780px" marginLeft="298px">
          <StyledHeader1 fontSize="46px">
            We have prepared ideal solutions for your business
          </StyledHeader1>
          <StyledParagraph fontSize="1rem">
          Small or medium business, or even enterprise: <br/> choose your format of work with feedback and NPS!
          </StyledParagraph>
        </DescWrapper>
      </SectionHeaderWrapper>
    </FlexSection>
  );
};
export default SixthSection;
