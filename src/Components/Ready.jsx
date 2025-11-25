import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ReadyToConnect() {
  return (
    <section className="w-full bg-slate-950 py-24 text-center text-white">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6"
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold">Ready to connect</h2>

        {/* Subtext */}
        <p className="text-lg text-gray-200 mt-4">
          Whether you’re a parent or a developer, we’re building for you.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-black font-medium rounded-md shadow-md"
          >
            Contact
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-white text-white font-medium rounded-md"
          >
            Explore
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
