import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import { Wrapper, MainWrapper } from "../styles/mattListStyles";
import { P, Headline } from "../styles/homeStyles";
import MattressThumb from "./mattThumbNail/mattThumb";

const NewWrapper = styled(MainWrapper)`
  background-color: ${props => props.theme.newColor1};
  margin-top: 15px;
  @media (min-width: 1024px) {
    box-shadow: ${props => props.theme.newBoxShadow};
  }
`;

const ThreeMattWrapper = styled(Wrapper)`
  margin-bottom: 10px;
  @media (min-width: 375px) {
    margin-top: 5px;
    margin-bottom: 10px;
  }
  @media (min-width: 411px) {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  @media (min-width: 568px) {
    margin-bottom: 5px;
  }
  @media (min-width: 731px) {
    margin-bottom: 5px;
    margin-top: 5px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 0px;
  }
  @media (min-width: 1300px) {
    margin-top: 10px;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: white;
  :hover {
    text-decoration: underline;
  }
`;

const TopThreeMatts = () => {
  return (
    <StaticQuery
      query={graphql`
        query top3Matts {
          gcms {
            allFront3Mattresses {
              id
              footerURL
              footertagline
              headerTagLine
              mattresses {
                uri
                uriBrandName
                id
                brandName
                priceRange
                subName
                subBrand
                saleBanner
                coverImg {
                  handle
                }
              }
            }
          }
        }
      `}
      render={data => (
        <NewWrapper>
          <Headline>{data.gcms.allFront3Mattresses[0].headerTagLine}</Headline>
          <ThreeMattWrapper>
            {data.gcms.allFront3Mattresses[0].mattresses.map(mattress => (
              <MattressThumb
                key={mattress.id}
                mattress={mattress}
                url={`/brands/${mattress.uriBrandName}/${mattress.uri}`}
              />
            ))}
          </ThreeMattWrapper>
          <P>
            We believe that no mattress is a one-size-fits-all solution, which
            is why we have over 50 mattresses to choose from at our Everett
            location. If you’d like to browse our current sale mattresses you
            can click below, or visit our showroom on Everett Mall Way. With a
            combined 25 years of experience helping people find the right
            mattress for their sleep needs we’re here to help you start sleeping
            better.
          </P>
          <Headline red>
            <FooterLink to={data.gcms.allFront3Mattresses[0].footerURL}>
              {data.gcms.allFront3Mattresses[0].footertagline}
            </FooterLink>
          </Headline>
        </NewWrapper>
      )}
    />
  );
};

export default TopThreeMatts;