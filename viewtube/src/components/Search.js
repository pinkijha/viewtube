import React, { useEffect, useState } from "react";
import { SEARCH_RESULT_API } from "../utils/Constant";

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    getSearchResults();
  }, []);

  const getSearchResults = async () => {
    const data = await fetch(SEARCH_RESULT_API);
    const json = await data.json();
    console.log(json);
    setSearchResult(json);
  };

  return (
    <div>
      <p></p>
    </div>
  );
};

export default Search;
