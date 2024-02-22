import { motion } from "framer-motion";
import { buttonScale } from "@constants/motionVariants";
export default function SocialBadge({ href, children }) {
  return (
    <motion.a
      variants={buttonScale}
      whileHover="onHover"
      className="bg-gray-200 drop-shadow-lg text-sky-600 dark:text-white dark:bg-slate-700 flex flex-row items-center justify-center gap-3 px-2 lg:px-3 py-1 rounded-full"
      href={href}
      target="_blank"
    >
      {children}
    </motion.a>
  );
}
