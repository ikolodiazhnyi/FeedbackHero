import React from "react";
import {
  FlexSection,
  LinkBtn,
  StyledDiv,
  StyledHeader1,
  StyledParagraph,
} from "../1FirstSection/FirstSectionStyled";
import feedbackLogo from "../../images/FeedbackHeroLogo3.svg";
import { StyledImg } from "../2SecondSection/SecondSectionStyled";
import {
  StyledLi,
  StyledUl,
} from "../SinglePlan/UnorderedListOfPlan/UnorderedListStyled";
import facebook from "../../images/NinthSection/facebook.svg";
import twitter from "../../images/NinthSection/twitter.svg";
import linkedin from "../../images/NinthSection/linkedin.svg";

const NinthSection = () => {
  const linksValues = [
    { h1: "Quick links", p1: "Features", p2: "Blog", p3: "Price" },
    {
      h1: "Legal information",
      p1: "Privacy Policy",
      p2: "Cookie",
      p3: "Terms of use",
    },
  ];
  const links = linksValues.map(({ h1, p1, p2, p3 }) => {
    return (
      <StyledDiv height="fit-content" bg="#FCFCFC" marginRight="150px">
        <StyledHeader1
          marginTop="5px"
          marginBottom="25px"
          fontWeight="300"
          fontSize="20px"
          bg="#FCFCFC"
        >
          {h1}
        </StyledHeader1>
        <StyledUl paddingTop="0" paddingLeft="0" height="auto">
          <StyledLi paddingBottom="0px">
            <StyledParagraph
              paddingTop="0"
              paddingBottom="12px"
              fontSize="16px"
            >
              {p1}
            </StyledParagraph>
          </StyledLi>
          <StyledLi paddingBottom="0px">
            <StyledParagraph
              paddingTop="0"
              paddingBottom="12px"
              fontSize="16px"
            >
              {p2}
            </StyledParagraph>
          </StyledLi>
          <StyledLi paddingBottom="0px">
            <StyledParagraph paddingTop="0" fontSize="16px">
              {p3}
            </StyledParagraph>
          </StyledLi>
        </StyledUl>
      </StyledDiv>
    );
  });
  return (
    <footer>
      <FlexSection
        bg="#FCFCFC"
        paddingBottom="146px"
        paddingRight="200px"
        paddingLeft="200px"
      >
        <StyledDiv
          display="flex"
          flexDirection="column"
          bg="#FCFCFC"
          width="100%"
        >
          <StyledImg
            marginBottom="22px"
            height="49px"
            width="200px"
            src={feedbackLogo}
            alt=""
          />
          <StyledDiv display="flex" bg="#FCFCFC">
            <StyledDiv
              display="flex"
              bg="#FCFCFC"
              flexDirection="column"
              marginRight="133px"
            >
              <StyledHeader1 fontWeight="300" fontSize="26px">
                Your Business Superhero
              </StyledHeader1>
              <LinkBtn
                bg="#000"
                marginTop="41px"
                width="144px"
                height="50px"
                to=""
              >
                BUY NOW
              </LinkBtn>
            </StyledDiv>
            {links}
            <StyledDiv height="fit-content" bg="#FCFCFC">
              <StyledHeader1
                marginTop="5px"
                marginBottom="25px"
                fontWeight="300"
                fontSize="20px"
              >
                Contact
              </StyledHeader1>
              <StyledUl paddingTop="0" paddingLeft="0" height="auto">
                <StyledLi paddingBottom="0px">
                  <StyledParagraph
                    paddingTop="0"
                    paddingBottom="12px"
                    fontSize="16px"
                  >
                    +39 333 3333333
                  </StyledParagraph>
                </StyledLi>
                <StyledLi paddingBottom="0px">
                  <StyledParagraph
                    paddingTop="0"
                    paddingBottom="24px"
                    fontSize="16px"
                  >
                    feedbackhero.info@gmail.com
                  </StyledParagraph>
                </StyledLi>
                <StyledDiv bg="#FCFCFC">
                  <StyledImg marginRight="15px" src={twitter}></StyledImg>
                  <StyledImg marginRight="15px" src={linkedin}></StyledImg>
                  <StyledImg marginRight="15px" src={facebook}></StyledImg>
                </StyledDiv>
              </StyledUl>
            </StyledDiv>
            {/*  */}
          </StyledDiv>
        </StyledDiv>
      </FlexSection>
    </footer>
  );
};

export default NinthSection;
