import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Fieldset, Input, Label, Select, Submit } from "../FormElements";

import {
  colors,
  radius,
  spacing,
  fonts,
  breakpoints,
  fontSize,
} from "../../../utils/styles";
import { ProductFormRoot } from "./ProductForm.styled";
import sheetColors from "./sheetColors";
import ShopingCart from "../../../assets/shopping-cart-solid.svg";
import StoreContext from "../../../context/StoreContext";
import ErrorIcon from "../../../assets/exclamation-triangle-solid.svg";
// className="color_label"
// className="color_input"
const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h5 {
    font-family: ${fonts.serif};
    font-size: ${fontSize.xl};
    margin-bottom: 10px;
    color: ${colors.blue[900]};
  }
  .colorPalette {
    display: flex;
    width: 100%;
    /* justify-content: space-between; */
  }
  .color_input {
    display: none;
  }
  .color_label {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    background-size: auto 100%;
    padding: 10px;
  }
  /* .color_input {
    border: 2px solid black;
  } */
`;
const ColorLabel = styled.label`
  border: ${({ title, activeTitle }) =>
    title === activeTitle
      ? `2px solid ${colors.gray[900]}`
      : "1px solid #979797"};
`;

const AddToCartButton = styled(Submit)`
  align-self: flex-end;
  flex-grow: 1;
  /* height: ${(props) => (props.fullWidth ? "auto" : "")};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")}; */
  @media print {
    display: none;
  }
`;
const QtyFieldset = styled(Fieldset)`
  flex-basis: 65px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: ${spacing["3"]};

  ${Label} {
    text-align: center;
  }

  ${Input} {
    padding: ${spacing["3"]} ${spacing["3"]};
    text-align: center;
  }
  input[type="number"]::-webkit-inner-spin-button {
    cursor: pointer;
  }
`;
const SizeFieldset = styled(Fieldset)`
  flex-basis: calc(100% - ${spacing["3"]} - 70px);

  ${Label} {
    justify-content: space-between;
  }
`;
export default function ProductForm({
  variants,
  typeOfProduct,
  titleOfProduct,
  priceMin,
  priceMax,
  maxQty,
}) {
  const handleSubmit = () => console.log("SUBMIT!");
  const generateInitialState = (products, title) => {
    const sortedProductsByColor = {};
    let temp;
    products.forEach((product) => {
      temp = product.title.split(" / ");
      if (sortedProductsByColor[temp[1]] === undefined) {
        sortedProductsByColor[temp[1]] = [];
        sortedProductsByColor[temp[1]].push(product);
      } else {
        sortedProductsByColor[temp[1]].push(product);
      }
    });
    const colorPalette = sheetColors(Object.keys(sortedProductsByColor), title);
    return { sortedProductsByColor, colorPalette };
  };
  const test = generateInitialState(variants, titleOfProduct);
  const [activeColor, setActiveColor] = useState("");
  const [colorList, setColorList] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const colorHandler = (title) => {
    setActiveColor(title);
    setColorList(test.sortedProductsByColor[title]);
  };
  return (
    <ProductFormRoot onSubmit={handleSubmit}>
      <ColorWrapper>
        <h5>{`Color: ${activeColor}`}</h5>
        <div className="colorPalette">
          {test.colorPalette.map((color) => (
            <ColorLabel
              title={color.title}
              activeTitle={activeColor}
              key={color.title}
              htmlFor={color.title}
              className="color_label"
              style={{
                backgroundImage: `url(${color.colorImg})`,
              }}
            >
              <input
                className="color_input"
                onChange={() => colorHandler(color.title)}
                checked={color.title === activeColor}
                type="checkbox"
                id={color.title}
                label={color.title}
              />
            </ColorLabel>
          ))}
        </div>
      </ColorWrapper>
      <QtyFieldset>
        <Label htmlFor="quantity">Qty.</Label>
        <Input
          type="number"
          inputmode="numeric"
          id="quantity"
          // disabled={state.qtyDisabled}
          name="quantity"
          min="1"
          step="1"
          max={maxQty}
          onChange={(e) => console.log(e)}
          value={quantity}
        />
      </QtyFieldset>
      <SizeFieldset>
        <Label htmlFor="variant">Size</Label>
        <Select
          as="select"
          id="variant"
          value={activeColor}
          name="variant"
          onChange={(e) => console.log(e)}
        >
          <option disabled value="">
            Choose Size
          </option>
          {activeColor.length !== 0 &&
            colorList.map((item, index) => {
              const temp = item.title.split(" / ");
              return (
                <option value={index} key={item.shopifyId}>
                  {`${temp[0]} - $${item.price}`}
                </option>
              );
            })}
        </Select>
      </SizeFieldset>
      <AddToCartButton type="submit">
        Add to Cart
        <ShopingCart />
      </AddToCartButton>
    </ProductFormRoot>
  );
}

ProductForm.defaultProps = {
  maxQty: 10,
};

ProductForm.propTypes = {
  variants: PropTypes.instanceOf(Object).isRequired,
  titleOfProduct: PropTypes.string.isRequired,
  typeOfProduct: PropTypes.string.isRequired,
  priceMin: PropTypes.string.isRequired,
  priceMax: PropTypes.string.isRequired,
  maxQty: PropTypes.number,
};