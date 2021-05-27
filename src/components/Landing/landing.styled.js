import styled from "styled-components";
import { fonts } from "../../styles/theme.styled";

// eslint-disable-next-line import/prefer-default-export
export const P = styled.p`
  margin-right: auto;
  margin-left: auto;
  margin-top: 0px;
  margin-bottom: 54px;
  max-width: 700px;
  color: #00103b;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6rem;
  text-align: center;
  font-family: ${fonts.serif};
  @media screen and (max-width: 375px) {
    font-size: 16px;
    /* margin-top: 36px; */
  }
`;