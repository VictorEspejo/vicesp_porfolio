import { motion } from "framer-motion";
import { buttonScale } from "@constants/motionVariants";
import { Helmet } from "react-helmet";
export default function SocialBadge({ href, children }) {
  return (
    <>
      <Helmet>
        <link rel="canonical" href={window.location.origin} />
      </Helmet>
      <motion.a
        variants={buttonScale}
        whileHover="onHover"
        className="bg-gray-200 drop-shadow-lg text-sky-600 dark:text-white dark:bg-slate-700 flex flex-row items-center justify-center gap-3 px-2 lg:px-3 py-1 rounded-full"
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label={`Visitar ${children} en ${href}`}
      >
        {children}
      </motion.a>
    </>
  );
}
