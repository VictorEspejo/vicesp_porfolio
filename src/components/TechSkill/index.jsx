import { motion } from "framer-motion";

export default function TechSkill({ name, value }) {
  return (
    <div>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: `${value}%`, opacity: 1 }}
        transition={{ duration: 2, type: "spring", delay: 0.5 }}
        viewport={{ once: false }}
      >
        <div className="grow rounded-full bg-gradient-to-r from-slate-100 dark:from-slate-800 to-sky-600 dark:to-sky-600 relative py-2 px-2">
          <h3 className="text-lg lg:text-2xl dark:text-white text-black whitespace-nowrap">
            {name}
          </h3>
        </div>
      </motion.div>
    </div>
  );
}
