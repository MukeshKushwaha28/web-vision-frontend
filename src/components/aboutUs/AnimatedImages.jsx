"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedImages() {
  const [hoverDirection, setHoverDirection] = useState("");

  const handleMouseEnter = (direction) => {
    setHoverDirection(direction);
  };

  return (
    <div className="flex items-center justify-center h-[500]  md:h-screen bg-black p-2 relative">
      {/* Left Image */}
      <motion.div
        className="relative w-45 h-70 md:w-90 md:h-140 rounded-xl overflow-hidden "
        onMouseEnter={() => handleMouseEnter("first")}
        animate={{
          y:
            hoverDirection === "first"
              ? 30
              : hoverDirection === "second"
              ? -30
              : 0,
        }}
        transition={{ duration: 0.4 }}
      >
        <img
          src="https://wdtconcho.wpengine.com/wp-content/uploads/2024/07/Home-3-aboutimg-1.jpg"
          alt="Building"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>

      {/* Right Image (30% Higher) */}
      <motion.div
        className="relative w-45 h-70 md:w-90 md:h-140 rounded-xl overflow-hidden -ml-16 -mt-24" // Moves left & up
        onMouseEnter={() => handleMouseEnter("second")}
        animate={{
          y:
            hoverDirection === "second"
              ? 30
              : hoverDirection === "first"
              ? -30
              : 0,
        }}
        transition={{ duration: 0.4 }}
      >
        <img
          src="https://wdtconcho.wpengine.com/wp-content/uploads/2024/07/Home-3-aboutimg-2.jpg"
          alt="Person with Tablet"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>
    </div>
  );
}
