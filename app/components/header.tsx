"use client";

import React from "react";

import { Recursive } from "next/font/google";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

//import { Search } from 'lucide-react';

import { Button } from "@/components/ui/button";
import InputComponent from "./Input";
import Image from "next/image";
//import { Button } from './ui/button';

//import { Input } from './ui/input';

const inter = Recursive({ subsets: ["latin"] });

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <Image src="/logo.svg" width={30} height={30} alt="logo_mobile" />
            <span className="font-bold md:text-xl flex ml-2">
              Color Pallets
            </span>
          </Link>
        </div>

        <div className="">
          <InputComponent />
        </div>

        <div className="hidden md:block">
          <div className="flex items-center justify-center text-center">
            <Button asChild className={inter.className} variant="secondary">
              <Link
                target="_blank"
                href="https://github.com/Zaidbhati10114/color-mongo"
              >
                Star on Github
                <Heart className="fill-primary h-5 w-5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
