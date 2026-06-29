import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GameScreenshotGallery = ({ screenshots }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
  };

  const displayScreenshots = screenshots.slice(0, 6);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl sm:rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 sm:p-6 shadow-[var(--shadow)]"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
          Screenshots
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
          {displayScreenshots.map((screenshot, idx) => (
            <motion.div
              key={screenshot.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={screenshot.image}
                alt={`Screenshot ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 text-white/60 text-[8px] sm:text-xs font-[var(--font-secondary-font)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {idx + 1}/{displayScreenshots.length}
              </div>
            </motion.div>
          ))}
        </div>

        {screenshots.length > 6 && (
          <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
            +{screenshots.length - 6} more screenshots
          </p>
        )}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-2 sm:p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white/70 hover:text-white text-2xl sm:text-3xl transition-colors"
            >
              <FaTimes />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-2 sm:left-4 text-white/70 hover:text-white text-xl sm:text-2xl transition-colors"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 sm:right-4 text-white/70 hover:text-white text-xl sm:text-2xl transition-colors"
            >
              <FaChevronRight />
            </button>

            <div className="max-w-4xl max-h-[80vh] overflow-hidden rounded-lg sm:rounded-xl">
              <img
                src={screenshots[selectedIndex]?.image}
                alt="Screenshot"
                className="w-full h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GameScreenshotGallery;