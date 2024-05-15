"use client";

import React, { useEffect, useState } from "react";
import { CardTest } from "./CardFull";
import EmptyCard from "./EmptyCard";
import Loading from "./Loading";

interface SearchResultsProps {
  params: string;
}

interface Card {
  _id: string;
  one: string;
  two: string;
  three: string;
  four: string;
  pallete_type: string;
  likeCount?: number;
}

const SearchResults = ({ params }: SearchResultsProps) => {
  const [results, setResults] = useState<Card[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (params) {
          const response = await fetch(`/api/search?color_pallete=${params}`);
          const data = await response.json();

          if (response.ok) {
            setResults(data);
            setIsLoading(false);
            setError(null);
          } else {
            setError(data.error);
          }
        } else {
          setError("Please provide a color_pallete search parameter");
        }
      } catch (error) {
        console.error("Error fetching data:", error);

        setError("Error fetching data");
      }
    };

    fetchData();
  }, [params]);

  function lowercaseFirstLetter(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  const lower = lowercaseFirstLetter(params);

  return (
    <>
      <div className="p-10">
        <h1 className="text-center text-2xl">Search Results:{params}</h1>
        {isLoading && <Loading />}
        <div className="flex mr-20 justify-center flex-wrap pt-6">
          <div className="grid grid-cols-1 gap-4 sm:ml-20 md:ml-30 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:justify-center md:gap-8">
            {results.length > 0
              ? results.map((card) => (
                  <CardTest
                    key={card._id}
                    id={card._id}
                    one={card.one}
                    two={card.two}
                    three={card.three}
                    four={card.four}
                  />
                ))
              : null}
          </div>
        </div>

        {results.length === 0 && !isLoading && (
          <div className="flex justify-center items-center w-full">
            <EmptyCard />
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResults;
