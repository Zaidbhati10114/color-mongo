import { motion } from "framer-motion";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Separator } from "./ui/separator";
import hexToRgb from "@/utils/hexToRgb";
import ColorPalleteModal from "./ColorPalleteModal";
import { HexRgbTabs } from "./HexRgbTabs";

interface CardProps {
  one: string;
  two: string;
  three: string;
  four: string;
  id: string;
  likeCount?: number;
}

interface Color {
  hex: string;
  rgb: string;
}

export const CardTest: React.FC<CardProps> = ({
  one,
  two,
  three,
  four,
  likeCount,
  id,
}) => {
  const [copiedColor, setCopiedColor] = useState(null);
  const [copied, setCopied] = useState(false);

  const rgb_one = hexToRgb(`#${one}`);
  const rgb_two = hexToRgb(`#${two}`);
  const rgb_three = hexToRgb(`#${three}`);
  const rgb_four = hexToRgb(`#${four}`);

  const colors: Color[] = [
    { hex: `#${one}`, rgb: rgb_one },
    { hex: `#${two}`, rgb: rgb_two },
    { hex: `#${three}`, rgb: rgb_three },
    { hex: `#${four}`, rgb: rgb_four },
  ];

  const handleCopy = (color: any) => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setCopiedColor(color);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <motion.div
            transition={{ duration: 0.2 }}
            animate={{ y: [50, 0], opacity: [0, 1] }} // Add loading animation
            initial={{ y: 50, opacity: 0 }}
            className="w-[230px] max-w-64 h-[250px]  mb-10 sm:justify-center cursor-pointer rounded border-stone-200"
          >
            <div className="w-[230px]  h-[200px] mb-10 sm:justify-center cursor-pointer rounded border-stone-200">
              <div
                style={{ backgroundColor: `#${one}` }}
                className="h-24 relative"
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(one);
                  }}
                  className="opacity-0 absolute cursor-pointer top-0 left-0 font-extrabold text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100"
                >
                  {copied ? "Copied" : one}
                </div>
              </div>

              <div
                style={{ backgroundColor: `#${two}` }}
                className="h-20 relative"
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(two);
                  }}
                  className="opacity-0 absolute cursor-pointer top-0 left-0 font-extrabold text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100"
                >
                  {copied ? "Copied" : two}
                </div>
              </div>

              <div
                style={{ backgroundColor: `#${three}` }}
                className="h-16 relative"
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(three);
                  }}
                  className="opacity-0 absolute cursor-pointer top-0 left-0 font-extrabold text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100"
                >
                  {copied ? "Copied" : three}
                </div>
              </div>
              {/* <Copy four={four} /> */}
              <div
                style={{ backgroundColor: `#${four}` }}
                className="h-12  relative"
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(four);
                  }}
                  className="opacity-0 absolute cursor-pointer top-0 left-0 font-extrabold text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100"
                >
                  {copied ? "Copied" : four}
                </div>
              </div>
            </div>
            <h1>LIke</h1>
          </motion.div>
        </DialogTrigger>
        <DialogContent className="max-w-full sm:max-w-[425px] md:max-w-[95vh] h-auto w-full max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Color Pallete</DialogTitle>
            <DialogDescription>May be the name</DialogDescription>
          </DialogHeader>
          <Separator />
          <div className="flex flex-col md:flex-row">
            <div className="mb-4 md:mb-0 md:mr-10 w-full md:w-auto">
              <ColorPalleteModal colors={colors} />
            </div>
            <Separator orientation="vertical" className="hidden md:block" />
            <div className="flex ml-0 ml-10 w-full md:w-auto mb-10">
              <HexRgbTabs colors={colors} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
