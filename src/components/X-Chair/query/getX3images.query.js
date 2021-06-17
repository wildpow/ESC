import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const {
    blackColorImg,
    greyColorImg,
    glacierColorImg,
    blueColorImg,
    greyHeadrest,
    greyDefault,
    blackDefault,
    blackHeadrest,
    blueDefault,
    blueHeadrest,
    glacierDefault,
    glacierHeadrest,
  } = useStaticQuery(
    graphql`
      query getX3images {
        blackColorImg: file(
          relativePath: {
            eq: "xChair/xThree/black/attribute_swatch_0000_x3black.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 150
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        greyColorImg: file(
          relativePath: {
            eq: "xChair/xThree/grey/attribute_swatch_0003_x3grey.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 150
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        glacierColorImg: file(
          relativePath: {
            eq: "xChair/xThree/glacier/x3_glacier_thumb_120_80.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 150
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        blueColorImg: file(
          relativePath: {
            eq: "xChair/xThree/blue/attribute_swatch_0001_x3blue.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 150
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }

        greyHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/grey/headrest" } }
        ) {
          nodes {
            base
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                formats: [AUTO, WEBP, AVIF]
                placeholder: TRACED_SVG
              )
            }
          }
        }
        greyDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/grey/default" } }
        ) {
          nodes {
            base
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                formats: [AUTO, WEBP, AVIF]
                placeholder: TRACED_SVG
              )
            }
          }
        }
        blackDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/black/default" } }
        ) {
          nodes {
            base
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                formats: [AUTO, WEBP, AVIF]
                placeholder: TRACED_SVG
              )
            }
          }
        }
        blackHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/black/headrest" } }
        ) {
          nodes {
            base
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                formats: [AUTO, WEBP, AVIF]
                placeholder: TRACED_SVG
              )
            }
          }
        }
        blueDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/blue/default" } }
        ) {
          nodes {
            base
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                formats: [AUTO, WEBP, AVIF]
                placeholder: TRACED_SVG
              )
            }
          }
        }
        blueHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/blue/headrest" } }
        ) {
          nodes {
            base
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                formats: [AUTO, WEBP, AVIF]
                placeholder: TRACED_SVG
              )
            }
          }
        }
        glacierDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/glacier/default" } }
        ) {
          nodes {
            base
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                formats: [AUTO, WEBP, AVIF]
                placeholder: TRACED_SVG
              )
            }
          }
        }
        glacierHeadrest: allFile(
          filter: {
            relativeDirectory: { eq: "xChair/xThree/glacier/headrest" }
          }
        ) {
          nodes {
            base
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                formats: [AUTO, WEBP, AVIF]
                placeholder: TRACED_SVG
              )
            }
          }
        }
      }
    `
  );
  return {
    colors: [
      { title: "Black A.T.R.", img: blackColorImg },
      { title: "Grey A.T.R.", img: greyColorImg },
      { title: "Blue A.T.R.", img: blueColorImg },
      { title: "Glacier A.T.R.", img: glacierColorImg },
    ],
    "Black A.T.R.": { default: blackDefault, headrest: blackHeadrest },
    "Grey A.T.R.": { default: greyDefault, headrest: greyHeadrest },
    "Blue A.T.R.": { default: blueDefault, headrest: blueHeadrest },
    "Glacier A.T.R.": { default: glacierDefault, headrest: glacierHeadrest },
  };
};
