import { motion } from "framer-motion";
import { FaStar, FaCalendarAlt, FaClock, FaGamepad } from "react-icons/fa";

const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "N/A";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const GameHeroBanner = ({ game }) => {
  const backgroundImage = game.background_image || game.background_image_additional;

  return (
    <section className="relative overflow-hidden min-h-[65vh] sm:min-h-[75vh] flex items-end">
      {/* Background Image with subtle zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-10000 group-hover:scale-100"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: "blur(1.5px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl space-y-4"
        >
          {/* Badges Row */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
            {game.metacritic && (
              <span className="flex items-center gap-1.5 bg-green-500/30 px-3 py-1 rounded-full text-green-400 font-bold font-[var(--font-secondary-font)] border border-green-500/20">
                <FaStar className="text-xs" />
                {game.metacritic}
              </span>
            )}
            {game.released && (
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full font-[var(--font-secondary-font)] border border-white/10">
                <FaCalendarAlt className="text-xs" />
                {formatDate(game.released)}
              </span>
            )}
            {game.playtime && (
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full font-[var(--font-secondary-font)] border border-white/10">
                <FaClock className="text-xs" />
                {game.playtime}h Avg.
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[var(--font-primary-font)] drop-shadow-2xl leading-tight">
            {game.name}
          </h1>

          {game.tagline && (
            <p className="text-lg sm:text-xl text-white/70 font-[var(--font-secondary-font)] italic">
              {game.tagline}
            </p>
          )}

          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {game.genres?.slice(0, 5).map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-white/80 border border-white/10 font-[var(--font-secondary-font)]"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Platforms */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
            <FaGamepad className="text-lg text-white/40" />
            {game.platforms?.slice(0, 6).map((p) => (
              <span key={p.platform.id} className="font-[var(--font-secondary-font)]">
                {p.platform.name}
              </span>
            ))}
            {game.platforms?.length > 6 && (
              <span className="text-xs text-white/40 font-[var(--font-secondary-font)]">
                +{game.platforms.length - 6} more
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/70 font-[var(--font-secondary-font)] leading-relaxed line-clamp-3">
            {game.description_raw || game.description}
          </p>

          {/* Quick Actions (optional) */}
          <div className="flex flex-wrap gap-3 mt-2">
            {/* <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300 font-[var(--font-secondary-font)]">
              Play Now
            </button> */}
            {/* <button className="px-6 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all duration-300 font-[var(--font-secondary-font)]">
              Add to Wishlist
            </button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GameHeroBanner;