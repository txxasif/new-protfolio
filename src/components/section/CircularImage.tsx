import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CircularImageHoverProps {
  imageSrc: string;
  size?: string;
}

const CircularImageHover: React.FC<CircularImageHoverProps> = ({
  imageSrc,
  size = "52",
}) => {
  const containerSizeClass = `w-${size} h-${size}`; // Tailwind size class

  return (
    <div className={`relative ${containerSizeClass} mx-auto`}>
      <div className="absolute inset-0 bg-gray-800 rounded-full z-10 transition-opacity duration-300 ease-in-out"></div>
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden z-20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Image
          src={imageSrc}
          alt="Circular Image"
          width={500}
          height={500}
          className="w-full h-full object-cover block"
        />
      </motion.div>
    </div>
  );
};

export default CircularImageHover;
