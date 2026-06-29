import { motion } from "framer-motion";
import { FaTimes, FaStar, FaCalendarAlt } from "react-icons/fa";

const CompareProducts = ({ games, onRemove }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
      {games.map((game, index) => (
        <motion.div
          key={game.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="relative rounded-2xl bg-[var(--bg-card)] border-2 border-[var(--border-color)] shadow-[var(--shadow)] overflow-hidden group hover:border-brand-primary/30 transition-colors duration-300"
        >
          {/* Remove Button */}
          <button
            onClick={() => onRemove(game.id)}
            className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-black/50 text-white hover:bg-red-500 transition-colors duration-200 opacity-0 group-hover:opacity-100"
          >
            <FaTimes className="text-sm" />
          </button>

          {/* Game Index */}
          <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full bg-brand-primary text-white text-xs font-bold font-[var(--font-primary-font)]">
            #{index + 1}
          </div>

          {/* Image */}
          <div className="aspect-video overflow-hidden bg-[var(--bg-secondary)]">
            <img
              src={game.background_image || "https://via.placeholder.com/300/1a1a2e/6C2BD9?text=No+Image"}
              alt={game.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-4 space-y-2">
            <h3 className="text-base font-bold text-[var(--text-primary)] font-[var(--font-primary-font)] line-clamp-1">
              {game.name}
            </h3>

            <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
              {game.rating && (
                <span className="flex items-center gap-1">
                  <FaStar className="text-amber-400 text-xs" />
                  {game.rating}
                </span>
              )}
              {game.released && (
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-xs" />
                  {new Date(game.released).getFullYear()}
                </span>
              )}
            </div>

            {game.genres && (
              <div className="flex flex-wrap gap-1">
                {game.genres.slice(0, 2).map((genre) => (
                  <span
                    key={genre.id}
                    className="px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-[var(--font-secondary-font)]"
                  >
                    {genre.name}
                  </span>
                ))}
                {game.genres.length > 2 && (
                  <span className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                    +{game.genres.length - 2}
                  </span>
                )}
              </div>
            )}
          </div>
        </motion.div>
      ))}

      {/* Add More Placeholder */}
      {games.length < 4 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: games.length * 0.1 }}
          className="relative rounded-2xl bg-[var(--bg-card)] border-2 border-dashed border-[var(--border-color)] flex items-center justify-center min-h-[250px]"
        >
          <div className="text-center text-[var(--text-secondary)]">
            <FaTimes className="text-3xl mx-auto mb-2 opacity-20" />
            <p className="text-sm font-[var(--font-secondary-font)]">Add a game</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CompareProducts;