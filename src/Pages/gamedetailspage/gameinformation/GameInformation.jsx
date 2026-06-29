import { motion } from "framer-motion";
import {
  FaCode,
  FaBuilding,
  FaGlobe,
  FaTags,
  FaCalendarAlt,
  FaStar,
  FaUsers,
} from "react-icons/fa";

const GameInformation = ({ game }) => {
  const infoItems = [
    {
      icon: FaCode,
      label: "Developer",
      value: game.developers?.map((d) => d.name).join(", ") || "N/A",
    },
    {
      icon: FaBuilding,
      label: "Publisher",
      value: game.publishers?.map((p) => p.name).join(", ") || "N/A",
    },
    {
      icon: FaGlobe,
      label: "Website",
      value: game.website ? (
        <a
          href={game.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-primary hover:underline font-[var(--font-secondary-font)]"
        >
          Visit Website
        </a>
      ) : (
        "N/A"
      ),
    },
    {
      icon: FaTags,
      label: "Genres",
      value: game.genres?.map((g) => g.name).join(", ") || "N/A",
    },
    {
      icon: FaCalendarAlt,
      label: "Release Date",
      value: game.released || "N/A",
    },
    {
      icon: FaStar,
      label: "Rating",
      value: game.rating ? `${game.rating}/5 (${game.ratings_count || 0} votes)` : "N/A",
    },
    {
      icon: FaUsers,
      label: "User Reviews",
      value: game.reviews_count || 0,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 sm:p-6 shadow-[var(--shadow)] transition-colors duration-300"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
        Game Information
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {infoItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] transition-colors duration-300"
            >
              <Icon className="text-brand-primary text-lg mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)] uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-sm text-[var(--text-primary)] font-[var(--font-secondary-font)] font-medium">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default GameInformation;