import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

// ✅ Same helper function
const generateSlug = (id, name) => {
  const slugName = name
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${id}-${slugName}`;
};

const SimilarGames = ({ games }) => {
  if (!games || games.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 shadow-[var(--shadow)]"
    >
      <h2 className="text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
        Similar Games
      </h2>

      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {games.slice(0, 4).map((game) => {
          const slug = generateSlug(game.id, game.name);
          return (
            <Link
              key={game.id}
              to={`/games/${slug}`}
              className="group overflow-hidden rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-hover)]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-bold text-[var(--text-primary)] font-[var(--font-primary-font)] line-clamp-1">
                  {game.name}
                </h3>
                <div className="mt-1 flex items-center gap-1 text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                  <FaStar className="text-amber-400 text-[10px]" />
                  {game.rating || "N/A"}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SimilarGames;