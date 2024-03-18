"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Copy, Download } from "lucide-react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

interface CardData {
  _id: string;
  one: string;
  two: string;
  three: string;
  four: string;
}

interface CardIdPageProps {
  card: CardData;
}

const CardIdPage: React.FC<CardIdPageProps> = ({ card }) => {
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
    }, 300);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  const wholePallete = [card.one, card.two, card.three, card.four];

  const copyArrayToClipboard = () => {
    const arrayString = wholePallete.join(" ,"); // Convert array to string separated by newline
    navigator.clipboard
      .writeText(arrayString)
      .then(() => {
        toast.success("Copied");
      })
      .catch((error) => {
        toast.error("Failed to copy the pallete");
        console.log(error);
      });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Card
              key={card._id}
              className="w-[450px] h-[400px] mb-5 border-stone-200"
            >
              {loading ? (
                <Skeleton className={`h-40`} />
              ) : (
                <div
                  style={{ backgroundColor: `#${card.one}` }}
                  className={`h-40 relative`}
                >
                  <div
                    className="opacity-0 absolute cursor-pointer top-0 left-0 font-extrabold text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100"
                    onClick={() => copyToClipboard(card.one)}
                  >
                    {copied ? "Copied" : `#${card.one}`}
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
                <Skeleton className={`h-20`} />
              ) : (
                <div
                  style={{ backgroundColor: `#${card.three}` }}
                  className={`h-20 relative`}
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
                <Skeleton className={`h-20`} />
              ) : (
                <div
                  style={{
                    backgroundColor: `#${card.four}`,
                    marginBottom: "12px",
                  }}
                  className={`h-20 mb-10 relative`}
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
        </div>
        <div className="flex justify-center mt-4">
          <Button variant="outline" className="ml-4">
            <Download className="mr-1 w-3 h-3" />
            <p className="text-xs">Download Image</p>
          </Button>
          <Button
            onClick={copyArrayToClipboard}
            variant="outline"
            className="ml-4"
          >
            <Copy className="mr-1 w-3 h-3" />
            <p className="text-xs">Copy Pallete</p>
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default CardIdPage;
