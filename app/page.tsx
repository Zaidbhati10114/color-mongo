"use client";
import { useState, useEffect } from "react";
import { CardTest } from "@/components/CardFull";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import NoCardFound from "@/components/NoCardFound";

interface Card {
  _id: string;
  one: string;
  two: string;
  three: string;
  four: string;
  likeCount?: number;
}

export default function Home() {
  const [cards, setCards] = useState<Card[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async (page: number = 1) => {
    setIsLoading(true);
    try {
      // Simulate a delay of 500ms
      await new Promise((resolve) => setTimeout(resolve, 200));
      const res = await fetch(`/api/cards?page=${page}`);
      const newCards = await res.json();
      setCards((prevCards) => [...prevCards, ...newCards]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(newCards.length > 0);
    } catch (error) {
      setError(true);
      console.error("Error fetching cards:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight && !isLoading && hasMore) {
        fetchCards(page);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasMore, page]);

  return (
    <>
      <div className="flex mr-20 justify-center flex-wrap pt-2 pr-2">
        {error && <NoCardFound />}
        <div className="grid grid-cols-1 gap-4 pl-20  md:ml-30 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 sm:justify-center md:gap-8">
          {cards.map((card) => (
            <CardTest
              id={card._id}
              key={card._id}
              one={card.one}
              two={card.two}
              three={card.three}
              four={card.four}
              likeCount={card.likeCount}
            />
          ))}
        </div>
      </div>
      {isLoading && (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-900"></div>
        </div>
      )}

      {!hasMore && (
        <>
          <div className="text-center">
            <Button variant="destructive">End</Button>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
