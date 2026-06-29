import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaSearch, FaTimes, FaGamepad } from "react-icons/fa";
import { getGames } from "../../../Api/gamesApi";
import CompareProducts from "../compareproducts/CompareProducts";
import CompareSpecifications from "../comparespecifications/CompareSpecifications";

const CompareWrapper = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGames, setSelectedGames] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search games
  useEffect(() => {
    const fetchGames = async () => {
      if (!searchTerm.trim()) {
        setSearchResults([]);
        return;
      }
      setLoading(true);
      try {
        const data = await getGames(1, 10, searchTerm);
        const filtered = (data.results || []).filter(
          (game) => !selectedGames.some((g) => g.id === game.id)
        );
        setSearchResults(filtered);
      } catch (error) {
        console.error("Failed to search games:", error);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchGames, 500);
    return () => clearTimeout(timer);
  }, [searchTerm, selectedGames]);

  const addGame = (game) => {
    if (selectedGames.length >= 4) {
      alert("You can compare up to 4 games at a time.");
      return;
    }
    setSelectedGames([...selectedGames, game]);
    setSearchTerm("");
    setSearchResults([]);
  };

  const removeGame = (gameId) => {
    setSelectedGames(selectedGames.filter((g) => g.id !== gameId));
  };

  const clearAll = () => {
    setSelectedGames([]);
  };

  return (
    <main className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section
        ref={ref}
        className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden bg-[var(--bg-secondary)]"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
              Compare Games
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed">
              Add up to 4 games and compare their specs, ratings, and features
              side by side to find your perfect match.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compare Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 lg:py-12">
        {/* ✅ Search Bar – Always Visible */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder={selectedGames.length >= 4 ? "Maximum 4 games selected" : "Search games to add..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={selectedGames.length >= 4}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] focus:border-brand-primary outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] transition-colors duration-300 font-[var(--font-secondary-font)] disabled:opacity-50 disabled:cursor-not-allowed"
            />
            {selectedGames.length >= 4 && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-amber-500 font-[var(--font-secondary-font)]">
                Max reached
              </span>
            )}
          </div>

          {/* Search Results */}
          {loading && (
            <p className="text-center text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)] mt-2">
              Searching...
            </p>
          )}

          {searchResults.length > 0 && (
            <div className="max-w-xl mx-auto mt-2 bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-2xl shadow-[var(--shadow)] max-h-64 overflow-y-auto divide-y divide-[var(--border-color)]">
              {searchResults.map((game) => (
                <button
                  key={game.id}
                  onClick={() => addGame(game)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-brand-primary/5 transition-colors duration-200 text-left"
                >
                  <img
                    src={game.background_image || "https://via.placeholder.com/48/1a1a2e/6C2BD9?text=No+Image"}
                    alt={game.name}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--text-primary)] font-[var(--font-secondary-font)] truncate">
                      {game.name}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                      <span>{game.rating || "N/A"} ★</span>
                      <span>{game.released ? new Date(game.released).getFullYear() : "N/A"}</span>
                    </div>
                  </div>
                  <span className="flex-shrink-0 text-xs font-semibold text-brand-primary font-[var(--font-secondary-font)]">
                    Add +
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Selected Games */}
        {selectedGames.length === 0 ? (
          <div className="text-center py-16">
            <FaGamepad className="text-6xl text-[var(--text-secondary)] opacity-20 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
              No games selected
            </h3>
            <p className="mt-2 text-[var(--text-secondary)] font-[var(--font-secondary-font)] max-w-sm mx-auto">
              Search for games above and add them to compare specifications side by side.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                  Comparing {selectedGames.length} game{selectedGames.length > 1 ? "s" : ""}
                </h2>
                <span className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                  (max 4)
                </span>
              </div>
              <button
                onClick={clearAll}
                className="text-sm text-red-500 hover:text-red-600 font-[var(--font-secondary-font)] transition-colors flex items-center gap-1"
              >
                <FaTimes className="text-xs" /> Clear All
              </button>
            </div>

            {/* Compare Products Grid */}
            <CompareProducts games={selectedGames} onRemove={removeGame} />

            {/* Specifications Comparison */}
            <CompareSpecifications games={selectedGames} />
          </>
        )}
      </div>
    </main>
  );
};

export default CompareWrapper;