import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-[var(--shadow)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 overflow-hidden"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
          >
            <span className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
              {item.question}
            </span>
            <span className="flex-shrink-0 ml-4 text-brand-primary">
              {openIndex === index ? (
                <FaMinus className="text-sm" />
              ) : (
                <FaPlus className="text-sm" />
              )}
            </span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed border-t border-[var(--border-color)] pt-4">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQAccordion;