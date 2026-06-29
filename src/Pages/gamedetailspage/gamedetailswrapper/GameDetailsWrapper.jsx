// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { motion } from "framer-motion";

// import GameHeroBanner from "../gameherobanner/GameHeroBanner";
// import GameInformation from "../gameinformation/GameInformation";
// import GameEditions from "../gameeditions/GameEditions";
// import GameRequirements from "../gamerequirements/GameRequirements";
// import GameScreenshotGallery from "../gamescreenshotgallery/GameScreenshotGallery";
// import GameTrailer from "../gametrailer/GameTrailer";
// import SimilarGames from "../similargames/SimilarGames";

// import {
//   getGameDetails,
//   getGameScreenshots,
//   getGameTrailers,
//   getSimilarGames,
// } from "../../../Api/gamesApi";

// const GameDetailsWrapper = () => {
//   const { id } = useParams();
//   const [game, setGame] = useState(null);
//   const [screenshots, setScreenshots] = useState([]);
//   const [trailers, setTrailers] = useState([]);
//   const [similarGames, setSimilarGames] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchGameDetails = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const [gameData, screenshotsData, trailersData, similarData] =
//           await Promise.all([
//             getGameDetails(id),
//             getGameScreenshots(id),
//             getGameTrailers(id),
//             getSimilarGames(id),
//           ]);

//         setGame(gameData);
//         setScreenshots(screenshotsData || []);
//         setTrailers(trailersData || []);
//         setSimilarGames(similarData || []);
//       } catch (err) {
//         console.error("Failed to fetch game details:", err);
//         setError(err.message || "Failed to load game details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchGameDetails();
//   }, [id]);

//   // Loading state
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4">
//         <div className="flex flex-col items-center gap-4">
//           <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
//           <p className="text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//             Loading game details...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4">
//         <div className="text-center max-w-lg">
//           <span className="text-5xl sm:text-6xl block mb-4">⚠️</span>
//           <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//             Something went wrong
//           </h2>
//           <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//             {error}
//           </p>
//           <button
//             onClick={() => window.location.reload()}
//             className="mt-6 px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl bg-brand-primary text-white hover:bg-purple-600 transition-colors font-[var(--font-secondary-font)]"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Not found
//   if (!game) {
//     return (
//       <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//             Game not found
//           </h2>
//           <p className="mt-2 text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//             The game you're looking for doesn't exist.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
//       {/* Hero Banner */}
//       <GameHeroBanner game={game} />

//       {/* Main Content */}
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8 lg:py-10">
//         <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
//           {/* Left / Main (2/3 on desktop) */}
//           <div className="lg:col-span-2 space-y-6 md:space-y-8">
//             <GameInformation game={game} />

//             {screenshots.length > 0 && (
//               <GameScreenshotGallery screenshots={screenshots} />
//             )}

//             {trailers.length > 0 && <GameTrailer trailers={trailers} />}

//             {similarGames.length > 0 && <SimilarGames games={similarGames} />}
//           </div>

//           {/* Right / Sidebar (1/3 on desktop) */}
//           <div className="space-y-6 md:space-y-8">
//             <GameRequirements game={game} />
//             <GameEditions game={game} />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default GameDetailsWrapper;



import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHeart } from "react-icons/fa";

import { useWishlist } from "../../../Context/wishlistcontext/WishlistContext";

import GameHeroBanner from "../gameherobanner/GameHeroBanner";
import GameInformation from "../gameinformation/GameInformation";
import GameEditions from "../gameeditions/GameEditions";
import GameRequirements from "../gamerequirements/GameRequirements";
import GameScreenshotGallery from "../gamescreenshotgallery/GameScreenshotGallery";
import GameTrailer from "../gametrailer/GameTrailer";
import SimilarGames from "../similargames/SimilarGames";

import {
  getGameDetails,
  getGameScreenshots,
  getGameTrailers,
  getSimilarGames,
} from "../../../Api/gamesApi";

const GameDetailsWrapper = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [game, setGame] = useState(null);
  const [screenshots, setScreenshots] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [similarGames, setSimilarGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const extractIdFromSlug = (slug) => {
    if (!slug) return null;
    const parts = slug.split('-');
    const id = parseInt(parts[0], 10);
    return isNaN(id) ? null : id;
  };

  // Update wishlist status when game changes
  useEffect(() => {
    if (game) {
      setIsWishlisted(isInWishlist(game.id));
    }
  }, [game, isInWishlist]);

  useEffect(() => {
    const gameId = extractIdFromSlug(slug);
    if (!gameId) {
      setError("Invalid game ID");
      setLoading(false);
      return;
    }

    const fetchGameDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const [gameData, screenshotsData, trailersData, similarData] =
          await Promise.all([
            getGameDetails(gameId),
            getGameScreenshots(gameId),
            getGameTrailers(gameId),
            getSimilarGames(gameId),
          ]);

        setGame(gameData);
        setScreenshots(screenshotsData || []);
        setTrailers(trailersData || []);
        setSimilarGames(similarData || []);
      } catch (err) {
        console.error("Failed to fetch game details:", err);
        setError(err.message || "Failed to load game details.");
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [slug]);

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(game.id);
      setIsWishlisted(false);
    } else {
      addToWishlist({
        id: game.id,
        name: game.name,
        background_image: game.background_image,
        rating: game.rating,
        parent_platforms: game.parent_platforms,
      });
      setIsWishlisted(true);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
            Loading game details...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <span className="text-5xl sm:text-6xl block mb-4">⚠️</span>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
            Something went wrong
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl bg-brand-primary text-white hover:bg-purple-600 transition-colors font-[var(--font-secondary-font)]"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
            Game not found
          </h2>
          <p className="mt-2 text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
            The game you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
      <GameHeroBanner game={game} />

      {/* Back & Wishlist Buttons */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-6 sm:pt-8 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-brand-primary transition-colors duration-300 font-[var(--font-secondary-font)]"
        >
          <FaArrowLeft className="text-sm" />
          Back
        </button>

        <button
          onClick={handleWishlistToggle}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 font-[var(--font-secondary-font)] ${
            isWishlisted
              ? "bg-red-500/10 text-red-500 border border-red-500/30 hover:bg-red-500/20"
              : "bg-brand-primary/10 text-brand-primary border border-brand-primary/20 hover:bg-brand-primary/20"
          }`}
        >
          <FaHeart className={isWishlisted ? "fill-red-500" : ""} />
          {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <GameInformation game={game} />
            {screenshots.length > 0 && (
              <GameScreenshotGallery screenshots={screenshots} />
            )}
            {trailers.length > 0 && (
              <GameTrailer trailers={trailers} />
            )}
            {similarGames.length > 0 && (
              <SimilarGames games={similarGames} />
            )}
          </div>

          <div className="space-y-8">
            <GameRequirements game={game} />
            <GameEditions game={game} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GameDetailsWrapper;