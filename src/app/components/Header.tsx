"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="">
      {/* header ribbon */}
      <div className="sm:flex justify-between items-center px-8 py-2 bg-purple-900">
        {/* left text */}
        <div className="text-white">
          <motion.h1
            initial={{ x: -400, opacity: 0, color: "#59168B" }}
            animate={{ x: 0, opacity: 1, color: "white" }}
            transition={{ duration: 0.5, type: "keyframes" }}
          >
            Watch:{" "}
            <span className="font-bold ">
              Fiber optic internet connection is here
            </span>
          </motion.h1>
        </div>

        {/* icons of social media */}
        <div className="sm:flex gap-5 hidden">
          <motion.div
            initial={{ x: 400, opacity: 0, color: "#59168B" }}
            animate={{ x: 0, opacity: 1, color: "white" }}
            transition={{ duration: 0.5, type: "keyframes" }}
            className=""
          >
            <Link href={"https://www.facebook.com/RahaNET.af/"}>
              <FaFacebookF color="white" size={24} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 400, opacity: 0, color: "#59168B" }}
            animate={{ x: 0, opacity: 1, color: "white" }}
            transition={{ duration: 1, type: "keyframes" }}
            className=""
          >
            <Link href={"https://www.instagram.com/rahanetaf/"}>
              <FaInstagram color="white" size={24} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 400, opacity: 0, color: "#59168B" }}
            animate={{ x: 0, opacity: 1, color: "white" }}
            transition={{ duration: 1.5, type: "keyframes" }}
            className=""
          >
            <Link href={"https://t.me/RahanetAF"}>
              <FaTelegramPlane color="white" size={24} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
