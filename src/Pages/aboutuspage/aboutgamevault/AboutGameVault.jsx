// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   FaGamepad,
//   FaUsers,
//   FaStar,
//   FaTrophy,
//   FaRocket,
//   FaHeart,
// } from "react-icons/fa";

// const AboutGameVault = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   const stats = [
//     {
//       icon: FaGamepad,
//       value: "10,000+",
//       label: "Games Available",
//     },
//     {
//       icon: FaUsers,
//       value: "50,000+",
//       label: "Happy Gamers",
//     },
//     {
//       icon: FaStar,
//       value: "4.9/5",
//       label: "Average Rating",
//     },
//     {
//       icon: FaTrophy,
//       value: "500+",
//       label: "Awards Won",
//     },
//   ];

//   const values = [
//     {
//       icon: FaRocket,
//       title: "Innovation",
//       description: "We constantly evolve to bring you the latest in gaming.",
//       color: "from-amber-500 to-orange-500",
//     },
//     {
//       icon: FaHeart,
//       title: "Passion",
//       description: "We put gamers first and share the love for gaming.",
//       color: "from-rose-500 to-pink-500",
//     },
//     {
//       icon: FaUsers,
//       title: "Community",
//       description: "We build features that gamers actually want.",
//       color: "from-blue-500 to-cyan-500",
//     },
//   ];

//   return (
//     <section
//       className="bg-[var(--bg-secondary)] py-16 sm:py-20 lg:py-24 transition-colors duration-300"
//       ref={ref}
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto"
//         >
//           <span className="inline-block rounded-full bg-brand-primary/10 px-4 py-1.5 text-xs font-semibold text-brand-primary font-[var(--font-secondary-font)]">
//             About GameVault
//           </span>
//           <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//             Built by Gamers, for Gamers
//           </h2>
//           <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed">
//             GameVault was born from a simple idea: create the ultimate gaming
//             destination where every player can find their next adventure.
//           </p>
//         </motion.div>

//         {/* Stats Grid */}
//         <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
//           {stats.map((stat, idx) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//                 className="text-center p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-hover)]"
//               >
//                 <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary mb-4">
//                   <Icon className="text-2xl" />
//                 </div>
//                 <p className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//                   {stat.value}
//                 </p>
//                 <p className="mt-1 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//                   {stat.label}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Values Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-16 grid gap-6 sm:gap-8 md:grid-cols-3"
//         >
//           {values.map((value, idx) => {
//             const Icon = value.icon;
//             return (
//               <div
//                 key={idx}
//                 className="group rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 shadow-[var(--shadow)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-hover)] text-center"
//               >
//                 <div
//                   className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${value.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
//                 >
//                   <Icon className="text-2xl" />
//                 </div>
//                 <h3 className="mt-5 text-xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//                   {value.title}
//                 </h3>
//                 <p className="mt-3 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed">
//                   {value.description}
//                 </p>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutGameVault;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import {
  FaGamepad,
  FaUsers,
  FaStar,
  FaTrophy,
} from "react-icons/fa";

import setupImg from "../../../assets/images/setup.jpg";

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const AboutGameVault = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const stats = [
    { icon: FaGamepad, value: 10000, label: "Games", suffix: "+" },
    { icon: FaUsers, value: 50000, label: "Gamers", suffix: "+" },
    { icon: FaStar, value: 4.9, label: "Rating", suffix: "/5" },
    { icon: FaTrophy, value: 500, label: "Awards", suffix: "+" },
  ];

  return (
    <section
      className="bg-[var(--bg-secondary)] py-20 sm:py-28 lg:py-32 transition-colors duration-300"
      ref={ref}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT – Content */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-semibold text-brand-primary uppercase tracking-widest font-[var(--font-secondary-font)]">
              About GameVault
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)] leading-tight">
              Built by Gamers,
              <br />
              <span className="text-brand-primary">for Gamers</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed">
              GameVault was born from a simple idea: create the ultimate gaming
              destination where every player can find their next adventure.
              We combine passion with technology to deliver an unmatched
              gaming experience.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-[var(--shadow)]"
                  >
                    <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary">
                      <Icon className="text-xl" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                        <AnimatedCounter end={stat.value} />
                        {stat.suffix}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT – Image */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={setupImg}
                alt="GameVault"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-white">
                  <p className="text-sm font-semibold font-[var(--font-primary-font)]">
                    🎮 10,000+ Games
                  </p>
                  <p className="text-xs text-white/70 font-[var(--font-secondary-font)]">
                    Available Now
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutGameVault;