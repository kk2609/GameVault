// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import gamesBanner from "../../../assets/images/gamespagehero.jpg";

// const GamesHero = () => {
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

//   return (
//     <section
//       ref={ref}
//       className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
//     >
//       {/* Background Image with blur */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
//           style={{
//             backgroundImage: `url(${gamesBanner})`,
//             filter: "blur(2px)",
//           }}
//         />
//       </div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60" />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

//       {/* Content */}
//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[var(--font-primary-font)] drop-shadow-2xl">
//             All Games
//           </h1>
//           <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/90 font-[var(--font-secondary-font)] leading-relaxed drop-shadow-lg">
//             Discover thousands of games across all platforms. Find your next
//             adventure today!
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default GamesHero;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gamesBanner from "../../../assets/images/gamespagehero.jpg";

const GamesHero = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative pb-16 sm:pb-20 lg:pb-24 overflow-hidden min-h-[50vh] flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(${gamesBanner})`,
            // filter: "blur(0.5px)",
          }}
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[var(--font-primary-font)] drop-shadow-2xl">
            All Games
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/90 font-[var(--font-secondary-font)] leading-relaxed drop-shadow-lg">
            Discover thousands of games across all platforms. Find your next
            adventure today!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GamesHero;

