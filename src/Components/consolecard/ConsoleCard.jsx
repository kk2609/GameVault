// import AnimationWrapper from "../animationwrapper/AnimationWrapper";

// const ConsoleCard = ({ console }) => {
//   return (
//     <AnimationWrapper animationType="fadeUp" delay={0.1}>
//       <div
//         className="
//           group
//           overflow-hidden
//           rounded-3xl
//           border
//           border-[var(--border-color)]
//           bg-[var(--bg-card)]
//           shadow-[var(--shadow)]
//           transition-all
//           duration-300
//           hover:-translate-y-3
//           hover:shadow-[var(--shadow-hover)]
//         "
//       >
//         {/* Console Image */}
//         <div className="overflow-hidden p-6">
//           <img
//             src={console.image}
//             alt={console.name}
//             className="
//               h-64
//               w-full
//               object-contain
//               transition-transform
//               duration-500
//               group-hover:scale-110
//             "
//           />
//         </div>

//         {/* Content */}
//         <div className="space-y-3 p-6">
//           <h3
//             className="text-xl font-bold text-[var(--text-primary)]"
//             style={{ fontFamily: "var(--font-primary-font)" }}
//           >
//             {console.name}
//           </h3>

//           <p
//             className="text-[var(--text-secondary)]"
//             style={{ fontFamily: "var(--font-secondary-font)" }}
//           >
//             {console.brand}
//           </p>

//           <p
//             className="text-2xl font-bold text-brand-primary"
//             style={{ fontFamily: "var(--font-primary-font)" }}
//           >
//             {console.price}
//           </p>

//           <button
//             className="
//               mt-4
//               flex
//               w-full
//               items-center
//               justify-center
//               rounded-xl
//               bg-gradient-to-r
//               from-brand-primary
//               to-purple-600
//               p-3
//               text-sm
//               font-semibold
//               text-white
//               transition-all
//               duration-300
//               hover:shadow-lg
//               hover:shadow-brand-primary/30
//               hover:-translate-y-0.5
//             "
//             style={{ fontFamily: "var(--font-secondary-font)" }}
//           >
//             View Details
//           </button>
//         </div>
//       </div>
//     </AnimationWrapper>
//   );
// };

// export default ConsoleCard;

// import AnimationWrapper from "../animationwrapper/AnimationWrapper";

// const ConsoleCard = ({ console }) => {
//   // Destructure with fallbacks
//   const {
//     name,
//     brand,
//     image,
//     price,
//     originalPrice,
//     discount,
//     limitedOffer = false,
//   } = console;

//   return (
//     <AnimationWrapper animationType="fadeUp" delay={0.1}>
//       <div
//         className="
//           group
//           relative
//           overflow-hidden
//           rounded-3xl
//           border
//           border-[var(--border-color)]
//           bg-[var(--bg-card)]
//           shadow-[var(--shadow)]
//           transition-all
//           duration-300
//           hover:-translate-y-3
//           hover:shadow-[var(--shadow-hover)]
//         "
//       >
//         {/* Limited Time Offer Badge (Ribbon) */}
//         {limitedOffer && (
//           <div
//             className="
//               absolute
//               -right-10
//               top-6
//               z-10
//               w-40
//               rotate-45
//               bg-gradient-to-r
//               from-amber-500
//               to-orange-500
//               py-1
//               text-center
//               text-xs
//               font-bold
//               uppercase
//               tracking-wider
//               text-white
//               shadow-lg
//             "
//             style={{ fontFamily: "var(--font-primary-font)" }}
//           >
//             Limited Offer
//           </div>
//         )}

//         {/* Console Image */}
//         <div className="overflow-hidden p-6">
//           <img
//             src={image}
//             alt={name}
//             className="
//               h-64
//               w-full
//               object-contain
//               transition-transform
//               duration-500
//               group-hover:scale-110
//             "
//           />
//         </div>

//         {/* Content */}
//         <div className="space-y-3 p-6">
//           <h3
//             className="text-xl font-bold text-[var(--text-primary)]"
//             style={{ fontFamily: "var(--font-secondary-font)" }}
//           >
//             {name}
//           </h3>

//           <p
//             className="text-[var(--text-secondary)]"
//             style={{ fontFamily: "var(--font-secondary-font)" }}
//           >
//             {brand}
//           </p>

//           {/* Price Section with Discount */}
//           <div className="flex flex-wrap items-center gap-2">
//             {/* Original price (strikethrough) if provided */}
//             {originalPrice && (
//               <span
//                 className="text-sm text-[var(--text-secondary)] line-through"
//                 style={{ fontFamily: "var(--font-secondary-font)" }}
//               >
//                 {originalPrice}
//               </span>
//             )}
//             {/* Actual price */}
//             <span
//               className="text-2xl font-bold text-brand-primary"
//               style={{ fontFamily: "var(--font-secondary-font)" }}
//             >
//               {price}
//             </span>
//             {/* Discount badge */}
//             {discount && (
//               <span
//                 className="rounded-full bg-amber-500/20 px-2 py-1 text-xs font-bold text-amber-600 dark:text-amber-400"
//                 style={{ fontFamily: "var(--font-secondary-font)" }}
//               >
//                 -{discount}%
//               </span>
//             )}
//           </div>

//           <button
//             className="
//               mt-4
//               flex
//               w-full
//               items-center
//               justify-center
//               rounded-xl
//               bg-gradient-to-r
//               from-brand-primary
//               to-purple-600
//               p-3
//               text-sm
//               font-semibold
//               text-white
//               transition-all
//               duration-300
//               hover:shadow-lg
//               hover:shadow-brand-primary/30
//               hover:-translate-y-0.5
//             "
//             style={{ fontFamily: "var(--font-secondary-font)" }}
//           >
//             View Details
//           </button>
//         </div>
//       </div>
//     </AnimationWrapper>
//   );
// };

// export default ConsoleCard;
import { Link } from "react-router-dom";
import AnimationWrapper from "../animationwrapper/AnimationWrapper";

const ConsoleCard = ({
  console,
  accentColor = "#6C2BD9",
  basePath = "/consoles",
}) => {
  const {
    name,
    tagline,
    brand,
    image,
    price,
    originalPrice,
    discount,
    limitedOffer = false,
    badge,
    releaseYear,
    id,
  } = console;

  const accent = accentColor || "#6C2BD9";
  const detailPath = id ? `${basePath}/${id}` : "#";

  return (
    <AnimationWrapper animationType="fadeUp" delay={0.1}>
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-[var(--border-color)]
          bg-[var(--bg-card)]
          shadow-[var(--shadow)]
          transition-all
          duration-300
          hover:-translate-y-3
          hover:shadow-[var(--shadow-hover)]
        "
      >
        {/* Badge */}
        {badge && (
          <div
            className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider"
            style={{ backgroundColor: accent }}
          >
            {badge}
          </div>
        )}

        {/* Limited Offer Ribbon */}
        {limitedOffer && (
          <div
            className="
              absolute
              -right-10
              top-6
              z-10
              w-40
              rotate-45
              bg-gradient-to-r
              from-amber-500
              to-orange-500
              py-1
              text-center
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-white
              shadow-lg
            "
            style={{ fontFamily: "var(--font-primary-font)" }}
          >
            Limited Offer
          </div>
        )}

        {/* Image */}
        <div className="overflow-hidden p-6">
          <img
            src={image}
            alt={name}
            className="
              h-48 sm:h-56 lg:h-64
              w-full
              object-contain
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />
        </div>

        {/* Content */}
        <div className="space-y-3 p-6 pt-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3
                className="text-xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-primary-font)" }}
              >
                {name}
              </h3>
              {tagline && (
                <p className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                  {tagline}
                </p>
              )}
              {releaseYear && (
                <p className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)] opacity-70">
                  Released: {releaseYear}
                </p>
              )}
            </div>
            {brand && (
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${accent}22`, color: accent }}
              >
                {brand}
              </span>
            )}
          </div>

          {/* Price */}
          <div className="flex flex-wrap items-center gap-2">
            {originalPrice && (
              <span
                className="text-sm text-[var(--text-secondary)] line-through"
                style={{ fontFamily: "var(--font-secondary-font)" }}
              >
                {originalPrice}
              </span>
            )}
            <span
              className="text-2xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-secondary-font)" }}
            >
              {price}
            </span>
            {discount && (
              <span
                className="rounded-full bg-amber-500/20 px-2 py-1 text-xs font-bold text-amber-600 dark:text-amber-400"
                style={{ fontFamily: "var(--font-secondary-font)" }}
              >
                -{discount}%
              </span>
            )}
          </div>

          {/* ✅ View Details with state */}
          <Link
            to={detailPath}
            state={{ console }} // ← pass full console data
            className="
              mt-2
              flex
              w-full
              items-center
              justify-center
              rounded-xl
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:shadow-lg
              hover:-translate-y-0.5
              border border-white/20 dark:border-white/30
            "
            style={{
              background: `linear-gradient(to right, ${accent}, ${accent}dd)`,
              boxShadow: `0 4px 20px ${accent}44`,
              fontFamily: "var(--font-secondary-font)",
            }}
          >
            View Details
          </Link>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default ConsoleCard;
