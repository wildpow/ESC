import React from "react";
import styled from "styled-components";
import { func, string, bool } from "prop-types";
import Hamburger from "./Hamburger";
import {
  colors,
  breakpoints,
  dimensions,
  spacing,
  fonts,
} from "../../../utils/styles";

const MobileMenuRoot = styled.div`
  display: ${({ pin }) => (pin ? "initial" : "none")};
  background: ${colors.white};
  bottom: 0;
  position: fixed;
  right: 0;
  /* top: -1px; */
  top: 0;
  transform: translateX(100%);
  transition: transform 0.75s;
  width: 100%;
  will-change: transform;
  z-index: 10;

  &.open {
    transform: translateX(0%);
    box-shadow: 0 0 10px #85888c;
  }

  &.closed {
    transform: translateX(100%);
  }

  @media (min-width: ${breakpoints.sm}) {
    width: ${dimensions.cartWidthDesktop};
  }

  &.loading {
    ::after {
      opacity: 0.9;
      pointer-events: all;
    }
  }

  @media (min-width: ${breakpoints.lg}) {
    width: ${dimensions.cartWidthDesktop};

    display: none;
  }
`;

const Heading = styled.header`
  align-items: center;
  display: flex;
  height: ${dimensions.headerHeight};
  justify-content: flex-start;
  color: ${colors.gray["900"]};
`;

const Title = styled.h2`
  flex-grow: 1;
  font-family: ${fonts.sans};
  font-size: 1.8rem;
  left: -${dimensions.headerHeight};
  margin: 0;
  margin-left: ${spacing["4"]};
  position: relative;

  .open & {
    margin-left: calc(${dimensions.headerHeight} + ${spacing["4"]});

    @media (min-width: ${breakpoints.lg}) {
      margin-left: ${spacing["4"]};
    }
  }
`;

const MobileMenu = ({ status, pin, toggle, menuId, ...props }) => {
  const isHidden = status === "open";
  const tabIndex = isHidden ? 0 : -1;

  return (
    <MobileMenuRoot
      className={status}
      aria-hidden={!isHidden}
      pin={pin}
      {...props}
    >
      <Heading>
        <Hamburger
          toggle={toggle}
          status={status}
          aria-controls={menuId}
          pin={pin}
        />
        {/* <Title>Mobile Menu</Title> */}
      </Heading>
      <ul aria-hidden={!isHidden}>
        <li tabIndex={tabIndex}>Cool</li>
        <li tabIndex={tabIndex}>stuff</li>
        <li tabIndex={tabIndex}>here</li>
      </ul>
    </MobileMenuRoot>
  );
};

MobileMenu.defaultProps = {
  status: "closed",
  pin: true,
  menuId: "main-menu",
};
MobileMenu.propTypes = {
  status: string,
  pin: bool,
  toggle: func.isRequired,
  menuId: string,
};
export default MobileMenu;