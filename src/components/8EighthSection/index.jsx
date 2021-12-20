import React from "react";
import {
  FlexSection,
  LinkBtn,
  StyledDiv,
  StyledHeader1,
  StyledParagraph,
} from "../1FirstSection/FirstSectionStyled";
import {
  DescWrapper,
  SectionHeaderWrapper,
  SectionName,
  StyledImg,
} from "../2SecondSection/SecondSectionStyled";
import box from "../../images/EighthSection/box.svg";

const EighthSection = () => {
  return (
    <FlexSection paddingBottom="300px" paddingLeft="200px" paddingRight="200px">
      <SectionHeaderWrapper>
        <SectionName>SIGN UP</SectionName>
        <DescWrapper maxWidth="fit-content" marginLeft="0" paddingLeft="359px">
          <StyledDiv maxWidth="360px">
            <StyledHeader1 fontSize="46px">
              Connect your business to FeedbackHero
            </StyledHeader1>
            <StyledParagraph fontSize="1rem">
              Do you have any questions?
              <br />
              Leave a request, our manager will contact you in a few minutes and
              tell you about all the possibilities of FeedbackHero for your
              business.
            </StyledParagraph>
          </StyledDiv>

          <StyledDiv display="flex" marginTop="50px">
            <LinkBtn bg="#000" to="" marginRight="30px">
              SIGN UP
            </LinkBtn>
            <LinkBtn to="">LEAVE A REQUEST</LinkBtn>
          </StyledDiv>
        </DescWrapper>
        <StyledImg
          marginLeft="93px"
          width="300px"
          height="300px"
          src={box}
          alt=""
        />
      </SectionHeaderWrapper>
    </FlexSection>
  );
};

export default EighthSection;
