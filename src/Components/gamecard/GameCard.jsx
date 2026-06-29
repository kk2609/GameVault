// // import { Link } from "react-router-dom";

// // import { FaHeart, FaStar, FaCalendarAlt } from "react-icons/fa";

// // const GameCard = ({ game }) => {
// //   return (
// //     <Link
// //       to={`/games/${game.id}`}
// //       className="
// //       group
// //       block

// //       overflow-hidden

// //       rounded-3xl

// //       bg-white

// //       border
// //       border-slate-200

// //       shadow-lg

// //       transition-all
// //       duration-500

// //       "
// //     >
// //       <div className="relative overflow-hidden">
// //         <img
// //           src={game.background_image}
// //           alt={game.name}
// //           className="
// //           h-[450px]
// //           w-full

// //           object-cover

// //           transition-transform
// //           duration-700

// //           group-hover:scale-110
// //           "
// //         />

// //         {/* Overlay */}

// //         <div
// //           className="
// //           absolute
// //           inset-0

// //           bg-gradient-to-t
// //           from-black
// //           via-black/20
// //           to-transparent
// //           "
// //         />

// //         {/* Rating */}

// //         <div
// //           className="
// //           absolute
// //           left-4
// //           top-4

// //           flex
// //           items-center
// //           gap-2

// //           rounded-full

// //           bg-amber-400

// //           px-3
// //           py-1

// //           text-sm
// //           font-bold
// //           text-black
// //           "
// //         >
// //           <FaStar />
// //           {game.rating}
// //         </div>

// //         {/* Wishlist */}

// //         {/* Content */}

// //         <div
// //           className="
// //           absolute
// //           bottom-0
// //           left-0
// //           right-0

// //           p-5
// //           "
// //         >
// //           <h3
// //             className="
// //             line-clamp-1

// //             text-2xl
// //             font-bold

// //             text-white
// //             "
// //           >
// //             {game.name}
// //           </h3>

// //           <div
// //             className="
// //             mt-2

// //             flex
// //             items-center
// //             gap-2

// //             text-sm
// //             text-slate-300
// //             "
// //           >
// //             {/* <FaCalendarAlt /> */}
// //             {/* {game.released} */}
// //           </div>

// //           <div className="mt-4 flex flex-wrap gap-2">
// //             {game.parent_platforms?.slice(0, 3).map((platform) => (
// //               <span
// //                 key={platform.platform.id}
// //                 className="
// //                   rounded-full

// //                   bg-white/20

// //                   px-3
// //                   py-1

// //                   text-xs
// //                   text-white
// //                   "
// //               >
// //                 {platform.platform.name}
// //               </span>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </Link>
// //   );
// // };

// // export default GameCard;

// import { Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import AnimationWrapper from "../animationwrapper/AnimationWrapper";

// const GameCard = ({ game }) => {
//   return (
//     <AnimationWrapper animationType="fadeUp" delay={0.1}>
//       <Link
//         to={`/games/${game.id}`}
//         className="
//           group
//           block
//           overflow-hidden
//           rounded-3xl
//           bg-[var(--bg-card)]
//           border
//           border-[var(--border-color)]
//           shadow-[var(--shadow)]
//           transition-all
//           duration-500
//           hover:-translate-y-3
//           hover:shadow-[var(--shadow-hover)]
//         "
//       >
//         <div className="relative overflow-hidden">
//           <img
//             src={game.background_image}
//             alt={game.name}
//             className="
//               h-[450px]
//               w-full
//               object-cover
//               transition-transform
//               duration-700
//               group-hover:scale-110
//             "
//           />

//           {/* Gradient Overlay */}
//           <div
//             className="
//               absolute
//               inset-0
//               bg-gradient-to-t
//               from-black
//               via-black/20
//               to-transparent
//             "
//           />

//           {/* Rating */}
//           <div
//             className="
//               absolute
//               left-4
//               top-4
//               flex
//               items-center
//               gap-2
//               rounded-full
//               bg-amber-400
//               px-3
//               py-1
//               text-sm
//               font-bold
//               text-black
//             "
//           >
//             <FaStar />
//             {game.rating}
//           </div>

//           {/* Content at bottom */}
//           <div
//             className="
//               absolute
//               bottom-0
//               left-0
//               right-0
//               p-5
//             "
//           >
//             <h3
//               className="
//                 line-clamp-1
//                 text-2xl
//                 font-bold
//                 text-white
//               "
//               style={{ fontFamily: "var(--font-primary-font)" }}
//             >
//               {game.name}
//             </h3>

//             <div className="mt-4 flex flex-wrap gap-2">
//               {game.parent_platforms?.slice(0, 3).map((platform) => (
//                 <span
//                   key={platform.platform.id}
//                   className="
//                     rounded-full
//                     bg-white/20
//                     px-3
//                     py-1
//                     text-xs
//                     text-white
//                   "
//                   style={{ fontFamily: "var(--font-secondary-font)" }}
//                 >
//                   {platform.platform.name}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </Link>
//     </AnimationWrapper>
//   );
// };

// export default GameCard;











// import { Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import AnimationWrapper from "../animationwrapper/AnimationWrapper";
// import { useState } from "react";

// const GameCard = ({ game }) => {
//   const [imageError, setImageError] = useState(false);
//   const hasImage = game?.background_image && !imageError;

//   return (
//     <AnimationWrapper animationType="fadeUp" delay={0.1}>
//       <Link
//         to={`/games/${game.id}`}
//         className="group block overflow-hidden rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-[var(--shadow)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[var(--shadow-hover)]"
//       >
//         <div className="relative overflow-hidden h-72 sm:h-80 lg:h-[350px]">
//           {hasImage ? (
//             <img
//               src={game.background_image}
//               alt={game.name}
//               className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               onError={() => setImageError(true)}
//             />
//           ) : (
//             <div className="flex items-center justify-center h-full bg-gradient-to-br from-brand-primary/40 to-purple-600/40">
//               <span className="text-xl sm:text-2xl font-bold text-white text-center px-4 drop-shadow-lg font-[var(--font-primary-font)]">
//                 {game.name}
//               </span>
//             </div>
//           )}

//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

//           {game.rating && (
//             <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-black">
//               <FaStar /> {game.rating}
//             </div>
//           )}

//           <div className="absolute bottom-0 left-0 right-0 p-5">
//             <h3 className="line-clamp-1 text-lg sm:text-2xl font-bold text-white font-[var(--font-primary-font)]">
//               {game.name}
//             </h3>
//             <div className="mt-3 flex flex-wrap gap-2">
//               {game.parent_platforms?.slice(0, 3).map((platform) => (
//                 <span
//                   key={platform.platform.id}
//                   className="rounded-full bg-white/20 px-3 py-1 text-xs text-white font-[var(--font-secondary-font)]"
//                 >
//                   {platform.platform.name}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </Link>
//     </AnimationWrapper>
//   );
// };

// export default GameCard;






import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import AnimationWrapper from "../animationwrapper/AnimationWrapper";
import { useState } from "react";

// ✅ Helper function to generate slug
const generateSlug = (id, name) => {
  const slugName = name
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${id}-${slugName}`;
};

const GameCard = ({ game }) => {
  const [imageError, setImageError] = useState(false);
  const hasImage = game?.background_image && !imageError;

  // ✅ Generate slug from id and name
  const gameSlug = generateSlug(game.id, game.name);

  return (
    <AnimationWrapper animationType="fadeUp" delay={0.1}>
      <Link
        to={`/games/${gameSlug}`}  // ✅ Use slug instead of id
        className="group block overflow-hidden rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-[var(--shadow)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[var(--shadow-hover)]"
      >
        <div className="relative overflow-hidden h-72 sm:h-80 lg:h-[350px]">
          {hasImage ? (
            <img
              src={game.background_image}
              alt={game.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gradient-to-br from-brand-primary/40 to-purple-600/40">
              <span className="text-xl sm:text-2xl font-bold text-white text-center px-4 drop-shadow-lg font-[var(--font-primary-font)]">
                {game.name}
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {game.rating && (
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-black">
              <FaStar /> {game.rating}
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="line-clamp-1 text-lg sm:text-2xl font-bold text-white font-[var(--font-primary-font)]">
              {game.name}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {game.parent_platforms?.slice(0, 3).map((platform) => (
                <span
                  key={platform.platform.id}
                  className="rounded-full bg-white/20 px-3 py-1 text-xs text-white font-[var(--font-secondary-font)]"
                >
                  {platform.platform.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </AnimationWrapper>
  );
};

export default GameCard;