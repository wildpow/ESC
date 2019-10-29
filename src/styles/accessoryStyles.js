import styled from "styled-components";
import { FlexRow, FlexCol, FadeIn } from "./mainStyles";

export const Main = styled(FlexCol)`
  animation-name: ${FadeIn};
  ${props => props.theme.Animation}
  margin-top: 15px;
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 5px;
  padding-right: 5px;
  @media (min-width: 1200px) {
    margin-left: 120px;
    margin-right: 120px;
  }
`;

export const P = styled.p`
  margin-top: 0;
  align-self: center;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-left: 5px;
  padding-right: 5px;
  align-self: flex-start;
  color: ${props => props.theme.newColor2};
  font-family: ${props => props.theme.MainFont3};
  font-weight: 300;
  @media (min-width: 360px) {
    padding-left: 7px;
    padding-right: 7px;
  }
  @media (min-width: 411px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (min-width: 568px) {
    padding-top: 10px;
    font-size: 1.1rem;
  }
  @media (min-width: 660px) and (max-width: 767px) {
    margin-right: 30px;
    margin-left: 30px;
  }

  @media (min-width: 640px) {
    margin-right: 0px;
    padding-top: 20px;
    margin-left: 20px;
    font-size: 1.2rem;
    line-height: 1.7rem;
    max-width: 500px;
  }
  @media (min-width: 1024px) {
    line-height: 1.9rem;
  }
  @media (min-width: 1300px) {
    margin-right: 60px;
    font-size: 1.3rem;
    line-height: 2rem;
  }
`;
export const AccWrapper = styled.article`
  box-shadow: ${props => props.theme.newBoxShadow};
  /* border: ${props => props.theme.Border}; */
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 15px;
  border-radius: 0.14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  @media (min-width: 660px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (min-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  @media (min-width: 1024px) {
    margin-left: 60px;
    margin-right: 60px;
  }
`;

export const AccWrapper2 = styled(AccWrapper)`
  margin-bottom: 0px;
`;
// 640
export const H3 = styled.h3`
  text-shadow: ${props => props.theme.newTextShadow};
  font-family: ${props => props.theme.MainFont1};
  background-color: ${props => props.theme.mainColor1};
  color: ${props => props.theme.newColor1};
  margin-top: 0;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0;
  font-size: 1rem;
  padding: 10px 5px 10px 5px;
  letter-spacing: 0.12rem;
  @media (min-width: 581px) {
    font-size: 1.2rem;
    padding: 10px 30px 10px 30px;
  }
  @media (min-width: 568px) {
    text-align: left;
    word-spacing: 0.18rem;
    letter-spacing: 0.17rem;
  }
  @media (min-width: 1028px) {
    letter-spacing: 0.2rem;
    word-spacing: 0.17rem;
    font-size: 1.5rem;
  }
`;

export const InfoWrapper = styled(FlexRow)`
  flex-wrap: wrap;
  justify-content: space-around;
  @media (min-width: 568px) {
    flex-wrap: nowrap;
    justify-content: space-around;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const InfoWrapperReversed = styled(InfoWrapper)`
  flex-direction: row-reverse;
`;
// 667
export const Img = styled.img`
  color: white;
  max-height: 10rem;
  align-self: center;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (min-width: 640px) and (max-width: 767px) {
    max-height: 14rem;
  }
  @media (min-width: 568px) {
    align-self: center;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-top: 10px;
    max-height: 12rem;
  }
  @media (min-width: 1024px) {
    align-self: flex-start;
    max-height: 16rem;
  }
`;

export const Img2 = styled(Img)`
  @media (min-width: 568px) {
    margin-left: 0px;
    margin-right: 20px;
  }
`;
