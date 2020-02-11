import styled from "styled-components";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.mainColor1};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 2px;
  /* width: 150px;
  height: 216px; */
  margin-top: 15px;
  background-color: white;
  transition: ${props => props.theme.hoverTransition};
  box-shadow: ${props => props.theme.hoverBoxBefore};
  @media (min-width: 360px) {
    margin: 5px;
    /* width: 165px;
    height: 235px; */
  }
  @media (min-width: 414px) {
    width: 185px;
  }
  @media (min-width: 768px) {
    width: 340px;
    height: 365px;
    height: 380px;

    margin-right: 10px;
    margin-bottom: 20px;
  }
  @media (min-width: 1024px) {
    width: 300px;
    height: 360px;
    height: 380px;

    margin-right: 10px;
    margin-bottom: 20px;
  }
  &:hover {
    transform: ${props => props.theme.hoverTransform};
    box-shadow: ${props => props.theme.hoverBoxAfter};
  }
`;

export const Topper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 20px;
`;
export const Banner = styled.div`
  font-family: ${props => props.theme.MainFont1};
  font-weight: 400;
  text-align: center;
  z-index: 10;
  background-color: ${props => props.theme.mainColor2};
  color: white;
  position: absolute;
  font-size: 0.5rem;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 15px;
  letter-spacing: 0.015rem;
  margin-top: 3px;

  /* margin-left: 45px; */
  width: 70%;
  font-size: 1rem;
  margin-top: 18px;
  padding-right: 27px;
  padding-left: 28px;
  padding-top: 4px;
  padding-bottom: 4px;
  :after {
    content: " ";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: ${props => props.theme.mainColor2};
    transform-origin: bottom left;
    transform: skew(-21deg, 0deg);
  }
  @media (min-width: 360px) {
    margin-top: 8px;
    margin-left: 16px;
    padding-left: 6px;
    padding-right: 11px;
    letter-spacing: 0.035rem;
  }
  @media (min-width: 375px) {
    margin-left: 16px;
  }
  @media (min-width: 411px) {
    margin-left: 15px;
    padding-right: 7px;
    font-size: 0.6rem;
  }
  @media (min-width: 414px) {
    margin-left: 28px;
    font-size: 0.6rem;
  }
  @media (min-width: 640px) {
    margin-left: 27px;
  }
  @media (min-width: 768px) {
    margin-left: 45px;
    font-size: 1rem;
    margin-top: 18px;
    padding-right: 27px;
    padding-left: 28px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  @media (min-width: 1024px) {
    margin-top: 14px;
    margin-left: 25px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-right: 23px;
    padding-left: 24px;
    letter-spacing: 0.045rem;
  }
`;

export const PriceRange = styled.div`
  color: ${props => props.theme.newColor2};
  font-weight: 400;
  font-family: ${props => props.theme.MainFont1};
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  z-index: 5;
  /* @media (min-width: 360px) {
    font-size: 0.8rem;
  } */
  /* @media (min-width: 768px) { */
  font-size: 1rem;
  letter-spacing: 0.05rem;
  /* } */
`;
export const Name = styled.div`
  font-family: ${props => props.theme.MainFont1};
  text-decoration: none;
  font-weight: 400;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;
  padding-top: 5px;
  font-size: 0.9rem;
  margin: 0;
  /* @media (min-width: 768px) { */
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.2rem;
  margin: 0;
  letter-spacing: 0.05rem;
  /* } */
`;

export const MattImgContainer = styled.div`
  color: white;
  margin: 0 auto 0px auto;
  /* width: 110px;
  height: 110px; */
  width: 250px;
  height: 250px;
  @media (min-width: 360px) {
    /* width: 130px;
    height: 130px; */
  }
  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
  @media (min-width: 1022px) {
    width: 250px;
    margin-bottom: -10px;
  }
`;
