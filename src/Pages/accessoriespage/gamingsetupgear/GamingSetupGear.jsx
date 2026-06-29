// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { FaChair, FaArrowRight } from "react-icons/fa";
// import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";

// const GamingSetupGear = ({ devices }) => {
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
//           Setup Gear
//         </h2>
//         <p className="mt-2 text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//           Build your ultimate gaming station with premium chairs and cases.
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

// export default GamingSetupGear;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaRulerCombined,
  FaWeightHanging,
  FaBolt,
  FaCube,
  FaTag,
} from "react-icons/fa";

// ✅ Icon map for common spec keys
const specIconMap = {
  material: FaCube,
  adjustment: FaBolt,
  weight: FaWeightHanging,
  height: FaRulerCombined,
};

const GamingSetupGear = ({ devices }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="mx-auto max-w-7xl px-4 sm:px-6 py-16 border-t border-[var(--border-color)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-[var(--text-primary)] tracking-wide">
          Setup Gear
        </h2>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Build your structural framework matrix utilizing dynamic 360
          enclosures.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {devices.map((device, deviceIdx) => (
          <motion.div
            key={device.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: deviceIdx * 0.1 }}
            className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-6 shadow-[var(--shadow)] hover:shadow-[var(--shadow-hover)] hover:border-brand-primary/30 relative flex flex-col transition-all duration-300 group"
          >
            {/* Rotation badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
              {/* <span className="text-[10px] px-2 py-0.5 bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-md border border-[var(--border-color)] flex items-center gap-1">
                🔄 {device.rotation || "360°"}
              </span> */}
            </div>

            {/* ✅ Increased image container: h-56 → h-72 */}
            <div className="w-full h-72 bg-[var(--bg-secondary)] rounded-2xl flex items-center justify-center p-6 overflow-hidden relative mb-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--brand-primary)_0%,transparent_70%)] opacity-5" />
              {/* Subtle corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-brand-primary/30 rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-brand-primary/30 rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-brand-primary/30 rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-brand-primary/30 rounded-br-lg" />
              <img
                src={device.image}
                alt={device.name}
                className="max-h-full max-w-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
              />
            </div>

            <div className="space-y-4">
              {/* Name + Brand + Colors */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4">
                <div>
                  <h3 className="text-xl font-black text-[var(--text-primary)]">
                    {device.name}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] uppercase tracking-widest mt-0.5">
                    {device.brand}
                  </p>
                </div>
                {/* {device.colors && (
                  <div className="flex items-center gap-1.5 bg-[var(--bg-secondary)] p-1.5 rounded-full border border-[var(--border-color)]">
                    {device.colors.map((color, cIdx) => (
                      <button
                        key={cIdx}
                        className="w-4 h-4 rounded-full border border-black/40 hover:scale-125 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                )} */}
              </div>  

              {/* ✅ Variant comparison table (Aura PC Case style) */}
              {device.prices ? (
                <div className="space-y-2 text-xs">
                  <div className="grid grid-cols-3 font-bold text-[var(--text-secondary)] border-b border-[var(--border-color)] pb-1">
                    <span>Spec</span>
                    <span className="text-[var(--text-primary)]">
                      {device.prices.variant1}
                    </span>
                    <span className="text-[var(--text-primary)]">
                      {device.prices.variant2}
                    </span>
                  </div>
                  {device.specs &&
                    device.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="grid grid-cols-3 py-1.5 border-b border-[var(--border-color)] text-[var(--text-secondary)]"
                      >
                        <span className="font-medium text-[var(--text-secondary)]">
                          {spec.label}
                        </span>
                        <span className="truncate pr-2">{spec.val1}</span>
                        <span className="truncate text-[11px]">
                          {spec.val2}
                        </span>
                      </div>
                    ))}

                  {/* ✅ Extra description for PC Case */}
                  <div className="mt-4 pt-4 border-t border-[var(--border-color)]">
                    <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                      Engineered for maximum airflow and visual impact. Tempered
                      glass panels showcase your build while the steel chassis
                      keeps thermals in check — available in two performance
                      tiers.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {[
                        "Tempered Glass",
                        "ATX / Mid Tower",
                        "RGB Ready",
                        "Tool-free Build",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 text-[9px] px-2 py-0.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary font-medium"
                        >
                          <FaTag className="text-[8px]" /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* ✅ Single-price product (Secretlab Desk style) with enriched details */
                <div className="space-y-4">
                  {/* Price + spec pills row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-2xl font-black text-brand-primary">
                      {device.price}
                    </div>
                    {device.specs &&
                      typeof device.specs === "object" &&
                      !Array.isArray(device.specs) && (
                        <div className="flex flex-wrap gap-1.5">
                          {Object.entries(device.specs).map(([key, value]) => {
                            const Icon = specIconMap[key] || FaCube;
                            return (
                              <span
                                key={key}
                                className="flex items-center gap-1 text-[9px] px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full text-[var(--text-secondary)]"
                              >
                                <Icon className="text-[8px] text-brand-primary" />
                                <span className="text-brand-primary/70 font-medium capitalize">
                                  {key}:
                                </span>{" "}
                                {value}
                              </span>
                            );
                          })}
                        </div>
                      )}
                  </div>

                  {/* ✅ Description block */}
                  <div className="pt-3 border-t border-[var(--border-color)]">
                    <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                      A precision-engineered steel surface with ultra-smooth
                      finish, built for elite setups. The electric height
                      adjustment lets you seamlessly switch between sitting and
                      standing — optimized for marathon sessions.
                    </p>
                  </div>

                  {/* ✅ Highlight feature tags */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Electric Height Adjust",
                      "Magnetic Cable Management",
                      "Steel Surface",
                      "Anti-Slip Feet",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 text-[9px] px-2 py-0.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary font-medium"
                      >
                        <FaTag className="text-[8px]" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GamingSetupGear;
