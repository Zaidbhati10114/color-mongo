import SearchResults from "@/components/SearchResults";
import React from "react";

interface SearchPageProps {
  params: {
    searchWord: string;
  };
}

const Searchpage = ({ params }: SearchPageProps) => {
  return (
    <div>
      <SearchResults params={params.searchWord} />
    </div>
  );
};

export default Searchpage;
