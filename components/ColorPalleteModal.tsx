"use client";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { CopyIcon, Download, Heart } from "lucide-react";
import toast from "react-hot-toast";
import { HexRgbTabs } from "./HexRgbTabs";

interface Color {
  hex: string;
  rgb: string;
}

interface ColorPaletteImageProps {
  colors: Color[];
}

const ColorPalleteModal: React.FC<ColorPaletteImageProps> = ({ colors }) => {
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

  function combineHexCodes(
    hex1: string,
    hex2: string,
    hex3: string,
    hex4: string
  ): string[] {
    // Remove the leading "#" from the hex values if present
    const cleanHex1 = hex1.startsWith("#") ? hex1.slice(1) : hex1;
    const cleanHex2 = hex2.startsWith("#") ? hex2.slice(1) : hex2;
    const cleanHex3 = hex3.startsWith("#") ? hex3.slice(1) : hex3;
    const cleanHex4 = hex4.startsWith("#") ? hex4.slice(1) : hex4;

    // Check if the input hex values are valid
    const isValidHex = (hex: string) => /^[0-9a-fA-F]{6}$/.test(hex);
    if (
      !isValidHex(cleanHex1) ||
      !isValidHex(cleanHex2) ||
      !isValidHex(cleanHex3) ||
      !isValidHex(cleanHex4)
    ) {
      throw new Error("Invalid hex code");
    }

    // Combine the hex codes into a single string
    const combinedHex = `${cleanHex1}${cleanHex2}${cleanHex3}${cleanHex4}`;

    // Split the combined hex string into an array of 6-character chunks
    const hexArray = [];
    for (let i = 0; i < combinedHex.length; i += 6) {
      hexArray.push(`#${combinedHex.slice(i, i + 6)}`);
    }
    toast.success("Palette copied to clipboard");

    return hexArray;
  }

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement("a");
      link.download = "color-palette.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <div className="flex flex-col">
      <canvas
        ref={canvasRef}
        width="300"
        height="400"
        className="mb-4 rounded-md"
      />
      <div className="flex gap-1 mt-4 flex-wrap">
        <Button
          onClick={() =>
            combineHexCodes(
              colors[0].hex,
              colors[1].hex,
              colors[2].hex,
              colors[3].hex
            )
          }
          size="sm"
          variant="secondary"
          className="w-full md:w-auto"
        >
          <CopyIcon className="mr-2 h-4 w-4" /> Copy Pallete
        </Button>
        <Button variant="secondary" className="w-full md:w-auto">
          <Heart className="mr-2 h-4 w-4" /> 10
        </Button>
        <Button
          onClick={downloadImage}
          variant="secondary"
          className="w-full md:w-auto"
        >
          <Download className="mr-2 h-4 w-4" /> Image
        </Button>
      </div>
    </div>
  );
};

export default ColorPalleteModal;
