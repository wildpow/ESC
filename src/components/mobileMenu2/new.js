import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";
import { set1, set2, set3, set4 } from "./menuItemsData";

const AppearKeyframe = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const SlideInKeyframe = keyframes`
  from { transform: translateX(60%); }
  to { transform: translateX(0); }
`;
const Container = styled.div`
  padding-top: 120px;

  display: flex;
  flex-direction: column;
  @media (orientation: landscape) and (min-width: 568px) {
    flex-direction: row;
    flex-wrap: nowrap;
    padding-top: 100px;
  }
  @media (orientation: portrait) and (min-width: 375px) {
    padding-top: 140px;
  }
  @media (orientation: landscape) and (min-width: 570px) {
    margin: 0 auto;
    padding-top: 140px;
  }
  @media (min-width: 768px) {
    padding-top: 180px;
  }
  @media (min-width: 780px) {
    padding-top: 160px;
  }
  @media (min-width: 900px) and (orientation: landscape) {
    padding-top: 150px;
    flex-direction: column;
    margin: 0;
  }
`;
const FadeIn = styled.div`
  opacity: 0;
  /* width: 100%;
  height: 100%; */
  animation: 0.7s ${AppearKeyframe} forwards;
  animation-delay: ${props => props.delay};
  transition: all 0.5s ease-in-out;
`;
const SlideIn = styled.div`
  /* width: 100%;
  height: 100%; */
  animation: 0.5s ${SlideInKeyframe} forwards;
  animation-delay: ${props => props.delay};
`;
const StyledLink = styled(Link)`
  font-family: Roboto, sans-serif;
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.2rem;
  /* width: 100%;
  height: 100%; */
  color: #fafafa;
  padding-left: 10px;
  background-color: inital;
  transition: background-color 0.2s ease-in-out;
  @media (orientation: portrait) and (min-width: 375px) {
    font-size: 1.2rem;
  }
  @media (orientation: landscape) and (min-width: 736px) {
    font-size: 1.3rem;
  }
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(17, 75, 95, 0.4);
  }
  &:active {
    background-color: rgba(235, 28, 26, 0.8);
  }
  @media (orientation: landscape) and (min-width: 568px) {
    border: 1px dotted rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    margin: 5px;
  }

  @media (min-width: 900px) and (orientation: landscape) {
    border: none;
    margin: 0px;
    font-size: 1.5rem;
    border-radius: 0px;
  }
`;

const HiddenOnSmallLink = styled(StyledLink)`
  display: none;
  @media (min-width: 568px) and (orientation: landscape) {
    display: initial;
  }
  @media (orientation: portrait) and (min-height: 800px) {
    display: initial;
  }
  /* @media (orientation: portrait) and (min-width: 375px) {
    display: initial;
  } */
`;

export const ShrinkKeyframe = keyframes`
  0% {width: 0%; }
  100% { width: 100%; }
`;
const Line = styled.div`
  width: 0%;
  height: 1px;
  background: white;
  margin: 0 auto;
  animation: 0.9s ${ShrinkKeyframe} forwards;
  animation-delay: ${props => props.delay};
  @media (orientation: landscape) and (min-width: 568px) {
    display: none;
  }
  @media (orientation: portrait) and (min-height: 800px) {
    display: initial;
  }
  @media (min-width: 900px) and (orientation: landscape) {
    display: initial;
  }
`;
const HiddenLineOnSmall = styled(Line)`
  display: none;
  @media (min-width: 768px) {
    display: initial;
  }
`;
const HiddenLineAgain = styled(Line)`
  @media (max-width: 375px) {
    display: none;
  }
`;

const ShiftTextOnHover = styled.div`
  transition: all 0.5s ease-in-out;
  transform: none;
  /* width: 100%;
  height: 100%; */
  padding: 15px;
  @media (orientation: landscape) {
    padding: 20px;
  }
  @media (orientation: landscape) and (max-width: 568px) {
    padding: 20px;
    text-align: center;
  }
  @media (min-width: 768px) {
    padding: 25px;
  }
  @media (min-width: 900px) and (orientation: landscape) {
    text-align: left;
    padding: 20px;
  }
  &:hover {
    transform: translateX(10px);
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media (orientation: landscape) and (max-width: 568px) {
    flex-direction: column;
    align-self: center;
    width: 100%;
    padding: 5px;
    justify-content: space-evenly;
  }
  @media (orientation: landscape) and (min-width: 667px) {
    text-align: center;
  }
`;
const HomeFlex = styled(Flex)`
  /* @media (orientation: landscape) and (max-width: 736px) {
    display: none;
  } */
  @media (orientation: landscape) and (max-width: 820px) {
    display: none;
  }
  @media (orientation: portrait) and (min-height: 800px) {
    display: inherit;
  }
`;
const HomeSmallSlide = styled.div`
  animation: 0.5s ${SlideInKeyframe} forwards;
  animation-delay: 0.2s;
`;

const HomeSmall = styled(Link)`
  display: none;
  opacity: 0;
  animation: 0.7s ${AppearKeyframe} forwards;
  animation-delay: 0.2s;
  transition: all 0.5s ease-in-out;
  @media (orientation: landscape) and (min-width: 568px) {
    display: initial;
    position: absolute;
    top: 55px;
    text-align: center;
    width: 174px;
    border-bottom: 1px solid #eb1c24;
    border-top: 1px solid #eb1c24;
    /* border: 1px solid red; */
    border-radius: 2px;
    /* border: 1px dotted rgba(255, 255, 255, 0.4); */
    left: 12px;
    padding: 10px 20px;
    font-size: 1.1rem;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    color: white;
    font-weight: 700;
    letter-spacing: 0.2rem;
  }
  @media (orientation: landscape) and (min-width: 667px) {
    left: 25px;
    padding: 15px 20px;
    font-size: 1.2rem;
  }
  @media (orientation: landscape) and (min-width: 736px) {
    left: 24px;
    width: 194px;
    top: 60px;
    font-size: 1.4rem;
  }
  @media (min-width: 900px) and (orientation: landscape) {
    display: none;
    border-radius: 0;
  }
`;

const NewStuff = () => {
  return (
    <Container>
      <HomeSmall
        activeStyle={{
          backgroundColor: "rgba(17, 75, 95, 0.2)",
        }}
        to={set1[0].to}
      >
        <HomeSmallSlide>{set1[0].label}</HomeSmallSlide>
      </HomeSmall>
      <HomeFlex>
        {set1.map(item => (
          <>
            <StyledLink
              key={item.key}
              to={item.to}
              activeStyle={{
                backgroundColor: "rgba(17, 75, 95, 0.2)",
              }}
            >
              <SlideIn delay={`${item.delay}s`}>
                <FadeIn delay={`${item.delay}s`}>
                  <ShiftTextOnHover>{item.label}</ShiftTextOnHover>
                </FadeIn>
              </SlideIn>
            </StyledLink>
            <Line delay={`${item.delay}s`} />
          </>
        ))}
      </HomeFlex>
      <Flex>
        {set2.map(item => (
          <>
            <StyledLink
              key={item.key}
              to={item.to}
              partiallyActive
              activeStyle={{
                backgroundColor: "rgba(235, 28, 26, 0.9)",
              }}
            >
              <SlideIn delay={`${item.delay}s`}>
                <FadeIn delay={`${item.delay}s`}>
                  <ShiftTextOnHover>{item.label}</ShiftTextOnHover>
                </FadeIn>
              </SlideIn>
            </StyledLink>
            <Line delay={`${item.delay}s`} />
          </>
        ))}
      </Flex>
      <Flex>
        {set3.map(item => (
          <>
            <StyledLink
              key={item.key}
              to={item.to}
              partiallyActive
              activeStyle={{
                backgroundColor: "rgba(235, 28, 26, 0.9)",
              }}
            >
              <SlideIn delay={`${item.delay}s`}>
                <FadeIn delay={`${item.delay}s`}>
                  <ShiftTextOnHover>{item.label}</ShiftTextOnHover>
                </FadeIn>
              </SlideIn>
            </StyledLink>
            {item.key !== 8 ? (
              <Line delay={`${item.delay}s`} />
            ) : (
              <HiddenLineAgain delay={`${item.delay}s`} />
            )}
          </>
        ))}
      </Flex>
      <Flex>
        {set4.map(item => (
          <>
            <HiddenOnSmallLink
              key={item.key}
              to={item.to}
              partiallyActive
              activeStyle={{
                backgroundColor: "rgba(235, 28, 26, 0.9)",
              }}
            >
              <SlideIn delay={`${item.delay}s`}>
                <FadeIn delay={`${item.delay}s`}>
                  <ShiftTextOnHover>{item.label}</ShiftTextOnHover>
                </FadeIn>
              </SlideIn>
            </HiddenOnSmallLink>
            {item.key !== 11 && <HiddenLineOnSmall delay={`${item.delay}s`} />}
          </>
        ))}
      </Flex>
    </Container>
  );
};

export default NewStuff;
