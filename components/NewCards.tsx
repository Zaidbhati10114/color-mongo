"use client";
import React, { useEffect, useState } from "react";
import { CardTest } from "./CardFull";

interface Card {
  _id: string;
  one: string;
  two: string;
  three: string;
  four: string;
  type: string;
}

const params = true;

const NewCards = () => {
  const [results, setResults] = useState<Card[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (params) {
          const response = await fetch(`/api/new`);
          const data = await response.json();

          if (response.ok) {
            setResults(data);
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
  }, []);

  return (
    <>
      <h1 className="font-bold text-2xl ml-20 p-1">New Cards</h1>
      {error && <p>{error}</p>}
      <div className="flex mr-20 justify-center flex-wrap pt-6">
        <div className="grid grid-cols-1 gap-4 sm:ml-20 md:ml-30 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 sm:justify-center md:gap-8">
          {results.length > 0 ? (
            results.map((card) => (
              <>
                <CardTest
                  id={card._id}
                  one={card.one}
                  two={card.two}
                  three={card.three}
                  four={card.four}
                />
              </>
            ))
          ) : (
            <div className="flex justify-center items-center mt-10">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-900"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewCards;
