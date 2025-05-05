import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function AboutMe() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <section className="relative min-h-screen bg-black overflow-hidden text-white flex items-center justify-center px-6 py-24">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-black z-0" />
        <div className="absolute inset-0 z-0 animate-gradientMove bg-gradient-to-br from-[#0f5132] via-[#14532d] to-[#1e3a8a] opacity-20 blur-2xl" />
        <div
          className="absolute inset-0 z-0 bg-[linear-gradient(90deg,_rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:24px_24px]"
          style={{
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-black opacity-30" />

        {/* CONTENT */}
        <motion.div
          className="relative z-10 max-w-3xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-400 drop-shadow-md mb-6">
            Blake Roses
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="text-green-400">I’m a </span>
            <span className="text-white">
              <Typewriter
                words={[
                  "Creative Developer",
                  "Software Engineer",
                  "Music Producer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.p>

          <motion.p
            className="text-gray-400 max-w-xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            I build expressive, full-stack web applications that blend strong
            user experience with functional design. My background in music
            production and engineering brings creativity and technical precision
            to every project.
          </motion.p>

          {/* MAIN CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Projects
            </motion.a>

            <motion.a
              href="/full-stack-dev.pdf"
              download
              className="px-6 py-2 border border-cyan-500 text-cyan-400 font-medium rounded-full hover:bg-cyan-600 hover:text-white transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>
          </div>

          {/* SCROLL INDICATOR */}
          <motion.div
            className="mt-12 text-gray-500 text-sm flex justify-center gap-1 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 2 }}
          >
            <span className="animate-bounce">↓</span>
            <span>Scroll to explore</span>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export { AboutMe };
