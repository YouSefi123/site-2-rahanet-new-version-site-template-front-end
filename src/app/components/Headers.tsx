"use client";

import Image from "next/image";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const nvas = [
  { id: 1, title: "Home", href: "#" },
  { id: 2, title: "About", href: "#" },
  { id: 3, title: "Services", href: "#" },
  { id: 4, title: "Packages", href: "#" },
  { id: 5, title: "Support", href: "#" },
  { id: 6, title: "Blog", href: "#" },
  { id: 7, title: "Contact", href: "#" },
];
export default function Headers() {
  const [menu, setMenu] = useState<boolean>(false);

  function handleClick() {
    setMenu(!menu);
  }
  return (
    <div>
      <div className="flex items-center justify-between p-8 sm:px-20">
        <motion.div
          className=""
          initial={{ x: -100, opacity: 0, filter: "blur(5px)"}}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, type: "keyframes" }}
        >
          <Image src={"/logo.webp"} alt="logo" height={120} width={120} />
        </motion.div>
        <div className="sm:hidden">
          <motion.button onClick={handleClick}>
            {menu ? <X size={24} /> : <MenuIcon size={24} />}
          </motion.button>
        </div>
        <div className="text-[#59168B] font-semibold sm:flex gap-10">
          {nvas.map((header) => (
            <div className="" key={header.id}>
              <Link href={header.href}>{header.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
