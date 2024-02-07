import { useMousePosition } from "@/hooks/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 140 : 40;
  // console.log(isHovered);
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="relative w-full h-full cursor-default">

        <motion.div
          animate={{
            WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          className="text-mask px-9 py-7 absolute top-0 left-0 w-full h-full text-white"
        >
          <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="text-5xl p-7">Nice to see!</p>
        </motion.div>
        <div className="px-9 py-7 w-full h-full">
          <p className=" text-white text-5xl  p-7">Here we go!</p>
        </div>

      </div>
    </main>
  );
}
