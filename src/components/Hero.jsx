import { motion } from "framer-motion";
import profile from "../assets/prof.png";

export default function Hero() {
  return (
    <section
      id="about"
      className="scroll-mt-20 min-h-screen bg-[#0F0F1C] text-white flex flex-col md:flex-row items-center  md:px-20 py-24 gap-1"
    >
     
      <motion.div
        className="relative flex flex-col items-center md:w-1/2 space-y-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-72 h-72 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-purple-700 blur-2xl opacity-40 rounded-full animate-pulse z-0" />

          <motion.img
            src={profile}
            alt="Profile"
            className="relative z-10 w-full h-full object-cover rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.p
          className="text-2xl text-gray-300 mb-1 text-center md:text-left font-preah"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hi! I am <span className="text-purple-400 font-semibold">Christopher G. ArsenaL Jr.</span>
        </motion.p>
      </motion.div>

   
      <motion.div
        className="md:w-1/2 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug font-preah"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Debugging is like being a{" "}
          <span className="text-purple-400 underline decoration-purple-600">
            detective
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-400 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6 }}
        >
          in a crime movie where you're also the murderer.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-300"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8 }}
        >
          Aspiring Web App Developer
        </motion.h2>

        <motion.p
          className="text-gray-300 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.0 }}
        >
          Currently finishing my bachelor's degree at{" "}
          <a
            href="https://www.usep.edu.ph/"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            University of Southeastern Philippines
          </a>
        </motion.p>

        <motion.p
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.2 }}
        >
          A self-taught web app developer, I specialize in full-stack development using the MERN stack (MongoDB, Express.js, React, and Node.js), with React as my main frontend framework.
        </motion.p>
      </motion.div>
    </section>
  );
}
