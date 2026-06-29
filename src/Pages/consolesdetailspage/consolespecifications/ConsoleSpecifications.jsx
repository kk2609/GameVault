import { motion } from "framer-motion";

const ConsoleSpecifications = ({ specs }) => {
  if (!specs) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 sm:p-6 shadow-[var(--shadow)]"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)] mb-4">
        Specifications
      </h2>
      <div className="divide-y divide-[var(--border-color)]">
        {Object.entries(specs).map(([key, value]) => (
          <div
            key={key}
            className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1"
          >
            <span className="text-sm font-semibold text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
              {key}
            </span>
            <span className="text-sm text-[var(--text-primary)] font-[var(--font-secondary-font)]">
              {value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ConsoleSpecifications;