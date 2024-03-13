"use client";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

interface SingleCardProps {
  height: number;
  color: string;
  loading?: boolean;
}

const SingleCard: React.FC<SingleCardProps> = ({
  height,
  color,
  loading = false,
}) => {
  const [renderSkeleton, setRenderSkeleton] = useState(loading);

  useEffect(() => {
    if (loading) {
      // Show skeleton for 500 milliseconds
      const timeoutId = setTimeout(() => {
        setRenderSkeleton(false);
      }, 500);

      // Cleanup the timeout when the component unmounts or loading becomes false
      return () => clearTimeout(timeoutId);
    }
  }, [loading]);

  const cardMotionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      {renderSkeleton ? (
        <Skeleton className={`h-${height}`} />
      ) : (
        <motion.div
          style={{ backgroundColor: `#${color}` }}
          className={`h-${height} relative`}
          initial="initial"
          animate="animate"
          variants={cardMotionVariants}
        >
          <div
            style={{ backgroundColor: `#${color}` }}
            className={`h-${height} relative`}
          >
            <div className="opacity-0 absolute top-0 left-0 text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100">
              {color}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SingleCard;
