import { motion } from "framer-motion"; // Import Framer Motion
import talent from "../assets/Skills.png";

export default function Skills() {
  return (
    <section id="skill" className="py-12 px-4">
      <div className="flex flex-col items-center mt-10">
        {/* Section Title with Motion */}
        <motion.h2
          className="text-4xl font-semibold text-white text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Skills
        </motion.h2>

        {/* Skills Image with Motion */}
        <motion.img
          src={talent}
          alt="Skills"
          className="relative z-10 w-250 h-185 object-contain animate-pulse transition-transform duration-300 hover:-translate-y-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </div>
    </section>
  );
}
