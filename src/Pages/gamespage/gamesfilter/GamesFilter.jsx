// const GamesFilter = ({ genres = [], selectedGenre, onGenreChange }) => {
//   return (
//     <div className="flex flex-wrap gap-2">
//       {genres.map((genre) => (
//         <button
//           key={genre.slug}
//           onClick={() => onGenreChange(genre.slug)}   // ✅ pass slug to API
//           className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 font-[var(--font-secondary-font)] ${
//             selectedGenre === genre.slug               // ✅ compare by slug
//               ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30"
//               : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-brand-primary/10 hover:text-brand-primary border border-[var(--border-color)]"
//           }`}
//         >
//           {genre.name}                                 {/* ✅ display name */}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default GamesFilter;

const GamesFilter = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {genres.map((genre) => {
        const isSelected = (genre.slug || genre.name) === selectedGenre;
        return (
          <button
            key={genre.slug || genre.name}
            onClick={() => onGenreChange(genre.slug || genre.name)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 font-[var(--font-secondary-font)] ${
              isSelected
                ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30"
                : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-brand-primary/10 hover:text-brand-primary border border-[var(--border-color)]"
            }`}
          >
            {genre.name}
          </button>
        );
      })}
    </div>
  );
};

export default GamesFilter;
