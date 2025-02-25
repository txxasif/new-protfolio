"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EnhancedPhoto() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto px-4 sm:px-8 md:px-16 py-8 sm:py-16 select-none   ">
      {/* Background shadow layer */}
      <div
        className="absolute top-0 left-0 w-full h-full rounded-lg opacity-10"
        style={{
          transform: "rotate(8deg) translate(20px, 10px)",
          background: "linear-gradient(45deg, #000, #333)",
          filter: "blur(12px)",
          zIndex: 0,
        }}
      />

      {/* White background layer */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-white rounded-lg"
        style={{
          transform: "rotate(8deg) translate(10px, 5px)",
          boxShadow: "0 0 1px rgba(0,0,0,0.1)",
          zIndex: 1,
        }}
      />

      {/* Main photo container */}
      <motion.div
        className="relative bg-white p-3 sm:p-5 rounded-lg"
        style={{
          transform: "rotate(8deg)",
          zIndex: 2,
          boxShadow: `
            0 2px 4px rgba(0,0,0,0.02),
            0 4px 8px rgba(0,0,0,0.02),
            0 8px 16px rgba(0,0,0,0.02)
          `,
        }}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        whileHover={{
          scale: 1.02,
          transition: { type: "spring", stiffness: 300, damping: 25 },
        }}
      >
        {/* Image wrapper for better control */}
        <div className="relative overflow-hidden aspect-w-3 aspect-h-4">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent mix-blend-overlay z-10" />
          <Image
            src="/images/asif.jpg"
            width={600}
            height={800}
            alt="Artistic photo"
            className="w-full h-full rounded-lg sm:rounded-xl object-cover grayscale contrast-105"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 600px"
          />
        </div>

        {/* Subtle border effect */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            boxShadow: "inset 0 0 1px rgba(0,0,0,0.1)",
          }}
        />
      </motion.div>
    </div>
  );
}
