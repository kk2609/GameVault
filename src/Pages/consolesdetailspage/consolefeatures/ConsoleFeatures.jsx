import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const ConsoleFeatures = ({ features }) => {
  if (!features || features.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 sm:p-6 shadow-[var(--shadow)]"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)] mb-4">
        Key Features
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 p-2 rounded-xl bg-[var(--bg-secondary)] hover:bg-brand-primary/5 transition-colors duration-200"
          >
            <FaCheckCircle className="text-brand-primary text-lg mt-0.5 flex-shrink-0" />
            <span className="text-sm text-[var(--text-primary)] font-[var(--font-secondary-font)]">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ConsoleFeatures;