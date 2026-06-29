// import { useState, useEffect } from "react";
// import GamesSearch from "../gamessearch/GamesSearch";      // ✅ gamessearch (double 's')
// import GamesFilter from "../gamesfilter/GamesFilter";
// import GamesGrid from "../gamesgrid/GamesGrid";
// import GamesPagination from "../gamespagination/GamesPagination";
// import { getGames, getGenres } from "../../../Api/gamesApi";

// const GamesWrapper = () => {
//   const [games, setGames] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedGenre, setSelectedGenre] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [genresList, setGenresList] = useState([]);

//   const gamesPerPage = 20;

//   // Fetch genres
//   useEffect(() => {
//     const fetchGenres = async () => {
//       try {
//         const data = await getGenres();
//         setGenresList(data || []);
//       } catch (error) {
//         console.error("Failed to fetch genres:", error);
//         setGenresList([]);
//       }
//     };
//     fetchGenres();
//   }, []);

//   // Fetch games
//   useEffect(() => {
//     const fetchGames = async () => {
//       setLoading(true);
//       try {
//         const data = await getGames(
//           currentPage,
//           gamesPerPage,
//           searchTerm,
//           selectedGenre
//         );
//         setGames(data.results || []);
//         const total = data.count || 0;
//         setTotalPages(Math.ceil(total / gamesPerPage));
//       } catch (error) {
//         console.error("Failed to fetch games:", error);
//         setGames([]);
//         setTotalPages(1);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const timer = setTimeout(() => {
//       fetchGames();
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [currentPage, searchTerm, selectedGenre]);

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     setCurrentPage(1);
//   };

//   const handleGenreChange = (slug) => {
//     setSelectedGenre(slug);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const genreOptions = [
//     { name: "All", slug: "All" },
//     ...(Array.isArray(genresList)
//       ? genresList.map((g) => ({ name: g.name, slug: g.slug }))
//       : []),
//   ];

//   return (
//     <div className="mx-auto max-w-7xl px-4 sm:px-6">
//       {/* Search & Filter */}
//       <div className="py-8">
//         <div className="max-w-xl mx-auto">
//           <GamesSearch onSearch={handleSearch} loading={loading} />
//         </div>
//         <div className="mt-4 flex justify-center">
//           <GamesFilter
//             genres={genreOptions}
//             selectedGenre={selectedGenre}
//             onGenreChange={handleGenreChange}
//           />
//         </div>
//       </div>

//       {/* Games Grid */}
//       <div className="pb-8">
//         {loading ? (
//           <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {[...Array(8)].map((_, idx) => (
//               <div
//                 key={idx}
//                 className="h-[350px] animate-pulse rounded-3xl bg-[var(--bg-secondary)]"
//               />
//             ))}
//           </div>
//         ) : (
//           <>
//             {games.length > 0 ? (
//               <>
//                 <GamesGrid games={games} />
//                 <GamesPagination
//                   currentPage={currentPage}
//                   totalPages={totalPages}
//                   onPageChange={handlePageChange}
//                 />
//               </>
//             ) : (
//               <div className="text-center py-20">
//                 <h3 className="text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//                   No games found
//                 </h3>
//                 <p className="mt-2 text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//                   Try adjusting your search or filter.
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GamesWrapper;

import { useState, useEffect, useCallback } from "react";
import GamesSearch from "../gamessearch/GamesSearch";
import GamesFilter from "../gamesfilter/GamesFilter";
import GamesGrid from "../gamesgrid/GamesGrid";
import GamesPagination from "../gamespagination/GamesPagination";
import { getGames, getGenres } from "../../../Api/gamesApi";

const GamesWrapper = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);
  const [genresList, setGenresList] = useState([]);

  const gamesPerPage = 20;

  // Fetch genres
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getGenres();
        setGenresList(data || []);
      } catch (error) {
        console.error("Failed to fetch genres:", error);
        setGenresList([]);
      }
    };
    fetchGenres();
  }, []);

  // Fetch games
  const fetchGames = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getGames(
        currentPage,
        gamesPerPage,
        searchTerm,
        selectedGenre
      );
      
      // ✅ Log response to check what's coming
      console.log("🔵 Games API Response:", data);
      console.log("🔵 Results count:", data.results?.length);

      setGames(data.results || []);
      setTotalCount(data.count || 0);
      const total = Math.ceil((data.count || 0) / gamesPerPage);
      setTotalPages(total > 0 ? total : 1);
    } catch (err) {
      console.error("❌ Failed to fetch games:", err);
      setError(err.message || "Failed to load games");
      setGames([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  }, [currentPage, searchTerm, selectedGenre, gamesPerPage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchGames();
    }, 500);
    return () => clearTimeout(timer);
  }, [fetchGames]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleGenreChange = (slug) => {
    setSelectedGenre(slug);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const genreOptions = [
    { name: "All", slug: "All" },
    ...(Array.isArray(genresList)
      ? genresList.map((g) => ({ name: g.name, slug: g.slug }))
      : []),
  ];

  // ✅ Show error if any
  if (error) {
    return (
      <div className="bg-[var(--bg-primary)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-red-500 font-[var(--font-primary-font)]">
              ⚠️ Error Loading Games
            </h3>
            <p className="mt-2 text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
              {error}
            </p>
            <button
              onClick={() => fetchGames()}
              className="mt-4 px-6 py-2 rounded-xl bg-brand-primary text-white hover:bg-purple-600 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Search & Filter */}
        <div className="py-8">
          <div className="max-w-xl mx-auto">
            <GamesSearch onSearch={handleSearch} loading={loading} />
          </div>
          <div className="mt-4 flex justify-center">
            <GamesFilter
              genres={genreOptions}
              selectedGenre={selectedGenre}
              onGenreChange={handleGenreChange}
            />
          </div>
        </div>

        {/* Games Grid */}
        <div className="pb-8">
          {loading ? (
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[...Array(8)].map((_, idx) => (
                <div
                  key={idx}
                  className="h-[350px] animate-pulse rounded-3xl bg-[var(--bg-secondary)]"
                />
              ))}
            </div>
          ) : (
            <>
              {games.length > 0 ? (
                <>
                  <GamesGrid games={games} />
                  <GamesPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                  <p className="text-center text-sm text-[var(--text-secondary)] mt-4 font-[var(--font-secondary-font)]">
                    Showing {games.length} of {totalCount} games
                  </p>
                </>
              ) : (
                <div className="text-center py-20">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                    No games found
                  </h3>
                  <p className="mt-2 text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                    Try adjusting your search or filter.
                  </p>
                  <p className="mt-1 text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                    Selected genre: <strong>{selectedGenre}</strong>, Search: <strong>"{searchTerm}"</strong>
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamesWrapper;