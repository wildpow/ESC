import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import FuzzyHighlighter, { Highlighter } from "react-fuzzy-highlighter";

const Search = () => {
  const index = [];
  const [query, setQuery] = useState("");
  const data = useStaticQuery(graphql`
    query MattressQuery {
      allDatoCmsMattress {
        nodes {
          name
          slug
          brand {
            urlName
            displayName
          }
          subline {
            name
          }
        }
      }
    }
  `);
  data.allDatoCmsMattress.nodes.map(mattress => {
    return index.push({
      name: `${mattress.brand.displayName} ${mattress.subline.name} ${mattress.name}`,
      url: `/brands/${mattress.brand.urlName}/${mattress.slug}`,
    });
  });

  return (
    <div>
      <h1>Search</h1>
      <input
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <FuzzyHighlighter
        query={query}
        data={index}
        options={{
          shouldSort: true,
          includeMatches: true,
          threshold: 0.2,
          location: 0,
          distance: 200,
          maxPatternLength: 12,
          minMatchCharLength: 3,
          keys: ["name"],
        }}
      >
        {({ formattedResults }) => {
          return (
            <ul>
              {formattedResults.map((formattedResult, resultIndex) => {
                if (formattedResult.formatted.name === undefined) {
                  console.log("poop");
                  return null;
                }

                return (
                  <li
                    key={resultIndex}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "1rem",
                    }}
                  >
                    {console.log(index)}
                    <div>
                      <Highlighter text={formattedResult.formatted.name} />
                    </div>
                    {/* <div>
                      <Highlighter
                        text={formattedResult.formatted.author.firstName}
                      />
                      <Highlighter
                        text={formattedResult.formatted.author.lastName}
                      />
                    </div> */}
                  </li>
                );
              })}
            </ul>
          );
        }}
      </FuzzyHighlighter>
    </div>
  );
};

export default Search;
