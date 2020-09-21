/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const Search = () => {
  const [query, setQuery] = useState(``);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query || !window.__LUNR__) {
      setResults([]);
      return;
    }
    const lunrIndex = window.__LUNR__.en;
    const searchResults = lunrIndex.index.search(query);
    setResults(
      searchResults.map(({ ref }) => {
        return lunrIndex.store[ref];
      }),
    );
  }, [query]);
  function urlCreater(type, vendor) {
    if (
      type === "Box Spring" ||
      type === "Pillow" ||
      type === "Protector" ||
      type === "Sheets"
    ) {
      return "/accessories";
    }
    if (type === "Adjustable Base") {
      return "/adjustable";
    }
    return "/brand";
  }
  return (
    <div>
      <input
        type="text"
        defaultValue={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
      {console.log(results)}
      <ul>
        {results.map(({ handle, title, productType, vendor }) => {
          return (
            <li
              key={handle}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h5>{productType}</h5>
              <h6>{vendor}</h6>
              <Link to={`${urlCreater(productType)}/${handle}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Search;
