export default function SocialBadge({ href, children }) {
  return (
    <a
      className="bg-gray-200 text-sky-600 dark:text-white dark:bg-slate-700 flex flex-row items-center justify-center gap-3 px-2 lg:px-3 py-1 rounded-full transition duration-150 ease-in-out hover:scale-125"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}
