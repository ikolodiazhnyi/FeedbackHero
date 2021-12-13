import Group48095402 from "../../images/Group48095402.svg";
import {
  DivYourBusinnessSuperhero,
  HugeHeader,
  ImgCustomerSatisfactionScore,
  LinkBtn,
  PYourBusinnessSuperhero,
  SmallHeader,
} from "./FirstSectionElement";

const FirstSection = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "105px",
      }}
    >
      <DivYourBusinnessSuperhero>
        <SmallHeader>Your business superhero </SmallHeader>
        <HugeHeader>Time is money, reviews is a growing business</HugeHeader>
        <PYourBusinnessSuperhero>
          The best tool for user satisfaction research, feedback, market
          research and analytics.
        </PYourBusinnessSuperhero>
        <LinkBtn to="">TRY NOW</LinkBtn>
      </DivYourBusinnessSuperhero>
      <div>
        <ImgCustomerSatisfactionScore src={Group48095402} />
      </div>
    </section>
  );
};

export default FirstSection;
