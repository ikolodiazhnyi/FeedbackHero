import React from "react";
import { ShadowBorderDiv } from "../SecondSection/SecondSection";

const SingleCompanyLogo = ({ ShadowBorderDivProps, companyLogo }) => {
  return (
    <ShadowBorderDiv {...ShadowBorderDivProps}>
      <img src={companyLogo} alt="company logo" />
    </ShadowBorderDiv>
  );
};

export default SingleCompanyLogo;
