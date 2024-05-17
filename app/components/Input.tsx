"use client";

import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Calculator,
  Calendar,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { space } from "postcss/lib/list";
import { useRouter } from "next/navigation";
import Link from "next/link";

let colors = {
  palette: [
    {
      name: "Red",
      hex: "#FF0000",
    },
    {
      name: "Green",
      hex: "#00FF00",
    },
    {
      name: "Blue",
      hex: "#0000FF",
    },
    {
      name: "Yellow",
      hex: "#FFFF00",
    },
    {
      name: "Orange",
      hex: "#FFA500",
    },
    {
      name: "Purple",
      hex: "#800080",
    },
    {
      name: "Pink",
      hex: "#FFC0CB",
    },
    {
      name: "Brown",
      hex: "#A52A2A",
    },
    {
      name: "Gray",
      hex: "#808080",
    },
    {
      name: "Black",
      hex: "#000000",
    },
    {
      name: "White",
      hex: "#FFFFFF",
    },
  ],
};

let color_collections = [
  "Pastel",
  "Vintage",
  "Retro",
  "Bohemian",
  "Nautical",
  "Art Deco",
  "Muted Tones",
  "Tropical",
  "Country Chic",
  "Gothic",
  "Urban Jungle",
  "Candy Pop",
  "Earthy",
  "Minimalist",
  "Monochrome",
];

const InputComponent: React.FC = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const onSelect = (name: string) => {
    router.push(`/search/${name}`);
    setOpen(false);
  };

  return (
    <>
      <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm mr-10">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          onClick={() => setOpen(true)}
          type="text"
          className="block cursor-pointer w-full pl-10 pr-12 py-1 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none sm:text-sm"
          placeholder="Search Colors..."
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          ⌘J
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search Pallets, Colors, Collections...." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Colors">
            {colors.palette.map((color, index) => (
              <CommandItem
                key={index}
                className="text-lg font-bold text-[#151515] cursor-pointer"
                onSelect={() => onSelect(color.name)}
                title={color.name}
                value={color.name}
              >
                <div
                  key={index}
                  className="w-6 h-6 rounded-full flex items-center justify-center mx-2"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <span className="font-bold cursor-pointer">{color.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup className="" heading="Color Collections">
            {color_collections.map((color, index) => (
              <CommandItem
                className="text-md font-semibold text-[#151515] cursor-pointer"
                key={index}
                onSelect={() => onSelect(color)}
                title={color}
                value={color}
              >
                <span className="font-bold cursor-pointer">{color}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default InputComponent;
