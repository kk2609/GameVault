import { motion } from "framer-motion";

const ConsoleGallery = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 sm:p-6 shadow-[var(--shadow)]"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)] mb-4">
        Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="aspect-square rounded-xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)]"
          >
            <img
              src={img}
              alt={`Console view ${idx + 1}`}
              className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ConsoleGallery;