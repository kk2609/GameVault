// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { FaArrowRight, FaBullseye, FaEye, FaCompass } from "react-icons/fa";

// const OurMission = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   const cards = [
//     {
//       icon: FaBullseye,
//       title: "Our Mission",
//       description:
//         "To empower gamers with the best selection, unbeatable prices, and a community that shares the same passion for gaming.",
//       color: "from-brand-primary to-purple-600",
//     },
//     {
//       icon: FaEye,
//       title: "Our Vision",
//       description:
//         "To become the world's most trusted gaming platform, connecting millions of players to the games they love.",
//       color: "from-amber-500 to-orange-500",
//     },
//     {
//       icon: FaCompass,
//       title: "Our Promise",
//       description:
//         "We promise to deliver exceptional quality, secure transactions, and a seamless gaming experience every time.",
//       color: "from-green-500 to-emerald-500",
//     },
//   ];

//   return (
//     <section
//       className="bg-[var(--bg-primary)] py-16 sm:py-20 lg:py-24 transition-colors duration-300"
//       ref={ref}
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-12"
//         >
//           <span className="inline-block rounded-full bg-brand-primary/10 px-4 py-1.5 text-xs font-semibold text-brand-primary font-[var(--font-secondary-font)]">
//             What Drives Us
//           </span>
//           <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//             Our Mission & Vision
//           </h2>
//           <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed">
//             We're on a mission to redefine the gaming experience for players
//             everywhere.
//           </p>
//         </motion.div>

//         {/* Cards Grid */}
//         <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
//           {cards.map((card, idx) => {
//             const Icon = card.icon;
//             return (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//                 className="group rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 shadow-[var(--shadow)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-hover)]"
//               >
//                 <div
//                   className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
//                 >
//                   <Icon className="text-2xl" />
//                 </div>
//                 <h3 className="mt-5 text-xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//                   {card.title}
//                 </h3>
//                 <p className="mt-3 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed">
//                   {card.description}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-16 text-center"
//         >
//           <Link
//             to="/contact"
//             className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 px-8 py-4 font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-0.5 font-[var(--font-secondary-font)]"
//           >
//             Join Our Community
//             <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default OurMission;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight, FaBullseye, FaEye, FaCompass } from "react-icons/fa";

const OurMission = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const steps = [
    {
      number: "01",
      icon: FaBullseye,
      title: "Our Mission",
      description:
        "To empower gamers with the best selection, unbeatable prices, and a community that shares the same passion for gaming.",
      color: "from-brand-primary to-purple-600",
    },
    {
      number: "02",
      icon: FaEye,
      title: "Our Vision",
      description:
        "To become the world's most trusted gaming platform, connecting millions of players to the games they love.",
      color: "from-amber-500 to-orange-500",
    },
    {
      number: "03",
      icon: FaCompass,
      title: "Our Promise",
      description:
        "We promise to deliver exceptional quality, secure transactions, and a seamless gaming experience every time.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      className="bg-[var(--bg-primary)] py-16 sm:py-20 lg:py-24 transition-colors duration-300 relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-brand-primary/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block rounded-full bg-brand-primary/10 px-4 py-1.5 text-xs font-semibold text-brand-primary font-[var(--font-secondary-font)]">
            What Drives Us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
            Our Mission & Vision
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed">
            We're on a mission to redefine the gaming experience for players
            everywhere.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[var(--border-color)] hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative md:flex md:items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-brand-primary to-purple-600 text-white font-bold font-[var(--font-primary-font)] z-10 shadow-lg shadow-brand-primary/30">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div
                    className={`md:w-1/2 ${
                      isEven
                        ? "md:pr-16 md:text-right"
                        : "md:pl-16 md:text-left"
                    }`}
                  >
                    <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 shadow-[var(--shadow)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-hover)]">
                      <div
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg`}
                      >
                        <Icon className="text-2xl" />
                      </div>
                      <h3 className="mt-4 text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed">
                        {step.description}
                      </p>
                      {/* Mobile number badge */}
                      <span className="inline-block mt-4 text-xs font-bold text-brand-primary/60 font-[var(--font-primary-font)] md:hidden">
                        Step {step.number}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          {/* <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 px-8 py-4 font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-0.5 font-[var(--font-secondary-font)]"
          >
            Join Our Community
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;
