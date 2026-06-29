import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaVrCardboard,
  FaHeadset,
  FaGlasses,
  FaGamepad,
  FaUsers,
  FaCloud,
} from "react-icons/fa";
import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";

const VrFeatures = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const features = [
    {
      icon: FaVrCardboard,
      title: "Immersive Experience",
      description: "Step into fully immersive 3D worlds with stunning visuals, spatial audio, and realistic interactions.",
      color: "from-purple-500 to-pink-500",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: FaHeadset,
      title: "Next-Gen Headsets",
      description: "Lightweight, ergonomic headsets with high-resolution displays, wide field-of-view, and advanced tracking.",
      color: "from-blue-500 to-cyan-500",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: FaGlasses,
      title: "Crystal Clear Visuals",
      description: "Experience stunning 4K+ resolution per eye with HDR support and 120Hz refresh rates.",
      color: "from-amber-500 to-orange-500",
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      icon: FaGamepad,
      title: "Precision Controls",
      description: "Intuitive controllers with haptic feedback, adaptive triggers, and finger tracking.",
      color: "from-green-500 to-emerald-500",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: FaUsers,
      title: "Social VR",
      description: "Connect with friends in shared virtual spaces and multiplayer games.",
      color: "from-red-500 to-rose-500",
      gradient: "from-red-500/20 to-rose-500/20",
    },
    {
      icon: FaCloud,
      title: "Cloud-Powered Gaming",
      description: "Stream high-fidelity VR games with low latency and no downloads.",
      color: "from-indigo-500 to-violet-500",
      gradient: "from-indigo-500/20 to-violet-500/20",
    },
  ];

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
          What is <span className="text-brand-primary">VR Gaming</span>?
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
          Virtual Reality transforms how you play — putting you directly inside the game world.
        </p>
      </motion.div>

      {/* Features Grid – No Hover Effects */}
      <StaggerContainer
        delay={0.3}
        staggerChildren={0.1}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 shadow-[var(--shadow)] transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* Gradient Glow (static, no hover) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-30 rounded-3xl`}
              />

              {/* Number Badge */}
              <div className="relative z-10 flex items-start justify-between">
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                >
                  <Icon className="text-2xl" />
                </div>
                <span className="text-5xl font-black text-[var(--text-secondary)] opacity-5 font-[var(--font-primary-font)]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-4">
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Static bottom line (no hover animation) */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-16 bg-gradient-to-r ${feature.color} rounded-b-3xl`}
              />
            </motion.div>
          );
        })}
      </StaggerContainer>
    </section>
  );
};

export default VrFeatures;