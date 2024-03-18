"use client";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import CopyToClipboardButton from "./CopyToClipboard";

const PopularComp = () => {
  const [loading, setLoading] = useState(true);
  const { data, isLoading, isSuccess, isError } = useQuery<any>({
    queryKey: ["popular"],
    queryFn: () => fetch("/api/card/popular").then((res) => res.json()),
  });

  useEffect(() => {
    // Show loading state for 500 milliseconds
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {data?.map((card: any) => (
          <div className="pt-5" key={card.id}>
            <Card
              key={card.id}
              className="w-[250px] h-[220px] mb-10  rounded border-stone-200"
            >
              {loading ? (
                <Skeleton className={`h-24`} />
              ) : (
                <div
                  style={{ backgroundColor: `#${card.one}` }}
                  className={`h-24 relative`}
                >
                  <CopyToClipboardButton text={card.one} />
                </div>
              )}
              {loading ? (
                <Skeleton className={`h-20`} />
              ) : (
                <div
                  style={{ backgroundColor: `#${card.two}` }}
                  className={`h-20 relative`}
                >
                  <CopyToClipboardButton text={card.two} />
                </div>
              )}
              {loading ? (
                <Skeleton className={`h-16`} />
              ) : (
                <div
                  style={{ backgroundColor: `#${card.three}` }}
                  className={`h-16 relative`}
                >
                  <CopyToClipboardButton text={card.three} />
                </div>
              )}
              {loading ? (
                <Skeleton className={`h-12`} />
              ) : (
                <div
                  style={{
                    backgroundColor: `#${card.four}`,
                    marginBottom: "12px",
                  }}
                  className={`h-12 mb-10 relative`}
                >
                  <CopyToClipboardButton text={card.four} />
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularComp;
