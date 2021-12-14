import Group48095402 from "../../images/Group48095402.svg";
import {
  FlexSection,
  LinkBtn,
  StyledDiv,
  StyledHeader1,
  StyledHeader6,
  StyledParagraph,
} from "./FirstSectionElement";
import "../styles/styles.css"

const FirstSection = () => {
  return (
    <FlexSection>
      <StyledDiv width="571px">
        <StyledHeader6>Your business superhero </StyledHeader6>
        <StyledHeader1>
          Time is money, reviews is a growing business
        </StyledHeader1>
        <StyledParagraph>
          The best tool for user satisfaction research, feedback, market
          research and analytics.
        </StyledParagraph>
        <LinkBtn to="">TRY NOW</LinkBtn>
      </StyledDiv>
      <div>
        <img src={Group48095402} alt="" />
      </div>
    </FlexSection>
  );
};

export default FirstSection;
