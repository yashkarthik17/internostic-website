"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "About", href: "/about" },
  { label: "Investors", href: "/investors" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-[#E8E8F0]/80"
          : "bg-white/95 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Internostic"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-muted-text hover:text-dark transition-colors duration-200 py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-burgundy after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100 after:origin-center after:rounded-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link href="https://blasttax.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-burgundy hover:bg-burgundy/90 text-white rounded-full px-5 h-9 text-sm font-medium shadow-sm shadow-burgundy/20 hover:shadow-md hover:shadow-burgundy/25 transition-all duration-200 cursor-pointer">
              Try Blast Tax &rarr;
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="cursor-pointer" />
              }
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <SheetHeader className="p-6 pb-0">
                <SheetTitle>
                  <Image
                    src="/logo.png"
                    alt="Internostic"
                    width={140}
                    height={35}
                    className="h-7 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium text-dark hover:bg-alt-bg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-custom-border">
                  <Link
                    href="https://blasttax.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    <Button className="w-full bg-burgundy hover:bg-burgundy/90 text-white rounded-full h-10 text-sm font-medium cursor-pointer">
                      Try Blast Tax &rarr;
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
