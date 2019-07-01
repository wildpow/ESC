import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Headline, Wrapper, P } from "../styles/homeStyles";

const Front = () => (
  <Wrapper>
    <StaticQuery
      query={graphql`
        query front {
          datoCmsFrontPage {
            frontPageTitle
            frontPageTextBlock
          }
        }
      `}
      render={data => (
        <>
          <Headline>{data.datoCmsFrontPage.frontPageTitle}</Headline>
          <P>{data.datoCmsFrontPage.frontPageTextBlock}</P>
        </>
      )}
    />
    <Headline red>“Sleep Like the Experts Do!”</Headline>
  </Wrapper>
);

export default Front;
