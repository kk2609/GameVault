import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaSpinner } from "react-icons/fa";

const GamesSearch = ({ onSearch, loading = false }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  // ✅ Store onSearch in a ref so it never triggers the effect
  const onSearchRef = useRef(onSearch);
  useEffect(() => {
    onSearchRef.current = onSearch;
  }, [onSearch]);

  // ✅ Debounce only fires when VALUE changes, not when onSearch reference changes
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchRef.current(value);
    }, 300);
    return () => clearTimeout(timer);
  }, [value]); // ✅ only [value] — not [value, onSearch]

  const handleClear = () => {
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border transition-all duration-300 ${
          isFocused
            ? "border-brand-primary shadow-lg shadow-brand-primary/20 scale-[1.02]"
            : "border-[var(--border-color)]"
        }`}
      >
        <motion.div
          animate={value.length > 0 ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={{ duration: 0.3, repeat: value.length > 0 ? Infinity : 0 }}
          className="text-[var(--text-secondary)]"
        >
          <FaSearch className="text-sm" />
        </motion.div>

        <input
          ref={inputRef}
          type="text"
          placeholder="Search games by name..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] font-[var(--font-secondary-font)]"
        />

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="spinner"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="text-brand-primary"
            >
              <FaSpinner className="animate-spin text-sm" />
            </motion.div>
          ) : value.length > 0 ? (
            <motion.button
              key="clear"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              onClick={handleClear}
              className="text-[var(--text-secondary)] hover:text-brand-primary transition-colors duration-200"
            >
              ✕
            </motion.button>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default GamesSearch;