"use client";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { PaginationDemo } from "./PaginationDemo";
import { motion } from "framer-motion";

interface CardData {
  _id: string;
  one: string;
  two: string;
  three: string;
  four: string;
}

interface CardIdPageProps {
  data: CardData[];
  page: number;
  limit: number;
}

const CardComp: React.FC<CardIdPageProps> = ({ data, page, limit }) => {
  const [loading, setLoading] = useState(true);

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  useEffect(() => {
    // Show loading state for 500 milliseconds
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {data?.map((card: any) => (
            <div className="pt-5" key={card._id}>
              <a href={copied ? `javascript:void(0)` : `/card/${card._id}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
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
                        <div
                          className="opacity-0 absolute cursor-pointer top-0 left-0 font-extrabold text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100"
                          onClick={() => copyToClipboard(card.one)}
                        >
                          {copied ? "Copied" : card.one}
                        </div>
                      </div>
                    )}
                    {loading ? (
                      <Skeleton className={`h-20`} />
                    ) : (
                      <div
                        style={{ backgroundColor: `#${card.two}` }}
                        className={`h-20 relative`}
                      >
                        <div
                          className="opacity-0 absolute cursor-pointer top-0 left-0 font-extrabold text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100"
                          onClick={() => copyToClipboard(card.two)}
                        >
                          {copied ? "Copied" : card.two}
                        </div>
                      </div>
                    )}
                    {loading ? (
                      <Skeleton className={`h-16`} />
                    ) : (
                      <div
                        style={{ backgroundColor: `#${card.three}` }}
                        className={`h-16 relative`}
                      >
                        <div
                          className="opacity-0 absolute cursor-pointer top-0 left-0 font-extrabold text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100"
                          onClick={() => copyToClipboard(card.three)}
                        >
                          {copied ? "Copied" : card.three}
                        </div>
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
                        <div
                          className="opacity-0 absolute cursor-pointer top-0 left-0 font-extrabold text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100"
                          onClick={() => copyToClipboard(card.four)}
                        >
                          {copied ? "Copied" : card.four}
                        </div>
                      </div>
                    )}
                  </Card>
                </motion.div>
              </a>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="p-10">
        <PaginationDemo page={page} limit={limit} />
      </div>
    </>
  );
};

export default CardComp;

// 8URf8IqLCgfCGNTI
