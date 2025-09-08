import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";

export default function Hero() {
  return (
    <section className="bg-surface/60 bg-[#f3eeef] h-[80vh] border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-semibold text-center text-ink"
        >
          Where <span className="text-primary">Code</span> Meets{" "}
          <span className="text-accent">Creativity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center text-[15px] mt-4 max-w-3xl mx-auto"
        >
          We're a passionate team of frontend developers and UI/UX designers
          crafting beautiful, functional digital experiences that users love and
          businesses trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mt-6"
        >
          <Link
            to="/projects"
            className="px-4 py-2 bg-primary text-white rounded-[12px] text-sm shadow hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View Our Work →
          </Link>
          <a
            href="#team"
            className="px-4 py-2 border text-primary border-primary rounded-[12px] text-sm text-ink hover:bg-surface transition-all duration-300 hover:scale-105"
          >
            Meet The Team
          </a>
        </motion.div>

        <ParallaxSection className="mt-10 md:w-[50%] m-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="bg-[#fff] rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="px-4 py-4 text-xs sm:text-sm flex justify-between items-center">
              <div className="dots flex gap-1 sm:gap-2">
                <motion.li
                  className="w-2 h-2 sm:w-[9px] sm:h-[9px] bg-primary list-none rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                ></motion.li>
                <motion.li
                  className="w-2 h-2 sm:w-[9px] sm:h-[9px] bg-[#14B8A6] list-none rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                ></motion.li>
                <motion.li
                  className="w-2 h-2 sm:w-[9px] sm:h-[9px] bg-[#F87171] list-none rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                ></motion.li>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                UXpectra.tsx
              </motion.div>
            </div>
            <pre className="px-4 pb-4 text-xs sm:text-sm overflow-hidden">
              <code>
                <motion.h2
                  className="code text-primary mb-1.5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  const
                </motion.h2>
                <motion.p
                  className="mb-1.5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <span>dream = </span>
                  <motion.span
                    className="text-[#F87171]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 }}
                  >
                    'amazing design'
                  </motion.span>
                  <span> + </span>
                  <motion.span
                    className="text-[#14B8A6]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.1 }}
                  >
                    'beautiful code'
                  </motion.span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  ;
                </motion.p>
              </code>
            </pre>
          </motion.div>
        </ParallaxSection>
      </div>
    </section>
  );
}
