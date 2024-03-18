"use client";
import { navLinks } from "@/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import TodayYear from "./TodayYear";
import { Card } from "../ui/card";

const Sidebar = () => {
  const pathname = usePathname();

  const Status = () => {
    return (
      <Button className="ml-2" variant="ghost">
        <span className="mr-2 h-3 w-3 bg-blue-500 rounded-full"></span>
        <p className="text-blue-500">All systems normal</p>
      </Button>
    );
  };

  return (
    <>
      <aside className="sidebar">
        <div className="flex size-full flex-col gap-4">
          <Link href="/" className="sidebar-logo">
            <Image
              src="/assets/icons/palette.svg"
              width={20}
              height={20}
              alt="logo"
            />
            <h1 className="text-xl orange_gradient">ColorPalletes</h1>
          </Link>
          <nav className="sidebar-nav">
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const active = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      active
                        ? "bg-purple-gradient text-red-500"
                        : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${
                          active && "brightness-200 border-red-500"
                        }`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const active = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      active ? "bg-purple-gradient text-white" : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${active && "brightness-200 bg-red-500"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <div className="grid ml-3 gap-4 grid-flow-col">
                <Link
                  href="https://github.com/Zaidbhati10114"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="rounded-full"
                    variant="outline"
                    size="icon"
                  >
                    <Github className="w-7 h-7" />
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/zaid-bhati-427a79192/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="rounded-full"
                    variant="outline"
                    size="icon"
                  >
                    <Linkedin className="w-7 h-7" />
                  </Button>
                </Link>
                <Link href="/" target="_blank">
                  <Button
                    className="rounded-full"
                    variant="outline"
                    size="icon"
                  >
                    <Instagram className="w-7 h-7" />
                  </Button>
                </Link>
              </div>
              <span className="text-base ml-5 copyright">
                Developed By Zaid Bhati <br /> © <TodayYear />
              </span>
              <Status />
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

{
  /* <li className="flex-center cursor-pointer gap-2 p-4">
              Copyright
              <br /> Zaid Bhati
            </li> */
}
