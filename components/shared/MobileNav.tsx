"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/icons/palette.svg"
          width={20}
          height={20}
          alt="logo"
        />
        <h1 className="text-xl orange_gradient">ColorPalletes</h1>
      </Link>
      <nav className="flex gap-2">
        <Sheet>
          <SheetTrigger>
            <Image
              src="/assets/icons/menu-square.svg"
              alt="menu"
              height={32}
              width={32}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64">
            <>
              <Image
                src="/assets/icons/palette.svg"
                width={20}
                height={20}
                alt="logo"
              />
              <h1 className="text-xl orange_gradient">ColorPalletes</h1>
              <ul className="header-nav_elements">
                {navLinks.map((link) => {
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
                      <Link
                        className="sidebar-link cursor-pointer"
                        href={link.route}
                      >
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          className={`${active && "brightness-200"}`}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="grid ml-10 gap-4 grid-flow-col justify-stretch">
                <Link
                  href="https://github.com/Zaidbhati10114"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-7 h-7" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/zaid-bhati-427a79192/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-7 h-7" />
                </Link>
                <Link href="/" target="_blank">
                  <Instagram className="w-7 h-7" />
                </Link>
              </div>
              <span className="flex-center text-base ml-3 copyright  gap-2">
                Developed By Zaid Bhati © 2023
              </span>
            </>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default MobileNav;

{
  /* <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet> */
}
