"use client";

import * as React from "react";
import Link from "next/link";
import { BarChart2, Menu, Sun, Moon } from "lucide-react";
import Button from "@/components/Button";
import { useTheme } from "@/components/ThemeProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <BarChart2 className="h-6 w-6" />
        <span className="sr-only">Project Management App</span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
          Testimonials
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
          Pricing
        </Link>
      </nav>
      <Button className="ml-auto md:hidden" variant="outline" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu className="h-4 w-4" />
      </Button>
      <Button className="ml-2" variant="outline" size="sm" onClick={toggleTheme}>
        {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </Button>
      {isMenuOpen && (
        <nav className="flex flex-col items-center gap-4 p-4 bg-background border-b md:hidden">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
