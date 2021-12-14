import styled from "styled-components";

export const DescWrapper = styled.div`
  padding-top: "140px";
  display: flex;
  flex-direction: column;
  max-width: 780px;
  margin-left: 365px;
  width: ${({ width }) => width};
`;

export const SectionHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const SectionName = styled.h6`
  padding-top: 10px;
  color: #03a8b7;
  font-size: 12px;
`;

export const AdvantagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 49px 0 0;
`;
export const ImgAdvantage = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 0 0 auto;
`;

export const ImgAdvantageWrapper = styled.div`
  width: 39px;
  height: 39px;
  position: relative;
  margin: 32px 27px 0 0;
`;

export const ImgRectangle = styled.img`
  padding-top: 54px;
`;

export const Advantage = styled.div`
  width: 360px;
  height: 318px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-bottom: 60px;
`;
