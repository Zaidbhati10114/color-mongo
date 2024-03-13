"use client";
import { navLinks } from "@/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
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
                    active ? "bg-purple-gradient text-red-500" : "text-gray-700"
                  }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    <Image
                      src={link.icon}
                      alt="logo"
                      width={24}
                      height={24}
                      className={`${active && "brightness-200 border-red-500"}`}
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
            <li className="flex-center cursor-pointer gap-2 p-4">UserButto</li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
