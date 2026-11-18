"use client";

import Image from "next/image";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const nvas = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Services", href: "/service" },
  { id: 4, title: "Packages", href: "/package" },
  { id: 5, title: "Support", href: "/support" },
  { id: 6, title: "Blog", href: "/blog" },
  { id: 7, title: "Contact", href: "/contact" },
];

export default function Headers() {
  const [menu, setMenu] = useState<boolean>(false);

  function handleClick() {
    setMenu((prev) => !prev);
  }

  return (
    <header className="relative">
      {/* Header */}
      <div className="flex items-center justify-between p-8 sm:px-20">
        {/* Logo */}
        <motion.div
          initial={{ x: -100, opacity: 0, filter: "blur(5px)" }}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/logo.webp" alt="logo" height={120} width={120} />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-10 font-semibold text-[#59168B]">
          {nvas.map((header) => (
            <Link key={header.id} href={header.href}>
              {header.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <motion.button
          initial={{ x: 100, opacity: 0, filter: "blur(5px)" }}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          type="button"
          onClick={handleClick}
          className="sm:hidden text-[#59168B]"
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
        >
          {menu ? <X size={26} /> : <MenuIcon size={26} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menu && (
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 z-50 w-full bg-white shadow-lg sm:hidden"
          >
            <ul className="flex flex-col p-6 gap-5 font-semibold text-[#59168B]">
              {nvas.map((header) => (
                <li key={header.id}>
                  <Link
                    href={header.href}
                    onClick={() => setMenu(false)}
                    className="block"
                  >
                    {header.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
