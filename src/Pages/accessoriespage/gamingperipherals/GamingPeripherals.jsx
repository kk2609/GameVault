// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { FaKeyboard, FaArrowRight } from "react-icons/fa";
// import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";

// const GamingPeripherals = ({ devices }) => {
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

//   return (
//     <section ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 border-t border-[var(--border-color)]">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//         transition={{ duration: 0.5 }}
//         className="mb-10"
//       >
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//           Peripherals
//         </h2>
//         <p className="mt-2 text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//           Precision keyboards and mice for the ultimate competitive edge.
//         </p>
//       </motion.div>

//       <StaggerContainer
//         delay={0.2}
//         staggerChildren={0.08}
//         className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
//       >
//         {devices.map((device) => (
//           <div
//             key={device.id}
//             className="group rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-[var(--shadow)] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[var(--shadow-hover)]"
//           >
//             <div className="aspect-square overflow-hidden bg-[var(--bg-secondary)]">
//               <img
//                 src={device.image}
//                 alt={device.name}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//             </div>
//             <div className="p-5 space-y-2">
//               <h3 className="text-lg font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//                 {device.name}
//               </h3>
//               <p className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//                 {device.brand}
//               </p>
//               <p className="text-lg font-bold text-brand-primary font-[var(--font-primary-font)]">
//                 {device.price}
//               </p>
//               <button className="w-full mt-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300 font-[var(--font-secondary-font)]">
//                 View Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </StaggerContainer>
//     </section>
//   );
// };

// export default GamingPeripherals;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";

const GamingPeripherals = ({ devices }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 py-16 border-t border-[var(--border-color)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-[var(--text-primary)] tracking-wide">Peripherals</h2>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">Precision keyboards and tactical mice modules mapped for competitive edge tracking.</p>
      </motion.div>

      <StaggerContainer delay={0.1} staggerChildren={0.06} className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {devices.map((device) => (
          <div
            key={device.id}
            className={`group rounded-2xl bg-[var(--bg-card)] border transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden shadow-[var(--shadow)] hover:shadow-[var(--shadow-hover)] ${device.isExploded ? "border-brand-primary/40 shadow-brand-primary/20" : "border-[var(--border-color)] hover:border-brand-primary/50"}`}
          >
            <div className="w-full aspect-video sm:aspect-square bg-[var(--bg-secondary)] p-4 flex items-center justify-center relative overflow-hidden">
              {device.isExploded && (
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-brand-primary text-white text-[9px] uppercase tracking-widest font-black rounded z-20 animate-pulse">Exploded Matrix</div>
              )}
              <img src={device.image} alt={device.name} className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110" />
            </div>

            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-brand-primary transition-colors line-clamp-1">{device.name}</h3>
              <p className="text-[11px] text-[var(--text-secondary)] uppercase tracking-widest">{device.brand}</p>

              {device.tags && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {device.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-brand-primary/10 text-brand-primary text-[10px] font-medium rounded-md border border-brand-primary/20">• {tag}</span>
                  ))}
                </div>
              )}

              <div className="mt-3 pt-3 border-t border-[var(--border-color)]">
                <span className="text-base font-black text-brand-primary">{device.price}</span>
                {device.specs && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {Object.entries(device.specs).map(([key, value]) => (
                      <span key={key} className="text-[9px] px-1.5 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded text-[var(--text-secondary)]">{key}: {value}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default GamingPeripherals;