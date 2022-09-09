import { NextPage } from "next";
import React from "react";

interface SearchResultProps {
  data: any;
}

const SearchResults: NextPage<SearchResultProps> = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default SearchResults;
