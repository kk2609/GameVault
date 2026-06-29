import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEye, FaBolt, FaWeight, FaBatteryFull, FaExpand } from "react-icons/fa";

const VrDevices = ({ devices }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const specIcons = {
    Resolution: FaEye,
    RefreshRate: FaBolt,
    FieldOfView: FaExpand,
    Weight: FaWeight,
    Battery: FaBatteryFull,
  };

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16 space-y-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
          VR Headsets
        </h2>
        <p className="mt-2 text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
          Explore the most advanced virtual reality devices available today.
        </p>
      </div>

      {devices.map((device, index) => (
        <motion.div
          key={device.id}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`flex flex-col ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-8 lg:gap-12 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-[var(--shadow)] transition-all duration-300 hover:shadow-[var(--shadow-hover)]`}
        >
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-2xl bg-[var(--bg-secondary)]">
              <img
                src={device.image}
                alt={device.name}
                className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400/1a1a2e/6C2BD9?text=No+Image";
                }}
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:w-1/2 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                  {device.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                  {device.brand}
                </p>
              </div>
              <span className="text-2xl font-bold text-brand-primary font-[var(--font-primary-font)]">
                {device.price}
              </span>
            </div>

            {device.badge && (
              <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold font-[var(--font-secondary-font)]">
                {device.badge}
              </span>
            )}

            {/* All Specs */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[var(--border-color)]">
              {Object.entries(device.specs).map(([key, value]) => {
                const Icon = specIcons[key] || FaEye;
                return (
                  <div
                    key={key}
                    className="flex items-center gap-2 px-2 py-1 rounded-lg bg-[var(--bg-secondary)]"
                  >
                    <Icon className="text-brand-primary text-sm" />
                    <span className="text-xs font-medium text-[var(--text-primary)] font-[var(--font-secondary-font)]">
                      {key}:
                    </span>
                    <span className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {device.features.slice(0, 3).map((feature, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/20 text-brand-primary text-xs font-semibold font-[var(--font-secondary-font)]"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* <button className="mt-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300 font-[var(--font-secondary-font)]">
              View Details
            </button> */}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default VrDevices;