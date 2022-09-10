import { NextPage } from "next";
import React from "react";
import PaginationButtons from "./PaginationButtons";
import ResultItem from "./ResultItem";

interface SearchResultProps {
  data: any;
}

const SearchResults: NextPage<SearchResultProps> = ({ data }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {data.searchInformation?.formattedTotalResults} results (
        {data.searchInformation?.formattedSearchTime} seconds)
      </p>
      <div className="max-w-[800px]">
        {/* @ts-ignore */}
        {data.items?.map((result) => (
          <ResultItem key={result.link} result={result} />
        ))}
      </div>

      <PaginationButtons />
    </div>
  );
};

export default SearchResults;
