// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { FaGamepad } from "react-icons/fa";
// import GameCard from "../../../Components/gamecard/GameCard";
// import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";

// const HandHeldSection = ({ games }) => {
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

//   if (!games || games.length === 0) return null;

//   return (
//     <section ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//         transition={{ duration: 0.5 }}
//         className="mb-8 flex items-center gap-4"
//       >
//         <FaGamepad className="text-4xl text-brand-primary" />
//         <div>
//           <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//             Handheld Gaming
//           </h2>
//           <p className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//             Gaming on the go with Nintendo Switch, Steam Deck & more
//           </p>
//         </div>
//         <Link
//           to="/games?platform=handheld"
//           className="ml-auto text-sm font-semibold text-brand-primary hover:underline font-[var(--font-secondary-font)]"
//         >
//           View All →
//         </Link>
//       </motion.div>

//       <StaggerContainer
//         delay={0.2}
//         staggerChildren={0.08}
//         className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//       >
//         {games.slice(0, 8).map((game) => (
//           <GameCard key={game.id} game={game} />
//         ))}
//       </StaggerContainer>
//     </section>
//   );
// };

// export default HandHeldSection;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGamepad } from "react-icons/fa";
import ConsoleCard from "../../../Components/consolecard/ConsoleCard";

const ACCENT = "#1A1A2E";

const HandHeldSection = ({ consoles }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  if (!consoles || consoles.length === 0) return null;

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-10 flex items-center gap-4"
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${ACCENT}33` }}
        >
          <FaGamepad size={24} style={{ color: "#fff" }} />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
            Handheld Gaming
          </h2>
          <p className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
            Gaming on the go — Steam Deck, ROG Ally, PS Vita & more
          </p>
        </div>
        <div
          className="ml-auto h-px flex-1 max-w-xs hidden sm:block"
          style={{ backgroundColor: `${ACCENT}33` }}
        />
      </motion.div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {consoles.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <ConsoleCard console={c} accentColor={ACCENT} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HandHeldSection;
