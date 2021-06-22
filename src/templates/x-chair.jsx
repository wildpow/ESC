/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { graphql } from "gatsby";
import { useReducer } from "react";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import GenerateInitialState from "../components/X-Chair/generateInitialState";
import xChairReducer from "../components/X-Chair/xChair.reducer";
import Headrest from "../components/X-Chair/prototype/Headrest";
import Wheels from "../components/X-Chair/prototype/Wheels";
import Model from "../components/X-Chair/prototype/Model";
import Width from "../components/X-Chair/prototype/Width";
import Colors from "../components/X-Chair/prototype/Colors";
import ChairGallery from "../components/X-Chair/prototype/ChairGallery";
import MemoryFoam from "../components/X-Chair/prototype/MemoryFoam";
import getX1images from "../components/X-Chair/query/getX1Images.query";
import getX2images from "../components/X-Chair/query/getX2images.query";
import getX3images from "../components/X-Chair/query/getX3images.query";
import getX4images from "../components/X-Chair/query/getX4Images.query";

const XchairRoot = styled.section`
  background-color: white;
  .content {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .gallery {
    width: 50%;
  }
  .features {
    width: 50%;
  }
`;
export default function XChair({ data }) {
  const { datoCmsXChair, headrest, wheels, memoryFoam, width, hmt, elemax } =
    data;
  let colors;
  let colorCB;
  let colorData;
  if (datoCmsXChair.title === "K-Sport") {
    const data2 = getX2images();
    colors = data2.colors;
    colorCB = data2.colorCB;
    colorData = data2.data;
  } else if (datoCmsXChair.title === "ATR Fabric") {
    const data3 = getX3images();
    colors = data3.colors;
    colorCB = data3.colorCB;
    colorData = data3.data;
  } else if (datoCmsXChair.title === "Leather Exec") {
    const data4 = getX4images();
    colors = data4.colors;
    colorCB = data4.colorCB;
    colorData = data4.data;
  } else {
    const data1 = getX1images();
    colors = data1.colors;
    colorCB = data1.colorCB;
    colorData = data1.data;
  }
  const initialState = GenerateInitialState(colorCB, colors[0].title);
  const [state, dispatch] = useReducer(xChairReducer, initialState);
  return (
    <Layout>
      <XchairRoot>
        {console.log(colors, colorCB, colorData)}
        <h1>X-Chair</h1>
        <div className="content">
          <div className="gallery">
            <ChairGallery
              images={colorData[state.activeColor][state.activeHeadrest]}
            />
          </div>
          <div className="features">
            <Model modelCB={state.modelCB} dispatch={dispatch} />
            <Colors
              colors={colors}
              colorCB={state.colorCB}
              dispatch={dispatch}
            />
            <Headrest
              title={datoCmsXChair.title}
              headrestImg={headrest.images[0]}
              dispatch={dispatch}
              headrestBool={state.headrest}
              price={headrest.priceRangeV2.maxVariantPrice.amount}
            />
            {width ? (
              <Width
                activeColor={state.activeColor}
                title={datoCmsXChair.title}
                dispatch={dispatch}
                widthBool={state.width}
                price={width.priceRangeV2.maxVariantPrice.amount}
              />
            ) : null}
            {memoryFoam ? (
              <MemoryFoam
                activeColor={state.activeColor}
                title={datoCmsXChair.title}
                dispatch={dispatch}
                foamBool={state.foam}
                price={memoryFoam.priceRangeV2.maxVariantPrice.amount}
              />
            ) : null}
            <Wheels
              wheels={wheels.variants}
              wheelsCB={state.wheelsCB}
              dispatch={dispatch}
            />
          </div>
        </div>
      </XchairRoot>
    </Layout>
  );
}

export const chairQuery = graphql`
  query chair(
    $slug: String!
    $headrest: String!
    $memoryFoam: String
    $width: String
  ) {
    datoCmsXChair(slug: { eq: $slug }) {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      shopifyInfo {
        variants {
          compareAtPrice
          price
          storefrontId
          title
          image {
            gatsbyImageData(layout: FIXED, width: 150)
          }
        }
        title
        description
        hasOnlyDefaultVariant
        images {
          gatsbyImageData(layout: FIXED, width: 50)
          altText
        }
        featuredImage {
          gatsbyImageData(width: 50, layout: FIXED)
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
        productType
        storefrontId
        totalVariants
      }
    }
    memoryFoam: shopifyProduct(storefrontId: { eq: $memoryFoam }) {
      description
      title
      storefrontId
      images {
        gatsbyImageData(layout: CONSTRAINED, width: 290)
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
    }
    width: shopifyProduct(storefrontId: { eq: $width }) {
      description
      title
      storefrontId
      images {
        gatsbyImageData(layout: CONSTRAINED, width: 290)
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
    }
    headrest: shopifyProduct(storefrontId: { eq: $headrest }) {
      description
      title
      storefrontId

      variants {
        storefrontId
        price
        title
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      images {
        gatsbyImageData(layout: CONSTRAINED, width: 290)
      }
    }
    wheels: shopifyProduct(title: { eq: "X-Chair Wheels" }) {
      title
      storefrontId
      description
      variants {
        storefrontId
        price
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, width: 350)
        }
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      images {
        gatsbyImageData(layout: CONSTRAINED, width: 150)
      }
    }
    hmt: shopifyProduct(title: { eq: "X-HMT" }) {
      title
      storefrontId
      description
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
    }
    elemax: shopifyProduct(title: { eq: "Elemax" }) {
      title
      storefrontId
      description
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
    }
  }
`;
