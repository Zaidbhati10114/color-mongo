"use client";
import { Card } from "@/components/ui/card";
import SingleCard from "./SingleCard";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const CardComp = () => {
  const { data, isLoading, isSuccess, isError } = useQuery<any>({
    queryKey: ["todos"],
    queryFn: () => fetch("/api/card").then((res) => res.json()),
  });
  const one = "378CE7";
  const two = "4CCD99";
  const three = "FFC700";
  const four = "FFF455";
  console.log(data);
  return (
    <div className="grid grid-cols-1 gap-6  sm:grid-cols-2 xl:grid-cols-3">
      {data?.map((card: any) => (
        <Card
          key={card.id}
          className="w-[250px] h-[220px] mb-10 rounded border-stone-200"
        >
          <div
            style={{ backgroundColor: `#${card.one}` }}
            className={`h-24 relative`}
          >
            <div className="opacity-0 absolute top-0 left-0 text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100">
              {card.one}
            </div>
          </div>
          <div
            style={{ backgroundColor: `#${card.two}` }}
            className={`h-20 relative`}
          >
            <div className="opacity-0 absolute top-0 left-0 text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100">
              {card.two}
            </div>
          </div>
          <div
            style={{ backgroundColor: `#${card.three}` }}
            className={`h-16 relative`}
          >
            <div className="opacity-0 absolute top-0 left-0 text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100">
              {card.three}
            </div>
          </div>
          <div
            style={{ backgroundColor: `#${card.four}` }}
            className={`h-12 relative`}
          >
            <div className="opacity-0 absolute top-0 left-0 text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100">
              {card.four}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
export default CardComp;

{
  /* <div>
      {data?.map((item:any) => (
        <div key={item._id}>
          <h1>one: {item.one}</h1>
          <h1>two: {item.two}</h1>
          <h1>three: {item.three}</h1>
          <h1>four: {item.four}</h1>
        </div>
      ))}
    </div> */
}

// <Card className="w-[250px] h-[220px] rounded border-stone-200">
//   <SingleCard height={24} color="007F73" loading={true} />
//   <SingleCard height={20} color={two} loading={true} />
//   <SingleCard height={16} color={three} loading={true} />
//   <SingleCard height={12} color={four} loading={true} />

// </Card>

// 8URf8IqLCgfCGNTI
