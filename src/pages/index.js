import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql, Link } from "gatsby";
import { Carousel } from "react-responsive-carousel";
import "../styles/carousel.css";
import Layout from "../components/Layout";
import { Main } from "../styles/homeStyles";
import Front from "../components/Home/front";
import TopThreeMatts from "../components/Home/Top3Mattress";
import Search from "../components/Search";

const IndexPage = ({ data }) => {
  const { carousel } = data.datoCmsFrontPage;
  let sources = [];
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsFrontPage.seoMetaTags} />
      <Main>
        <Carousel
          infiniteLoop
          autoPlay
          showThumbs={false}
          interval={6000}
          centerMode
          centerSlidePercentage={100}
          showStatus={false}
          dynamicHeight
          style={{ minHeight: "140px", height: "auto" }}
        >
          {carousel.map((item, index) => {
            sources = [
              item.mobileImage.fluid,
              {
                ...item.image.fluid,
                media: `(min-width: 501px)`,
              },
            ];
            return (
              <Link key={item.id} to={`${item.url}`}>
                <Img
                  fluid={sources}
                  alt={item.image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  fadeIn={index !== 0}
                  imgStyle={{ minHeight: "140px", height: "auto" }}
                  style={{ minHeight: "140px", height: "auto" }}
                />
              </Link>
            );
          })}
        </Carousel>
        <Front />
        <Search />
        <TopThreeMatts />
      </Main>
    </Layout>
  );
};

export const carouselQuery = graphql`
  query carousels {
    datoCmsFrontPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      carousel {
        url
        id
        mobileImage {
          alt
          fluid(
            maxWidth: 500
            imgixParams: { auto: "compress", lossless: true }
          ) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
        image {
          fluid(
            maxWidth: 1440
            imgixParams: { auto: "compress", lossless: true }
          ) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
          alt
        }
      }
    }
  }
`;
IndexPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default IndexPage;
