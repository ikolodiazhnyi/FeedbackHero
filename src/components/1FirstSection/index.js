import Group48095402 from "../../images/FirstSection/Group48095402.svg";
import {
  FlexSection,
  LinkBtn,
  StyledDiv,
  StyledHeader1,
  StyledHeader6,
  StyledParagraph,
} from "./FirstSectionStyled";
import "../../assets/styles/styles.css";
import { StyledImg } from "../2SecondSection/SecondSectionStyled";

const FirstSection = () => {
  return (
    <FlexSection
      paddingLeft="200px"
      paddingTop="100px"
      paddingRight="60px"
      dPaddingTop="50px"
      pFlexDirection="column"
    >
      <StyledDiv width="571px" marginRight="65px">
        <StyledHeader6 fontSize="0.98vw">
          Your business superhero{" "}
        </StyledHeader6>
        <StyledHeader1 fontSize="4vw">
          Time is money, reviews is a growing business
        </StyledHeader1>
        <StyledParagraph fontSize="1.6vw" paddingTop="30px">
          The best tool for user satisfaction research, feedback, market
          research and analytics.
        </StyledParagraph>
        <LinkBtn marginTop="54px" to="" pHeight="25px">
          TRY NOW
        </LinkBtn>
      </StyledDiv>
      <div>
        <StyledImg maxWidth="100%" src={Group48095402} alt="" />
      </div>
    </FlexSection>
  );
};

export default FirstSection;
