import React from "react";
import {
  FlexSection,
  StyledHeader1,
  StyledHeader6,
  StyledParagraph,
} from "../FirstSection/FirstSectionElement";
import {
  Advantage,
  AdvantagesWrapper,
  DescWrapper,
  ImgAdvantage,
  ImgAdvantageWrapper,
  SectionHeaderWrapper,
  SectionName,
} from "../SecondSection/SecondSection";
import Icon1 from "../../images/icons/ThirdSection/Icon1.svg";
import Icon2 from "../../images/icons/ThirdSection/Icon2.svg";
import Icon3 from "../../images/icons/ThirdSection/Icon3.svg";
import { AdvantageDescWrapper } from "../styles/GlobalStyledComponents";
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
        marginBottom: "0px",
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
      styledHeader1Props={{ height: "30px", fontSize: "20px" }}
      styledHeader6Props={{
        height: "30px",
        fontSize: "20px",
        textTransform: "normal",
        paddingTop: "8px",
      }}
      styledParagraphProps={{ fontSize: "1rem", paddingTop: "15px" }}
    />
  ));
  return (
    <FlexSection paddingTop="139px" flexDirection="column">
      <SectionHeaderWrapper>
        <SectionName>WHY FEEDBACKHERO?</SectionName>
        <DescWrapper width="780px" marginLeft="298px">
          <StyledHeader1 fontSize="46px">
            Create. Collect. Analyze. Connect BerbackHero today.
          </StyledHeader1>
          {/* whiteSpace doesn't work */}
          <StyledParagraph style={{ whiteSpace: "pre-line" }} fontSize="1rem">
            The FeedbackHero system works for the reputation of your brand.
            You’ll see your business the way your customers see it. Our surveys
            have already helped solve hundreds of cases, only yours is missing
          </StyledParagraph>
        </DescWrapper>
      </SectionHeaderWrapper>
      <AdvantagesWrapper justifeContent="normal">
        {advantagesContent}
      </AdvantagesWrapper>
      {/* <AdvantagesWrapper justifeContent="normal">
        <Advantage marginRight="60px" height="370px">
          <ImgAdvantageWrapper
            height="90px"
            width="90px"
            marginTop="50px"
            marginRight="auto"
            marginLeft="auto"
            marginBottom="35px"
            boxShadow="0px 15px 30px rgba(0, 0, 0, 0.05)"
            borderRadius="10px"
          >
            <ImgAdvantage src={Icon3} alt="icon" />
          </ImgAdvantageWrapper>
          <AdvantageDescWrapper>
            <StyledHeader1 height="30px" fontSize="20px">
              Sales growth
            </StyledHeader1>
            <StyledHeader6
              height="30px"
              fontSize="20px"
              textTransform="normal"
              paddingTop="8px"
            >
              Grades & stats
            </StyledHeader6>
            <StyledParagraph fontSize="1rem" paddingTop="15px">
              Control and prompt work with feedback will increase sales and LTV
              in any business
            </StyledParagraph>
          </AdvantageDescWrapper>
        </Advantage>
      </AdvantagesWrapper> */}
    </FlexSection>
  );
};

export default FourthSection;
