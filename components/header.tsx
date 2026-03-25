"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/#projects", label: "Projets" },
  { href: "/#skills", label: "Competences" },
  { href: "/#timeline", label: "Parcours" },
  { href: "/#contact", label: "Contact" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);

  const handleNavClick = () => {
    setMenuState(false);
  };

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="bg-background/50 backdrop-blur-xl fixed z-20 w-full border-b border-white/10"
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
                  YK
                </span>
                <span className="font-mono text-sm font-medium">
                  Youssef KHEMIRA
                </span>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="bg-background/90 backdrop-blur-xl in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:pr-4">
                <ul className="flex flex-col gap-6 text-base lg:flex-row lg:items-center lg:gap-8 lg:text-sm">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={handleNavClick}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:hidden">
                <Button asChild size="sm">
                  <Link href="/#contact" onClick={handleNavClick}>
                    <span>Me Contacter</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
