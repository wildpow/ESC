import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors, fonts, radius } from "../../utils/styles";

const cartAnimation = keyframes`
12.5% {
    transform: translateX(-60px) rotate(-18deg);
  }
  25%, 45%, 55%, 75% {
    transform: none;
  }
  50% {
    transform: scale(0.9);
  }
  44%, 56% {
    transform-origin: 12px 23px;
  }
  45%, 55% {
    transform-origin: 50% 50%;
  }
  87.5% {
    transform: translateX(70px) rotate(-18deg);
  }
  100% {
    transform: translateX(140px) rotate(-18deg);
  }
`;

const ButtonWrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  font-family: "Inter UI", "Inter", Arial;
  .button {
    font-family: ${fonts.sans};
    border-radius: ${radius.default}px;
    --background: ${colors.blue[700]};
    --text: #fff;
    --cart: #fff;
    --tick: var(--background);
    position: relative;
    border: none;
    background: none;
    padding: 8px 28px;
    /* border-radius: 8px; */
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    mask-image: -webkit-radial-gradient(white, black);
    overflow: hidden;
    cursor: pointer;
    text-align: center;
    min-width: 144px;
    color: var(--text);
    background: var(--background);
    transform: scale(var(--scale, 1));
    transition: transform 0.4s cubic-bezier(0.36, 1.01, 0.32, 1.27);
  }
  .button:active {
    --scale: 0.95;
  }
  .button span {
    font-size: 14px;
    font-weight: 500;
    display: block;
    position: relative;
    padding-left: 24px;
    margin-left: -8px;
    line-height: 26px;
    transform: translateY(var(--span-y, 0));
    transition: transform 0.7s ease;
    :before,
    :after {
      content: "";
      width: var(--w, 2px);
      height: var(--h, 14px);
      border-radius: 1px;
      position: absolute;
      left: var(--l, 8px);
      top: var(--t, 6px);
      background: currentColor;
      transform: scale(0.75) rotate(var(--icon-r, 0deg))
        translateY(var(--icon-y, 0));
      transition: transform 0.65s ease 0.05s;
    }
    :after {
      --w: 14px;
      --h: 2px;
      --l: 2px;
      --t: 12px;
    }
  }
  /* .button span:before,
  .button span:after {
    content: "";
    width: var(--w, 2px);
    height: var(--h, 14px);
    border-radius: 1px;
    position: absolute;
    left: var(--l, 8px);
    top: var(--t, 6px);
    background: currentColor;
    transform: scale(0.75) rotate(var(--icon-r, 0deg))
      translateY(var(--icon-y, 0));
    transition: transform 0.65s ease 0.05s;
  }
  .button span:after {
    --w: 14px;
    --h: 2px;
    --l: 2px;
    --t: 12px;
  } */
  .button .cart {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -13px 0 0 -18px;
    transform-origin: 12px 23px;
    transform: translateX(-120px) rotate(-18deg);
    :before,
    :after {
      content: "";
      position: absolute;
    }
    :before {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      box-shadow: inset 0 0 0 2px var(--cart);
      bottom: 0;
      left: 9px;
      filter: drop-shadow(11px 0 0 var(--cart));
    }
    :after {
      width: 16px;
      height: 9px;
      background: var(--cart);
      left: 9px;
      bottom: 7px;
      transform-origin: 50% 100%;
      transform: perspective(4px) rotateX(-6deg) scaleY(var(--fill, 0));
      transition: transform 1.2s ease var(--fill-d);
    }
  }

  /* .button .cart:before {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px var(--cart);
    bottom: 0;
    left: 9px;
    filter: drop-shadow(11px 0 0 var(--cart));
  }
  .button .cart:after {
    width: 16px;
    height: 9px;
    background: var(--cart);
    left: 9px;
    bottom: 7px;
    transform-origin: 50% 100%;
    transform: perspective(4px) rotateX(-6deg) scaleY(var(--fill, 0));
    transition: transform 1.2s ease var(--fill-d);
  } */
  .button .cart svg {
    z-index: 1;
    width: 36px;
    height: 26px;
    display: block;
    position: relative;
    fill: none;
    stroke: var(--cart);
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .button .cart svg polyline:last-child {
    stroke: var(--tick);
    stroke-dasharray: 10px;
    stroke-dashoffset: var(--offset, 10px);
    transition: stroke-dashoffset 0.4s ease var(--offset-d);
  }
  .button.loading {
    --scale: 0.95;
    --span-y: -32px;
    --icon-r: 180deg;
    --fill: 1;
    --fill-d: 0.8s;
    --offset: 0;
    --offset-d: 1.73s;
    .cart {
      -webkit-animation: ${cartAnimation} 3.4s linear forwards 0.2s;
      animation: ${cartAnimation} 3.4s linear forwards 0.2s;
    }
  }
  /* .button.loading .cart {
    -webkit-animation: ${cartAnimation} 3.4s linear forwards 0.2s;
    animation: ${cartAnimation} 3.4s linear forwards 0.2s;
  } */
`;

export default function FancyCheckoutBtn() {
  const [loading, setLoading] = useState("");
  const submit = () => {
    if (loading !== "loading") {
      setLoading("loading");
      setTimeout(() => setLoading(""), 3700);
    }
  };
  return (
    <ButtonWrapper>
      <button className={`button ${loading}`} type="button" onClick={submit}>
        {console.log(loading)}
        <span>Add to cart</span>
        <div className="cart">
          <svg viewBox="0 0 36 26">
            <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5" />
            <polyline points="15 13.5 17 15.5 22 10.5" />
          </svg>
        </div>
      </button>
    </ButtonWrapper>
  );
}
