"use client";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/untils/cn"; 

export const Navbar = () => {
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="flex items-center justify-center p-4">
      <div className="flex bg-black text-white p-2 rounded-full border border-gray-800 relative">
        {navItems.map((item, index) => (
          <Link 
            key={index}
            href={item.link}
            onClick={() => setActive(item.name)}
            className={cn(
              "relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full",
              active === item.name
                ? "bg-white text-black shadow-md"
                : "hover:bg-gray-900 hover:text-white"
            )}
          >
            {item.name}
            {active === item.name && (
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-40"></span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};
