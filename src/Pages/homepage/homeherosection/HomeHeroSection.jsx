// import { Link } from "react-router-dom";
// import { FaGamepad, FaShieldAlt, FaCreditCard, FaGift } from "react-icons/fa";

// import Ps5 from "../../../assets/images/Ps5.png";

// const HomeHeroSection = () => {
//   return (
//     <section className="bg-white overflow-hidden">
//       <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
//         <div className="grid items-center gap-16 lg:grid-cols-2">
//           {/* LEFT CONTENT */}

//           <div>
//             <h1
//               className="
//               font-primary-font

//               mt-8

//               text-5xl
//               font-bold
//               leading-tight

//               text-slate-900

//               lg:text-7xl
//               "
//             >
//               DISCOVER.
//               <br />
//               PLAY.
//               <br />
//               <span className="text-violet-600">DOMINATE.</span>
//             </h1>

//             <p
//               className="
//               mt-6

//               max-w-xl

//               text-lg

//               text-slate-600
//               "
//             >
//               Explore thousands of games, consoles, accessories, trailers and
//               screenshots all in one premium gaming platform.
//             </p>

//             {/* Buttons */}

//             <div className="mt-10 flex flex-wrap gap-4">
//               <Link
//                 to="/games"
//                 className="
//                 rounded-xl
//                 bg-violet-600
//                 flex flex-col justify-center items-center
//                 p-4
//                 font-semibold
//                 text-xs
//                 transition-all

//                 hover:bg-violet-700
//                 "
//               >
//                 Explore Games
//               </Link>

//               <Link
//                 to="/consoles"
//                 className="
//                 rounded-xl

//                 border-2
//                 border-cyan-500

//                 p-4

//                 flex flex-col justify-center items-center

//                 font-semibold
//                 text-xs

//                 text-cyan-600

//                 transition-all

//                 hover:bg-cyan-500
//                 hover:text-white
//                 "
//               >
//                 Browse Consoles
//               </Link>
//             </div>

//             {/* Features */}

//             <div
//               className="
//               mt-12

//               grid
//               grid-cols-2

//               gap-6

//               lg:grid-cols-4
//               "
//             >
//               <div className="flex items-center gap-3">
//                 <FaGamepad className="text-xl text-violet-600" />

//                 <div>
//                   <h4 className="text-sm font-semibold text-slate-900">
//                     Games
//                   </h4>

//                   <p className="text-xs text-slate-500">10,000+</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <FaShieldAlt className="text-xl text-violet-600" />

//                 <div>
//                   <h4 className="text-sm font-semibold text-slate-900">
//                     Secure
//                   </h4>

//                   <p className="text-xs text-slate-500">Payments</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <FaCreditCard className="text-xl text-violet-600" />

//                 <div>
//                   <h4 className="text-sm font-semibold text-slate-900">
//                     Deals
//                   </h4>

//                   <p className="text-xs text-slate-500">Best Prices</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <FaGift className="text-xl text-violet-600" />

//                 <div>
//                   <h4 className="text-sm font-semibold text-slate-900">
//                     Rewards
//                   </h4>

//                   <p className="text-xs text-slate-500">Weekly</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}

//           <div className="relative flex justify-center">
//             {/* Purple Glow */}

//             <div
//               className="
//               absolute

//               h-[450px]
//               w-[450px]

//               rounded-full

//               bg-violet-500/20

//               blur-3xl
//               "
//             />

//             {/* PS5 */}

//             <img
//               src={Ps5}
//               alt="PlayStation 5"
//               className="
//               relative
//               z-10

//               w-full
//               max-w-md

//               drop-shadow-[0_0_50px_rgba(124,58,237,0.45)]
//               "
//             />

//             {/* Floating Card */}

//             <div
//               className="
//               absolute

//               bottom-10
//               right-0

//               z-20

//               w-64

//               rounded-2xl

//               border
//               border-slate-200

//               bg-white

//               p-5

//               shadow-2xl
//               "
//             >
//               <p className="text-xs font-medium text-violet-600">
//                 FEATURED CONSOLE
//               </p>

//               <h3
//                 className="
//                 mt-2

//                 text-lg
//                 font-bold

//                 text-slate-900
//                 "
//               >
//                 PlayStation 5
//               </h3>

//               <p
//                 className="
//                 mt-2

//                 text-2xl
//                 font-bold

//                 text-violet-600
//                 "
//               >
//                 ₹54,990
//               </p>

//               <p
//                 className="
//                 mt-2

//                 text-sm

//                 text-slate-500
//                 "
//               >
//                 Available Now
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeHeroSection;

// import { Link } from "react-router-dom";
// import { FaGamepad, FaShieldAlt, FaCreditCard, FaGift } from "react-icons/fa";
// import AnimationWrapper from "../../../components/animationwrapper/AnimationWrapper";
// import StaggerContainer from "../../../components/staggercontainer/StaggerContainer";
// import Ps5 from "../../../assets/images/Ps5.png";

// const HomeHeroSection = () => {
//   return (
//     <AnimationWrapper animationType="fadeUp" delay={0.1}>
//       <section className="bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
//           <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-2">
//             {/* LEFT */}
//             <div>
//               <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-[var(--text-primary)] font-[var(--font-primary-font)]">
//                 DISCOVER.
//                 <br />
//                 PLAY.
//                 <br />
//                 <span className="text-brand-primary">DOMINATE.</span>
//               </h1>

//               <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//                 Explore thousands of games, consoles, accessories, trailers and
//                 screenshots all in one premium gaming platform.
//               </p>

//               <StaggerContainer
//                 delay={0.4}
//                 staggerChildren={0.15}
//                 className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4"
//               >
//                 <Link
//                   to="/games"
//                   className="rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 px-6 py-3 sm:px-8 sm:py-4 font-semibold text-xs sm:text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-0.5 font-[var(--font-secondary-font)]"
//                 >
//                   Explore Games
//                 </Link>
//                 <Link
//                   to="/consoles"
//                   className="rounded-xl border-2 border-brand-primary px-6 py-3 sm:px-8 sm:py-4 font-semibold text-xs sm:text-sm text-brand-primary transition-all duration-300 hover:bg-brand-primary hover:text-white hover:shadow-lg hover:shadow-brand-primary/20 hover:-translate-y-0.5 font-[var(--font-secondary-font)]"
//                 >
//                   Browse Consoles
//                 </Link>
//               </StaggerContainer>

//               <StaggerContainer
//                 delay={0.6}
//                 staggerChildren={0.1}
//                 className="mt-10 sm:mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
//               >
//                 <div className="flex items-center gap-3">
//                   <FaGamepad className="text-xl text-brand-primary flex-shrink-0" />
//                   <div>
//                     <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//                       Games
//                     </h4>
//                     <p className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//                       10,000+
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <FaShieldAlt className="text-xl text-brand-primary flex-shrink-0" />
//                   <div>
//                     <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//                       Secure
//                     </h4>
//                     <p className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//                       Payments
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <FaCreditCard className="text-xl text-brand-primary flex-shrink-0" />
//                   <div>
//                     <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//                       Deals
//                     </h4>
//                     <p className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//                       Best Prices
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <FaGift className="text-xl text-brand-primary flex-shrink-0" />
//                   <div>
//                     <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//                       Rewards
//                     </h4>
//                     <p className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//                       Weekly
//                     </p>
//                   </div>
//                 </div>
//               </StaggerContainer>
//             </div>

//             {/* RIGHT IMAGE */}
//             <div className="relative flex justify-center mt-8 lg:mt-0">
//               <div className="absolute h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[450px] lg:w-[450px] rounded-full bg-brand-primary/20 blur-3xl" />
//               <img
//                 src={Ps5}
//                 alt="PlayStation 5"
//                 className="relative z-10 w-full max-w-xs sm:max-w-sm lg:max-w-md drop-shadow-[0_0_50px_rgba(108,43,217,0.45)]"
//               />
//               <div className="absolute -bottom-4 right-0 sm:bottom-10 z-20 w-48 sm:w-56 lg:w-64 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 sm:p-5 shadow-[var(--shadow)] transition-colors duration-300">
//                 <p className="text-xs font-medium text-brand-primary font-[var(--font-secondary-font)]">
//                   FEATURED CONSOLE
//                 </p>
//                 <h3 className="mt-2 text-base sm:text-lg font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//                   PlayStation 5
//                 </h3>
//                 <p className="mt-2 text-xl sm:text-2xl font-bold text-brand-primary font-[var(--font-primary-font)]">
//                   ₹54,990
//                 </p>
//                 <p className="mt-2 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//                   Available Now
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </AnimationWrapper>
//   );
// };

// export default HomeHeroSection;

import { Link } from "react-router-dom";
import { FaGamepad, FaShieldAlt, FaCreditCard, FaGift } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import AnimationWrapper from "../../../Components/animationwrapper/AnimationWrapper";
import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";
import Ps5 from "../../../assets/images/Ps5.png";

const HomeHeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300 relative">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24 relative z-10">
        <div
          className="grid items-center gap-8 lg:gap-16 lg:grid-cols-2"
          ref={ref}
        >
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20"
            >
              <span className="text-xs font-semibold text-brand-primary font-[var(--font-secondary-font)]">
                🎮 Ultimate Gaming Destination
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-[var(--text-primary)] font-[var(--font-primary-font)]">
                DISCOVER.
                <br />
                PLAY.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-600">
                  DOMINATE.
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed"
            >
              Explore thousands of games, consoles, accessories, trailers and
              screenshots all in one premium gaming platform.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-3 sm:gap-4"
            >
              <Link
                to="/games"
                className="group rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 px-6 py-3 sm:px-8 sm:py-4 font-semibold text-xs sm:text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-0.5 font-[var(--font-secondary-font)]"
              >
                Explore Games
                <FaArrowRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/consoles"
                className="rounded-xl border-2 border-brand-primary px-6 py-3 sm:px-8 sm:py-4 font-semibold text-xs sm:text-sm text-brand-primary transition-all duration-300 hover:bg-brand-primary hover:text-white hover:shadow-lg hover:shadow-brand-primary/20 hover:-translate-y-0.5 font-[var(--font-secondary-font)]"
              >
                Browse Consoles
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 sm:mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
            >
              <div className="flex items-center gap-3">
                <FaGamepad className="text-xl text-brand-primary flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                    10,000+
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                    Games
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-xl text-brand-primary flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                    Secure
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                    Payments
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaCreditCard className="text-xl text-brand-primary flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                    Best Prices
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                    Deals
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaGift className="text-xl text-brand-primary flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                    Rewards
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                    Weekly
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center mt-8 lg:mt-0"
          >
            {/* Glow */}
            <div className="absolute h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[450px] lg:w-[450px] rounded-full bg-brand-primary/20 blur-3xl" />

            {/* PS5 */}
            <img
              src={Ps5}
              alt="PlayStation 5"
              className="relative z-10 w-full max-w-xs sm:max-w-sm lg:max-w-md drop-shadow-[0_0_50px_rgba(108,43,217,0.35)]"
            />

            {/* Floating Card */}
            {/* <div className="absolute -bottom-4 right-0 sm:bottom-10 z-20 w-48 sm:w-56 lg:w-64 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 sm:p-5 shadow-[var(--shadow)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <p className="text-xs font-medium text-brand-primary font-[var(--font-secondary-font)]">
                FEATURED CONSOLE
              </p>
              <h3 className="mt-2 text-base sm:text-lg font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                PlayStation 5
              </h3>
              <p className="mt-2 text-xl sm:text-2xl font-bold text-brand-primary font-[var(--font-primary-font)]">
                ₹41,490
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                Available Now
              </p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
