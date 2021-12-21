import React from "react";
import {
  FlexSection,
  StyledHeader1,
  StyledParagraph,
} from "../1FirstSection/FirstSectionStyled";
import {
  AdvantagesWrapper,
  DescWrapper,
  SectionHeaderWrapper,
  SectionName,
} from "../2SecondSection/SecondSectionStyled";
import Icon1 from "../../images/icons/ThirdSection/Icon1.svg";
import Icon2 from "../../images/icons/ThirdSection/Icon2.svg";
import Icon3 from "../../images/icons/ThirdSection/Icon3.svg";
import SingleAdvantage from "../SingeAdvantage/SingleAdvantage";

const FourthSection = () => {
  let advantagesContent = [
    {
      h1: "Sales growth",
      h6: "Grades & stats",
      p: "Control and prompt work with feedback will increase sales and LTV in any business",
      img: Icon3,
    },
    {
      h1: "New ideas",
      h6: "Turn customer feedback into action",
      p: "Gather new content ideas and get people to rate your content with blog surveys",
      img: Icon1,
    },
    {
      h1: "Make website surveys in minutes",
      h6: "Fast and adaptive",
      p: "Ask questions with unobtrusive website surveys that look good on all devices — web, mobile, tablet",
      img: Icon2,
    },
  ];

  advantagesContent = advantagesContent.map((advtg) => (
    <SingleAdvantage
      styledHeader1Content={advtg.h1}
      styledHeader6Content={advtg.h6}
      styledParagraphContent={advtg.p}
      imgAdvantageProp={advtg.img}
      advantageProp={{
        marginRight: "60px",
        pMarginRight: "0",
        marginBottom: "150px",
        pMarginBottom: "50px",
        height: "370px",
      }}
      imgAdvantageWrapperProps={{
        height: "90px",
        width: "90px",
        marginTop: "50px",
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: "35px",
        boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.05)",
        borderRadius: "10px",
      }}
      styledHeader1Props={{ height: "60px", fontSize: "20px" }}
      styledHeader6Props={{
        height: "30px",
        fontSize: "1rem",
        textTransform: "normal",
        paddingTop: "8px",
      }}
      styledParagraphProps={{ fontSize: "1rem", paddingTop: "15px" }}
    />
  ));
  return (
    <FlexSection paddingTop="139px" flexDirection="column" paddingLeft="200px">
      <SectionHeaderWrapper>
        <SectionName>WHY FEEDBACKHERO?</SectionName>
        <DescWrapper width="780px" marginLeft="255px">
          <StyledHeader1 fontSize="46px">
            Create. Collect. Analyze.
            <br />
            Connect BerbackHero today.
          </StyledHeader1>
          <StyledParagraph fontSize="1rem" pPaddingTop="20px">
            The FeedbackHero system works for the reputation of your brand.
            <br />
            You’ll see your business the way your customers see it.
            <br />
            Our surveys have already helped solve hundreds of cases, only yours
            is missing
          </StyledParagraph>
        </DescWrapper>
      </SectionHeaderWrapper>
      <AdvantagesWrapper justifeContent="normal">
        {advantagesContent}
      </AdvantagesWrapper>
    </FlexSection>
  );
};

export default FourthSection;
