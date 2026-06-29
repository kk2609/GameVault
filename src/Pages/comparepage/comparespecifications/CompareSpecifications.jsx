import { motion } from "framer-motion";
import { FaStar, FaGamepad, FaCalendarAlt, FaClock } from "react-icons/fa";

const CompareSpecifications = ({ games }) => {
  const specRows = [
    { key: "rating", label: "Rating", icon: FaStar, getValue: (g) => g.rating || "N/A" },
    { key: "released", label: "Release Date", icon: FaCalendarAlt, getValue: (g) => g.released || "N/A" },
    { key: "playtime", label: "Avg Playtime", icon: FaClock, getValue: (g) => g.playtime ? `${g.playtime}h` : "N/A" },
    { key: "genres", label: "Genres", icon: FaGamepad, getValue: (g) => g.genres?.map((g) => g.name).join(", ") || "N/A" },
    { key: "platforms", label: "Platforms", icon: FaGamepad, getValue: (g) => g.parent_platforms?.map((p) => p.platform.name).join(", ") || "N/A" },
    { key: "metacritic", label: "Metacritic", icon: FaStar, getValue: (g) => g.metacritic || "N/A" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-color)] p-6 shadow-[var(--shadow)] overflow-x-auto"
    >
      <h2 className="text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)] mb-6">
        Specifications Comparison
      </h2>

      <div className="min-w-[600px]">
        {/* Header */}
        <div className="grid grid-cols-[140px_repeat(auto-fit,minmax(160px,1fr))] gap-4 mb-4">
          <div className="text-sm font-bold text-[var(--text-secondary)] font-[var(--font-secondary-font)] uppercase tracking-wider">
            Specs
          </div>
          {games.map((game) => (
            <div
              key={game.id}
              className="text-center text-sm font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]"
            >
              {game.name.length > 12 ? game.name.slice(0, 12) + "..." : game.name}
            </div>
          ))}
        </div>

        {/* Rows */}
        {specRows.map((row, idx) => {
          const Icon = row.icon;
          return (
            <div
              key={row.key}
              className={`grid grid-cols-[140px_repeat(auto-fit,minmax(160px,1fr))] gap-4 py-3 rounded-xl ${
                idx % 2 === 0 ? "bg-[var(--bg-secondary)]" : ""
              }`}
            >
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                <Icon className="text-brand-primary text-sm" />
                {row.label}
              </div>
              {games.map((game) => (
                <div
                  key={game.id}
                  className="text-center text-sm text-[var(--text-primary)] font-[var(--font-secondary-font)]"
                >
                  {row.getValue(game)}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CompareSpecifications;