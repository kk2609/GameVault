// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { FaArrowRight } from "react-icons/fa";

// const AboutHeroSection = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   return (
//     <section className="bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300 relative">
//       {/* Background decoration */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-3xl" />
//         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl" />
//       </div>

//       <div
//         className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 lg:py-36 relative z-10"
//         ref={ref}
//       >
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20"
//           >
//             <span className="text-xs font-semibold text-brand-primary font-[var(--font-secondary-font)] tracking-wide">
//               🎮 About GameVault
//             </span>
//           </motion.div>

//           {/* Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="mt-6"
//           >
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] text-[var(--text-primary)] font-[var(--font-primary-font)]">
//               We Are{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-600">
//                 GameVault
//               </span>
//             </h1>
//           </motion.div>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed"
//           >
//             We are passionate gamers and tech enthusiasts dedicated to bringing
//             you the best gaming experience. From the latest games to
//             cutting-edge consoles, we curate everything a gamer needs.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mt-10 flex flex-wrap items-center justify-center gap-4"
//           >
//             <Link
//               to="/contact"
//               className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 px-8 py-4 font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-0.5 font-[var(--font-secondary-font)]"
//             >
//               Get in Touch
//               <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>

//             <Link
//               to="/games"
//               className="rounded-xl border-2 border-brand-primary px-8 py-4 font-semibold text-sm text-brand-primary transition-all duration-300 hover:bg-brand-primary hover:text-white hover:shadow-lg hover:shadow-brand-primary/20 hover:-translate-y-0.5 font-[var(--font-secondary-font)]"
//             >
//               Explore Games
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutHeroSection;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";

import aboutHeroImg from "../../../assets/images/about-hero..jpg";

const AboutHeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="
        relative
        w-full
        min-h-[calc(100vh-80px)]
        overflow-hidden
        flex
        items-center
        justify-center
        bg-[var(--bg-primary)]
        transition-colors
        duration-300
      "
    >
      {/* Background Image */}
        <img
            src={aboutHeroImg}
            alt="About GameVault"
            className="absolute inset-0 h-full w-full object-cover"
        />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Top & Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-brand-primary/30 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
            🎮 Welcome to GameVault
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            mt-6
            font-[var(--font-primary-font)]
            text-5xl
            font-bold
            text-white
            sm:text-6xl
            md:text-7xl
          "
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mx-auto
            mt-6
            max-w-3xl
            font-[var(--font-secondary-font)]
            text-base
            leading-relaxed
            text-white/80
            sm:text-lg
            md:text-xl
          "
        >
          We are passionate gamers and tech enthusiasts dedicated to bringing
          you the best gaming experience. From the latest games to cutting-edge
          consoles, we curate everything a gamer needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-brand-primary
              to-purple-600
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-purple-500/30
            "
          >
            Get in Touch
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/games"
            className="
              rounded-xl
              border-2
              border-white/30
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/60
              hover:bg-white/10
            "
          >
            Explore Games
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
