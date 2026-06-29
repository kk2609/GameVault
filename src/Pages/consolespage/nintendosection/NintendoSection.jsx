// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { FaGamepad } from "react-icons/fa";
// import ConsoleCard from "../../../Components/consolecard/ConsoleCard";

// const ACCENT = "#E4000F";

// const NintendoSection = ({ consoles }) => {
//   const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

//   return (
//     <section ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.5 }}
//         className="mb-10 flex items-center gap-4"
//       >
//         <div
//           className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
//           style={{ backgroundColor: `${ACCENT}22` }}
//         >
//           <FaGamepad size={24} style={{ color: ACCENT }} />
//         </div>
//         <div>
//           <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//             Nintendo
//           </h2>
//           <p className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//             Family-friendly gaming — Switch OLED, Switch & Switch Lite
//           </p>
//         </div>
//         <div
//           className="ml-auto h-px flex-1 max-w-xs hidden sm:block"
//           style={{ backgroundColor: `${ACCENT}33` }}
//         />
//       </motion.div>

//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {consoles.map((c, i) => (
//           <motion.div
//             key={c.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.4, delay: i * 0.1 }}
//           >
//             <ConsoleCard console={c} accentColor={ACCENT} />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default NintendoSection;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGamepad } from "react-icons/fa";
import ConsoleCard from "../../../Components/consolecard/ConsoleCard";

const ACCENT = "#E4000F";

const NintendoSection = ({ consoles }) => {
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
          style={{ backgroundColor: `${ACCENT}22` }}
        >
          <FaGamepad size={24} style={{ color: ACCENT }} />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
            Nintendo
          </h2>
          <p className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
            Family-friendly gaming — Switch OLED, Switch & Switch Lite
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

export default NintendoSection;



