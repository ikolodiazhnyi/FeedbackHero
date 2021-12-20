import React from "react";
import { ShadowBorderDiv } from "../2SecondSection/SecondSectionStyled";

const SingleCompanyLogo = ({ ShadowBorderDivProps, companyLogo }) => {
  return (
    <ShadowBorderDiv {...ShadowBorderDivProps}>
      <img src={companyLogo} alt="company logo" />
    </ShadowBorderDiv>
  );
};

export default SingleCompanyLogo;
