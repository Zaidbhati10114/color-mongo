"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { CopyIcon, Download, Heart } from "lucide-react";
import toast from "react-hot-toast";
import { useLikeMutation } from "@/hooks/useLikeMutation";
import { useLikeCount } from "@/hooks/useLikeCount";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Color {
  hex: string;
  rgb: string;
}

interface ColorPaletteImageProps {
  colors: Color[];
  likeCount: number; // initial like count
  cardId: string;
}

const ColorPalleteModal: React.FC<ColorPaletteImageProps> = ({
  colors,
  likeCount: initialLikeCount,
  cardId,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [likes, setLikes] = useState(false);
  const likeButton = useLikeMutation(cardId);
  const { data, error, isLoading } = useLikeCount(cardId);
  const likeCountss = data?.likeCount || 0;

  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch like count");
    }
  }, [error]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const width = canvas.width;
        const height = canvas.height;
        const blockHeight = height / colors.length;

        colors.forEach((color, index) => {
          ctx.fillStyle = color.hex;
          ctx.fillRect(0, index * blockHeight, width, blockHeight);
        });
      }
    }
  }, [colors]);

  const combineHexCodes = (...hexes: string[]): string[] => {
    const isValidHex = (hex: string) => /^#?[0-9a-fA-F]{6}$/.test(hex);

    hexes.forEach((hex) => {
      if (!isValidHex(hex)) {
        throw new Error("Invalid hex code");
      }
    });

    const combinedHex = hexes
      .map((hex) => (hex.startsWith("#") ? hex.slice(1) : hex))
      .join("");

    const hexArray: string[] = [];
    for (let i = 0; i < combinedHex.length; i += 6) {
      hexArray.push(`#${combinedHex.slice(i, i + 6)}`);
    }

    return hexArray;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("Palette copied to clipboard");
      },
      (err) => {
        toast.error("Failed to copy palette");
      }
    );
  };

  const handleCopyPalette = () => {
    try {
      const combinedHexCodes = combineHexCodes(
        ...colors.map((color) => color.hex)
      );
      copyToClipboard(combinedHexCodes.join(", "));
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement("a");
      link.download = "color-palette.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  const handleLike = async () => {
    try {
      setLikes(true);
      await likeButton.mutateAsync();
      setTimeout(() => {
        setLikes(false);
      }, 200);
    } catch (error) {
      toast.error("An error occurred while liking the palette");
    }
  };

  return (
    <div className="flex flex-col">
      <canvas
        ref={canvasRef}
        className="mb-4 rounded-md 
                   w-60 h-48 
                   sm:w-72 sm:h-96
                   md:w-80 md:h-[450px]
                   lg:w-96 lg:h-[550px]"
      />
      <div className="flex gap-1 mt-4 flex-wrap">
        <Button
          onClick={handleCopyPalette}
          size="sm"
          variant="secondary"
          className=""
        >
          <CopyIcon className="mr-2 h-4 w-4" /> Copy Palette
        </Button>
        <motion.div whileTap={{ scale: 1.2 }}>
          <Button onClick={handleLike} variant="secondary" className="">
            {likes ? (
              <AiFillHeart className="mr-2 h-4 w-4 text-red-500" />
            ) : (
              <AiOutlineHeart className="mr-2 h-4 w-4 text-gray-500" />
            )}
            {isLoading ? "..." : likeCountss}
          </Button>
        </motion.div>
        <Button onClick={downloadImage} variant="secondary" className="">
          <Download className="mr-2 h-4 w-4" /> Image
        </Button>
      </div>
    </div>
  );
};

export default ColorPalleteModal;
