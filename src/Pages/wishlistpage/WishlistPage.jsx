import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useWishlist } from "../../Context/wishlistcontext/WishlistContext";
import WishListItems from "./wishlistitems/WishListItems";
import { FaHeart, FaGamepad, FaTrash, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const totalGames = wishlist.length;
  const avgRating = totalGames > 0 
    ? (wishlist.reduce((acc, g) => acc + (g.rating || 0), 0) / totalGames).toFixed(1) 
    : 0;

  const clearWishlist = () => {
    if (window.confirm("Are you sure you want to clear your entire wishlist?")) {
      wishlist.forEach(game => removeFromWishlist(game.id));
    }
  };

  return (
    <main className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
      {/* Animated Hero Section */}
      <section
        ref={ref}
        className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden"
      >
        {/* Gradient Background with animated orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-purple-500/10" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-primary/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-brand-primary to-purple-600 shadow-xl shadow-brand-primary/30">
                  <FaHeart className="text-2xl text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                    My Wishlist
                  </h1>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                    {totalGames === 0
                      ? "Start building your collection"
                      : `${totalGames} game${totalGames > 1 ? 's' : ''} saved for later`}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            {totalGames > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl px-6 py-3 text-center shadow-[var(--shadow)]">
                  <p className="text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                    {totalGames}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">Games</p>
                </div>
                <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl px-6 py-3 text-center shadow-[var(--shadow)]">
                  <p className="text-2xl font-bold text-amber-500 font-[var(--font-primary-font)]">
                    {avgRating}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">Avg Rating</p>
                </div>
                <button
                  onClick={clearWishlist}
                  className="p-3 rounded-2xl bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20 transition-colors duration-300"
                  aria-label="Clear wishlist"
                >
                  <FaTrash className="text-lg" />
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Wishlist Items */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 lg:pb-16">
        {totalGames === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center py-20"
          >
            <div className="relative inline-block">
              <div className="text-7xl sm:text-8xl text-[var(--text-secondary)] opacity-10">
                <FaHeart />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaGamepad className="text-4xl text-brand-primary/30" />
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
              Your wishlist is empty
            </h3>
            <p className="mt-2 text-[var(--text-secondary)] font-[var(--font-secondary-font)] max-w-sm mx-auto">
              Start exploring games and add your favourites to the wishlist. 
              You'll find them all right here.
            </p>
            <Link
              to="/games"
              className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-primary to-purple-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Browse Games
              <FaGamepad className="text-sm" />
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                Showing <span className="font-bold text-[var(--text-primary)]">{totalGames}</span> games
              </p>
              <Link
                to="/games"
                className="text-sm font-medium text-brand-primary hover:underline font-[var(--font-secondary-font)]"
              >
                + Add More Games
              </Link>
            </div>

            {/* Game Grid */}
            <WishListItems items={wishlist} />
          </>
        )}
      </div>
    </main>
  );
};

export default WishlistPage;