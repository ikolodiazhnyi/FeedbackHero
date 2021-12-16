import React from "react";
import {
  LinkBtn,
  StyledDiv,
  StyledHeader1,
  StyledHeader6,
  StyledParagraph,
} from "../FirstSection/FirstSectionElement";
import { PlanWrapper } from "./SinglePlanStyled";
import UnorderedList from "./UnorderedListOfPlan/UnorderedList";

const SinglePlan = ({
  planName,
  planCost,
  planCostPerYear,
  description,
  ul,
}) => {
  return (
    <PlanWrapper>
      <StyledDiv
        bg="#E0F0FD"
        paddingTop="4px"
        paddingBottom="4px"
        paddingRight="12px"
        paddingLeft="12px"
        marginLeft="41px"
        maxWidth="auto"
        width="fit-content"
        borderRadius="5px"
      >
        <StyledHeader6 color="#3174C4" fontSize="12px">
          {planName}
        </StyledHeader6>
      </StyledDiv>
      <StyledDiv
        marginLeft="41px"
        marginRight="41px"
        marginTop="26.5px"
        display="flex"
        justifyContent="space-between"
      >
        <StyledHeader1 fontSize="46px">{planCost}</StyledHeader1>
        <StyledDiv marginTop="5px" textAlign="end">
          <StyledHeader6 color="#000">{planCostPerYear}</StyledHeader6>
          <StyledParagraph paddingTop="4px" fontSize="14px">
            per year
          </StyledParagraph>
        </StyledDiv>
      </StyledDiv>
      <StyledDiv display="flex" paddingLeft="41px">
        <StyledParagraph fontSize="16px" paddingTop="23px">
          <pre>{description}</pre>
        </StyledParagraph>
      </StyledDiv>
      <UnorderedList ul={ul} />
      <StyledDiv
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        height="100%"
        marginBottom="40px"
      >
        <LinkBtn width="276px" to="" height="60px" marginTop="0">
          Choose this plan
        </LinkBtn>
      </StyledDiv>
    </PlanWrapper>
  );
};

export default SinglePlan;
