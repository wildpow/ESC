import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Firmness = styled.div`
  --heightLg: 21px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 12px;
  background: white;
  left: 0;
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  @media screen and (min-width: 768px) {
    height: 20px;
  }
  @media screen and (min-width: 900px) {
    height: 50px;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  .firm,
  .soft {
    font-family: ${props => props.theme.MainFont1};
    color: black;
    width: 22%;
    text-align: center;
    font-size: 0.8rem;
    @media screen and (min-width: 768px) {
      font-size: 1rem;
      width: 20%;
    }
    @media screen and (min-width: 900px) {
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  .scale {
    position: relative;
    background: #eaeaed;
    display: flex;
    width: 55%;
    height: 12px;
    :after {
      content: "";
      width: 40%;
      height: 12px;
      background-image: ${props => props.gradient};
      position: absolute;
      top: 0;
      left: ${props => props.firmNum};
      @media screen and (min-width: 768px) {
        height: 15px;
      }
      @media screen and (min-width: 900px) {
        height: var(--heightLg);
      }
    }
    @media screen and (min-width: 768px) {
      height: 15px;
      width: 80%;
    }
    @media screen and (min-width: 900px) {
      height: var(--heightLg);
    }
  }
`;

const FirmnessScale = ({ firmness }) => {
  let gradient =
    "linear-gradient(to left, #EAEAED 0%, #3F81CB 35%, #1565C0 50%, #3F81CB 65%, #EAEAED 100%)";
  const firmnessPosition = num => {
    switch (num) {
      case 1:
        gradient = "linear-gradient(to left, #EAEAED 0%, #1565C0 100%)";
        return `0%`;
      case 2:
        return `9%`;
      case 3:
        return `30%`;
      case 4:
        return `52%`;
      case 5:
        gradient = "linear-gradient(to right, #EAEAED 0%, #1565C0 100%)";
        return `60%`;
      default:
        return undefined;
    }
  };
  return (
    <Firmness firmNum={firmnessPosition(firmness)} gradient={gradient}>
      <div className="firm">Firm</div>
      <div className="scale" />
      <div className="soft">Soft</div>
    </Firmness>
  );
};

FirmnessScale.propTypes = {
  firmness: PropTypes.number.isRequired,
};

export default FirmnessScale;
