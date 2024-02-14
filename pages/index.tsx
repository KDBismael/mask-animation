import { useMousePosition } from "@/hooks/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 140 : 40;
  // console.log(isHovered);
  return (
    <main className="w-screen h-screen">
      <div className="relative w-full h-full cursor-default">

        <motion.div
          animate={{
            WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          className="text-mask px-9 py-7 absolute top-0 left-0 w-full h-full text-white"
        >
          <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="text-5xl p-7 text-center">Nice to see!</p>
          <div className="w-[550px] mx-auto mt-20 h-[315px] flex flex-col justify-end">
            <p className="">This is why you watch tutorials, do the projects, and don’t learn anything:</p>
            <br />
            <p className="">- Fear of failure</p>
            <p className="">- No learning challenge</p>
            <p className="">- Copy and paste the code</p>
            <p className="">- jumping from project to project</p>
            <p className="">- The problem is known and already solved in advance by the YouTuber</p>
            <br />
            <p className="">Instead, learn the basics, outline a project, go through your trials and errors,</p>
            <p className=""> and build something your own. learning comes from struggling not memorization.</p>
            <br />
            <br />
            <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="ml-auto text-right uppercase text-xl w-fit">KDB Ismael</p>
          </div>
        </motion.div>
        <div className="px-9 py-7 w-full h-full">
          <div className="flex flex-col w-[550px] mx-auto  mt-40 h-[315px]">
            <p className="text-white ">This is why you watch tutorials, do the projects, and don’t learn anything:</p>
            <br />
            <p className="text-white">- Fear of failure</p>
            <p className="text-white">- No learning challenge</p>
            <p className="text-white">- Copy and paste the code</p>
            <p className="text-white">- jumping from project to project</p>
            <p className="text-white">- The problem is known and already solved in advance by the YouTuber</p>
            <br />
            <p className="text-white">Instead, learn the basics, outline a project, go through your trials and errors,</p>
            <p className="text-white"> and build something your own. learning comes from struggling not memorization.</p>
            <br />
            <br />
            <p className="text-white text-right uppercase">Your friend</p>
          </div>
        </div>
      </div>
    </main>
  );
}
