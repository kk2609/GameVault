// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// import PlayStationSection from "../playstationsection/PlayStationSection";
// import XboxSection from "../xboxsection/XboxSection";
// import NintendoSection from "../nintendosection/NintendoSection";
// import HandHeldSection from "../handheldsection/HandHeldSection";

// import {
//   playstationConsoles,
//   xboxConsoles,
//   nintendoConsoles,
//   handheldConsoles,
// } from "../consolesData";

// const ConsolesWrapper = () => {
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

//   return (
//     <main className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
//       {/* Hero Section */}
//       <section
//         ref={ref}
//         className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-[var(--bg-secondary)]"
//       >
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
//         </div>
//         <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//               Gaming Consoles
//             </h1>
//             <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed">
//               Explore specs, features, and everything included with today's top gaming consoles.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Console Sections */}
//       <div className="space-y-20 sm:space-y-24 py-12 sm:py-16 lg:py-20">
//         <PlayStationSection consoles={playstationConsoles} />
//         <XboxSection consoles={xboxConsoles} />
//         <NintendoSection consoles={nintendoConsoles} />
//         <HandHeldSection consoles={handheldConsoles} />
//       </div>
//     </main>
//   );
// };

// export default ConsolesWrapper;

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import PlayStationSection from "../playstationsection/PlayStationSection";
import XboxSection from "../xboxsection/XboxSection";
import NintendoSection from "../nintendosection/NintendoSection";
import HandHeldSection from "../handheldsection/HandHeldSection";

import {
  playstationConsoles,
  xboxConsoles,
  nintendoConsoles,
  handheldConsoles,
} from "../consolesData";

// ✅ Import banner image (you can use the same as games page or a dedicated one)
import consolesBanner from "../../../assets/images/consolepagebanner.jpg"; // or add a specific one

const ConsolesWrapper = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <main className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
      {/* Hero Section with Banner */}
      <section
        ref={ref}
        className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden"
      >
        {/* Background Image with blur */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: `url(${consolesBanner})`,
              filter: "blur(2px)",
            }}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[var(--font-primary-font)] drop-shadow-2xl">
              Gaming Consoles
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/90 font-[var(--font-secondary-font)] leading-relaxed drop-shadow-lg">
              Explore specs, features, and everything included with today's top gaming consoles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Console Sections */}
      <div className="space-y-20 sm:space-y-24 py-12 sm:py-16 lg:py-20">
        <PlayStationSection consoles={playstationConsoles} />
        <XboxSection consoles={xboxConsoles} />
        <NintendoSection consoles={nintendoConsoles} />
        <HandHeldSection consoles={handheldConsoles} />
      </div>
    </main>
  );
};

export default ConsolesWrapper;

  