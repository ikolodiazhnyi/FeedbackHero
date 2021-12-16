import React from "react";
import {
  FlexSection,
  StyledDiv,
  StyledHeader1,
  StyledParagraph,
} from "../FirstSection/FirstSectionElement";
import {
  DescWrapper,
  SectionHeaderWrapper,
  SectionName,
} from "../SecondSection/SecondSection";
import SinglePlan from "../SinglePlan/SinglePlan";

const SixthSection = () => {
  const plansValues = [
    {
      planName: "Start",
      planCost: "€49",
      planCostPerYear: "€588",
      description:
        "10% discount on early payment. \nThe best soution for small business.",
      ul: ["1 Business location", "1 QR Code", "Custom branding"],
    },
    {
      planName: "Standart",
      planCost: "€150",
      planCostPerYear: "€588",
      description:
        "10% discount on early payment. \nThe best for medium business.",
      ul: [
        "3 Business location",
        "18 QR Codes",
        "Custom urls and branding",
        "Unlimited questions",
      ],
    },
    {
      planName: "Premium",
      planCost: "€250",
      planCostPerYear: "€588",
      description: "10% discount on early payment.\nAll-in-one for interprises.",
      ul: [
        "Unlimited QR areas",
        "Unlimited reviews",
        "Unlimited questions",
        "Custom urls and branding",
        "Custom questionaries",
      ],
    },
  ];

  const plans = plansValues.map((plan) => {
    return <SinglePlan {...plan} />;
  });
  return (
    <FlexSection paddingTop="140px" flexDirection="column">
      <SectionHeaderWrapper>
        <SectionName>PRICING</SectionName>
        <DescWrapper width="780px" marginLeft="375px">
          <StyledHeader1 fontSize="46px">
            We have prepared ideal solutions for your business
          </StyledHeader1>
          <StyledParagraph fontSize="1rem">
            Small or medium business, or even enterprise: <br /> choose your
            format of work with feedback and NPS!
          </StyledParagraph>
        </DescWrapper>
      </SectionHeaderWrapper>
      <StyledDiv display="flex">
        {plans}
      </StyledDiv>
    </FlexSection>
  );
};
export default SixthSection;
