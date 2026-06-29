import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaGamepad, FaGhost } from "react-icons/fa";
import AnimationWrapper from "../../Components/animationwrapper/AnimationWrapper";

const PageNotFound = () => {
  return (
    <AnimationWrapper animationType="fadeUp" delay={0.1}>
      <main className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4 overflow-hidden relative transition-colors duration-300">
        {/* Soft Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-3xl" />
        </div>

        {/* Main Card */}
        <div className="relative z-10 max-w-2xl w-full">
          <div className="bg-[var(--bg-card)] border-4 border-[var(--border-color)] rounded-3xl p-8 sm:p-12 shadow-2xl shadow-brand-primary/5 text-center relative overflow-hidden">
            {/* Subtle Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-white/5" />

            {/* Decorative Corner Brackets */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-primary/30" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-brand-primary/30" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-brand-primary/30" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-brand-primary/30" />

            {/* Content */}
            <div className="space-y-6">
              {/* Ghost Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex justify-center text-8xl sm:text-9xl text-brand-primary/20 dark:text-brand-primary/10"
              >
                <FaGhost />
              </motion.div>

              {/* 404 Heading */}
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-8xl sm:text-9xl font-black font-[var(--font-primary-font)] text-[var(--text-primary)] leading-none tracking-tighter"
              >
                404
              </motion.h1>

              {/* Game Over Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center justify-center gap-3"
              >
                <div className="h-px w-12 bg-brand-primary/30" />
                <span className="text-lg sm:text-xl font-bold text-brand-primary uppercase tracking-[0.3em] font-[var(--font-primary-font)]">
                  Game Over
                </span>
                <div className="h-px w-12 bg-brand-primary/30" />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed max-w-sm mx-auto"
              >
                The page you're looking for doesn't exist. Maybe it's time to start a new game?
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <Link
                  to="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 text-white font-bold text-sm hover:shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-0.5 transition-all duration-300 font-[var(--font-secondary-font)]"
                >
                  <FaHome />
                  Back to Home
                </Link>
                <Link
                  to="/games"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] text-[var(--text-primary)] font-bold text-sm hover:border-brand-primary hover:text-brand-primary hover:-translate-y-0.5 transition-all duration-300 font-[var(--font-secondary-font)]"
                >
                  <FaGamepad />
                  Browse Games
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Footer Error Code */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 text-center text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)] opacity-50 tracking-widest"
          >
            ERROR 404 – PAGE NOT FOUND
          </motion.div>
        </div>
      </main>
    </AnimationWrapper>
  );
};

export default PageNotFound;