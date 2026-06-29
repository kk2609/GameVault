// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { FaHeadphones, FaCheckCircle, FaArrowRight } from "react-icons/fa";

// const GamingAudio = ({ heroProduct, products }) => {
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

//   return (
//     <section ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//         transition={{ duration: 0.5 }}
//         className="mb-10"
//       >
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//           Gaming Audio
//         </h2>
//         <p className="mt-2 text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//           Immerse yourself with premium gaming headsets and audio gear.
//         </p>
//       </motion.div>

//       {/* Hero Product Layout - Left: Image, Right: Details */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-[var(--shadow)] mb-8"
//       >
//         {/* Hero Image */}
//         <div className="lg:w-1/2 flex justify-center">
//           <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-2xl bg-[var(--bg-secondary)]">
//             <img
//               src={heroProduct.image}
//               alt={heroProduct.name}
//               className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-110"
//             />
//           </div>
//         </div>

//         {/* Hero Details */}
//         <div className="lg:w-1/2 space-y-4">
//           <div className="flex items-start justify-between">
//             <div>
//               <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//                 {heroProduct.name}
//               </h3>
//               <p className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//                 {heroProduct.brand}
//               </p>
//             </div>
//             <span className="text-2xl font-bold text-brand-primary font-[var(--font-primary-font)]">
//               {heroProduct.price}
//             </span>
//           </div>

//           {/* Features */}
//           <div className="space-y-2">
//             {heroProduct.features.map((feature, idx) => (
//               <div key={idx} className="flex items-center gap-2">
//                 <FaCheckCircle className="text-brand-primary text-sm" />
//                 <span className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//                   {feature}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <button className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300 font-[var(--font-secondary-font)]">
//             View Details
//             <FaArrowRight className="text-xs" />
//           </button>
//         </div>
//       </motion.div>

//       {/* Product Grid (4 items) */}
//       <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//         {products.map((product, idx) => (
//           <motion.div
//             key={product.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.4, delay: idx * 0.08 }}
//             className="group rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-hover)] text-center"
//           >
//             <div className="aspect-square overflow-hidden rounded-xl bg-[var(--bg-secondary)] mb-3">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-110"
//               />
//             </div>
//             <h4 className="text-sm font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//               {product.name}
//             </h4>
//             <p className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//               {product.brand}
//             </p>
//             <p className="text-sm font-bold text-brand-primary font-[var(--font-primary-font)] mt-1">
//               {product.price}
//             </p>
//             <button className="mt-2 px-4 py-1.5 rounded-lg bg-brand-primary/10 text-brand-primary text-xs font-semibold hover:bg-brand-primary hover:text-white transition-colors duration-300 font-[var(--font-secondary-font)]">
//               View Details
//             </button>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default GamingAudio;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCheckCircle,
  FaStar,
  FaBoxOpen,
  FaMicrochip,
  FaPlug,
  FaBatteryFull,
  FaWeightHanging,
} from "react-icons/fa";

const GamingAudio = ({ heroProduct, products }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const keySpecs = [
    { icon: FaMicrochip, label: heroProduct.specs.driver },
    { icon: FaBatteryFull, label: heroProduct.specs.battery },
    { icon: FaPlug, label: heroProduct.specs.connectivity },
    { icon: FaWeightHanging, label: heroProduct.specs.weight },
  ];

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-[var(--text-primary)] tracking-wide">
          Gaming Audio
        </h2>
        <p className="mt-2 text-sm text-[var(--text-secondary)] max-w-xl">
          Immerse yourself with premium gaming headsets and sound
          configurations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Hero Product */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 rounded-3xl bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-secondary)] border-2 border-brand-primary/30 p-6 sm:p-8 flex flex-col shadow-[var(--shadow)] relative overflow-hidden group"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-brand-primary/20 border border-brand-primary/40 rounded-full text-[10px] uppercase tracking-widest text-brand-primary font-bold">
                Hero Product
              </span>
              <span className="flex items-center gap-1 text-xs text-amber-400">
                <FaStar className="fill-amber-400" />
                <FaStar className="fill-amber-400" />
                <FaStar className="fill-amber-400" />
                <FaStar className="fill-amber-400" />
                <FaStar className="fill-amber-400/50" />
                <span className="text-[var(--text-secondary)] ml-1">(4.8)</span>
              </span>
            </div>
            <span className="text-xs text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full border border-[var(--border-color)]">
              🔥 Bestseller
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            {/* ✅ Increased image size: w-56 h-56 → w-72 h-72, glow blob also enlarged */}
            <div className="flex items-center justify-center relative min-h-[288px]">
              <div className="absolute w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
              <img
                src={heroProduct.image}
                alt={heroProduct.name}
                className="w-72 h-72 object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
              />
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h3 className="text-2xl font-black text-[var(--text-primary)] leading-tight tracking-tight">
                  {heroProduct.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] uppercase tracking-widest mt-0.5">
                  {heroProduct.brand}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {keySpecs.map((spec, idx) => {
                  const Icon = spec.icon;
                  return (
                    <span
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-[10px] font-medium text-brand-primary"
                    >
                      <Icon className="text-[10px]" /> {spec.label}
                    </span>
                  );
                })}
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[var(--text-secondary)]">
                {heroProduct.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-brand-primary text-[10px] flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[var(--border-color)]">
                <span className="text-2xl font-black text-brand-primary">
                  {heroProduct.price}
                </span>
              </div>

              <div className="pt-3 border-t border-[var(--border-color)]">
                <p className="text-[10px] uppercase tracking-widest text-[var(--text-secondary)] font-semibold mb-1.5 flex items-center gap-1.5">
                  <FaBoxOpen className="text-brand-primary" /> In the Box
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {heroProduct.inTheBox.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2.5 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full text-[var(--text-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-brand-primary/50 rounded-2xl p-4 flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-[var(--shadow)] hover:shadow-[var(--shadow-hover)]"
            >
              <div className="flex gap-4 items-center">
                <div className="w-20 h-20 bg-[var(--bg-secondary)] rounded-xl overflow-hidden p-2 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-[var(--text-primary)] truncate">
                    {product.name}
                  </h4>
                  <p className="text-[11px] text-[var(--text-secondary)] uppercase tracking-wider mt-0.5">
                    {product.brand}
                  </p>
                  <span className="text-xs font-extrabold text-brand-primary block mt-1">
                    {product.price}
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <span
                        key={key}
                        className="text-[9px] px-1.5 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded text-[var(--text-secondary)]"
                      >
                        {key}: {value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamingAudio;
