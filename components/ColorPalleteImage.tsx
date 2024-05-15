"use client";
import React, { useRef, useEffect, useState } from "react";
import { Hint } from "./Hint";
import { Button } from "./ui/button";
import axios from "axios";
import { Download, Expand, Heart, ReceiptCentIcon } from "lucide-react";
import toast from "react-hot-toast";

interface Color {
  hex: string;
  rgb: string;
}

interface ColorPaletteImageProps {
  colors: Color[];
  likeCount?: number;
  id: string;
}

interface CardData {
  _id: string;
  one: string;
  two: string;
  three: string;
  four: string;
  pallete_type: string;
  likeCount: number;
}

const ColorPaletteImage: React.FC<ColorPaletteImageProps> = ({
  colors,
  likeCount,
  id,
}) => {
  const [likeCounts, setlikeCounts] = useState<number>(likeCount!);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      const response = await axios.put(`/api/cards/${id}/like`);
      setlikeCounts((prevCount) => prevCount + 1);
      toast.success("Liked");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-1">
      <canvas
        ref={canvasRef}
        width="300"
        height="400"
        className="mb-4 rounded-md"
      />
      <div className="flex flex-row gap-2 justify-center">
        <Hint
          label="Copy Whole Pallete"
          side="left"
          align="start"
          sideOffset={18}
        >
          <Button
            size="lg"
            variant="outline"
            className="font-semibold py-1 px-2 rounded mx-1"
          >
            <ReceiptCentIcon className="w-4 h-4" />
          </Button>
        </Hint>
        <Hint label="View More" side="bottom" align="start" sideOffset={18}>
          <Button
            size="lg"
            variant="outline"
            className=" font-semibold py-1 px-2 rounded mx-1"
          >
            <Expand className="w-4 h-4" />
          </Button>
        </Hint>

        <Hint label="Download" side="bottom" align="start" sideOffset={18}>
          <Button
            onClick={downloadImage}
            size="lg"
            variant="outline"
            className=" font-semibold py-1 px-2 rounded mx-1"
          >
            <Download className="w-4 h-4" />
          </Button>
        </Hint>
        <Hint label="Like" side="bottom" align="start" sideOffset={18}>
          <Button
            onClick={handleLike}
            size="lg"
            variant="outline"
            className="font-semibold py-1 px-2 rounded mx-1 cursor-pointer p-2"
          >
            <Heart className="w-4 h-4 mr-0.5 fill-pink-500" />
            <span className="">{likeCount}</span>
          </Button>
        </Hint>
      </div>
    </div>
  );
};

export default ColorPaletteImage;
