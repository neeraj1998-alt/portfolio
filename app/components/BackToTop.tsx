"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-2.5 border border-[#e8e3dc]/10 text-[#e8e3dc]/25 hover:border-[#e8a045]/40 hover:text-[#e8a045] transition-all duration-300 bg-[#0c0c0c]"
          aria-label="Back to top"
        >
          <HiArrowUp size={14} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
