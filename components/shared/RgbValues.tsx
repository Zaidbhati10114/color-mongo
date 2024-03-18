"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

function hexToRGB(hexString: string): number[] {
  // Remove non-hexadecimal characters and leading '0x' from the input string
  const cleanHex = hexString.replace(/[^0-9a-fA-F]/g, "").replace(/^0x/, "");

  // Check if the cleaned hexadecimal string has a valid length (3 or 6 digits)
  if (cleanHex.length !== 3 && cleanHex.length !== 6) {
    throw new Error("Invalid hexadecimal string length");
  }

  // Convert the cleaned hexadecimal string to RGB values
  if (cleanHex.length === 3) {
    // Expand shorthand hexadecimal notation (e.g., "0AF" to "00AAFF")
    const r = parseInt(cleanHex[0] + cleanHex[0], 16);
    const g = parseInt(cleanHex[1] + cleanHex[1], 16);
    const b = parseInt(cleanHex[2] + cleanHex[2], 16);
    return [r, g, b];
  } else {
    // Convert full hexadecimal notation (e.g., "00AAFF")
    const r = parseInt(cleanHex.slice(0, 2), 16);
    const g = parseInt(cleanHex.slice(2, 4), 16);
    const b = parseInt(cleanHex.slice(4, 6), 16);
    return [r, g, b];
  }
}
const hexone = "378CE7";
const hextwo = "4CCD99";
const hexthree = "FFC700";
const hexfour = "FFF455";

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

const RgbValues: React.FC<CardIdPageProps> = ({ card }) => {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const [r1, g1, b1] = hexToRGB(card.one);
  const [r2, g2, b2] = hexToRGB(card.two);
  const [r3, g3, b3] = hexToRGB(card.three);
  const [r4, g4, b4] = hexToRGB(card.four);

  const rgb_one = `rgb(${r1}, ${g1}, ${b1})`;
  const rgb_two = `rgb(${r2}, ${g2}, ${b2})`;
  const rgb_three = `rgb(${r3}, ${g3}, ${b3})`;
  const rgb_four = `rgb(${r4}, ${g4}, ${b4})`;

  return (
    <>
      <div className="flex justify-between items-start gap-4 py-8">
        <div className="flex flex-col items-center">
          <div
            className={`w-6 h-6 rounded-full`}
            style={{ backgroundColor: `#${card.one}` }}
          />
          <div className="p-2">
            <Button
              onClick={() => copyToClipboard(rgb_one)}
              variant="outline"
              size="sm"
              className="w-15"
            >
              <span className="text-sm text-gray-600 mt-1">{rgb_one}</span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-6 h-6 rounded-full`}
            style={{ backgroundColor: `#${card.two}` }}
          />
          <div className="p-2">
            <Button
              onClick={() => copyToClipboard(rgb_two)}
              variant="outline"
              size="sm"
              className="w-15"
            >
              <span className="text-sm text-gray-600 mt-1">{rgb_two}</span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-6 h-6 rounded-full`}
            style={{ backgroundColor: `#${card.three}` }}
          />
          <div className="p-2">
            <Button
              onClick={() => copyToClipboard(rgb_three)}
              variant="outline"
              size="sm"
              className="w-15"
            >
              <span className="text-sm text-gray-600 mt-1">{rgb_three}</span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-6 h-6 rounded-full`}
            style={{ backgroundColor: `#${card.four}` }}
          />
          <div className="p-2">
            <Button
              onClick={() => copyToClipboard(rgb_four)}
              variant="outline"
              size="sm"
              className="w-15"
            >
              <span className="text-sm text-gray-600 mt-1">{rgb_four}</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RgbValues;
