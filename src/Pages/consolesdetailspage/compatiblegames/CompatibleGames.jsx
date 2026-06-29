import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getGames } from "../../../Api/gamesApi";

const CompatibleGames = ({ console: gameConsole }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      if (!gameConsole) return;

      // ✅ RAWG uses numeric platform IDs, not slugs
      const platformMap = {
        ps5: 187,
        "ps5-slim": 187,
        "ps4-pro": 18,
        "xbox-series-x": 186,
        "xbox-series-s": 186,
        "switch-oled": 7,
        switch: 7,
        "switch-lite": 7,
        "steam-deck": 4,
        "rog-ally": 4,
        "ps-vita": 19,
      };

      const platform = platformMap[gameConsole.id];

      if (!platform) {
        setGames([]);
        setLoading(false);
        return;
      }

      try {
        const randomPage = Math.floor(Math.random() * 10) + 1;
        const data = await getGames(randomPage, 6, "", "All", platform);
        setGames(data.results || []);
      } catch (error) {
        // ✅ Now safely uses the global console, not the prop
        console.error("Failed to fetch compatible games:", error);
        setGames([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [gameConsole]); // ✅ renamed prop used in dependency array

  if (loading) {
    return (
      <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 sm:p-6 shadow-[var(--shadow)]">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)] mb-4">
          Compatible Games
        </h2>
        <div className="flex justify-center py-8">
          <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (!games || games.length === 0) {
    return (
      <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 sm:p-6 shadow-[var(--shadow)]">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)] mb-4">
          Compatible Games
        </h2>
        <p className="text-[var(--text-secondary)] font-[var(--font-secondary-font)] text-center py-8">
          No compatible games found for this console.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 sm:p-6 shadow-[var(--shadow)]"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)] mb-4">
        Compatible Games
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {games.slice(0, 6).map((game) => (
          <Link
            key={game.id}
            to={`/games/${game.id}`}
            className="group overflow-hidden rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={
                  game.background_image ||
                  "https://via.placeholder.com/200/1a1a2e/6C2BD9?text=No+Image"
                }
                alt={game.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <p className="text-xs text-center text-[var(--text-primary)] font-[var(--font-secondary-font)] p-2 truncate">
              {game.name}
            </p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default CompatibleGames;