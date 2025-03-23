"use client";
import { useAppContext } from "@/app/context/SearchContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const {showSidebar} = useAppContext()

  const navLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Settings", href: "/settings" },
    { name: "Profile", href: "/profile" },
  ];

  
  if (!showSidebar) return null;

  return (
    <div className="w-64 px-4 py-6 shadow-md h-screen   rounded-md bg-[var(--card-bg-color)] text-[var(--text-color)]">
      <div>
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-2 rounded transition-all font-semibold ${
                  pathname === link.href ? "bg-orange-500 text-white" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

