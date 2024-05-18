"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { CardTest } from "./CardFull";

interface Card {
  _id: string;
  one: string;
  two: string;
  three: string;
  four: string;
  type: string;
}

const fetchCards = async () => {
  const response = await fetch(`/api/new`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const NewCards = () => {
  //const { data: results = [], error, isLoading } = useQuery<Card[], Error>(['cards'], fetchCards);
  const {
    data: results = [],
    error,
    isLoading,
  } = useQuery<Card[], Error>({
    queryKey: ["cards"],
    queryFn: fetchCards,
  });

  return (
    <>
      <h1 className="font-bold text-2xl ml-20 p-1">New Cards</h1>
      {error && <p>{error.message}</p>}
      <div className="flex mr-20 justify-center flex-wrap pt-6">
        <div className="grid grid-cols-1 gap-4 sm:ml-20 md:ml-30 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 sm:justify-center md:gap-8">
          {isLoading ? (
            <div className="flex justify-center items-center mt-10">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-900"></div>
            </div>
          ) : results.length > 0 ? (
            results.map((card) => (
              <CardTest
                key={card._id} // Added a key here for better list rendering
                id={card._id}
                one={card.one}
                two={card.two}
                three={card.three}
                four={card.four}
              />
            ))
          ) : (
            <div className="flex justify-center items-center mt-10">
              <div className="text-center p-4 border rounded shadow-md">
                <p className="text-lg">Empty Cards</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewCards;
