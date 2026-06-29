import { motion } from "framer-motion";
import { FaDesktop, FaWindows, FaMemory } from "react-icons/fa";

const GameRequirements = ({ game }) => {
  const requirements = game.platforms?.find((p) => p.requirements)?.requirements;

  const fallbackRequirements = {
    minimum: {
      os: "Windows 10 (64-bit)",
      processor: "Intel Core i5-4460 / AMD Ryzen 3 1200",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 960 / AMD Radeon R9 280",
      storage: "50 GB available space",
    },
    recommended: {
      os: "Windows 10/11 (64-bit)",
      processor: "Intel Core i7-8700 / AMD Ryzen 5 3600",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700",
      storage: "50 GB available space",
    },
  };

  const req = requirements || fallbackRequirements;

  const RequirementItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-start gap-2.5 sm:gap-3 p-1.5 sm:p-2 rounded-lg">
      <Icon className="text-brand-primary text-xs sm:text-sm mt-0.5 flex-shrink-0" />
      <div>
        <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
          {label}
        </p>
        <p className="text-xs sm:text-sm text-[var(--text-primary)] font-[var(--font-secondary-font)]">
          {value || "N/A"}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-2xl sm:rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 sm:p-6 shadow-[var(--shadow)]"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
        System Requirements
      </h2>

      <div className="mt-4 space-y-3 sm:space-y-4">
        {req.minimum && (
          <div className="rounded-xl sm:rounded-2xl bg-[var(--bg-secondary)] p-3 sm:p-4">
            <p className="text-xs sm:text-sm font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
              Minimum
            </p>
            <div className="mt-1.5 sm:mt-2 space-y-0.5 sm:space-y-1">
              <RequirementItem icon={FaWindows} label="OS" value={req.minimum.os} />
              <RequirementItem icon={FaDesktop} label="Processor" value={req.minimum.processor} />
              <RequirementItem icon={FaMemory} label="Memory" value={req.minimum.memory} />
              <RequirementItem icon={FaDesktop} label="Graphics" value={req.minimum.graphics} />
              <RequirementItem icon={FaDesktop} label="Storage" value={req.minimum.storage} />
            </div>
          </div>
        )}

        {req.recommended && (
          <div className="rounded-xl sm:rounded-2xl bg-[var(--bg-secondary)] p-3 sm:p-4 border border-brand-primary/20">
            <p className="text-xs sm:text-sm font-bold text-brand-primary font-[var(--font-primary-font)]">
              Recommended
            </p>
            <div className="mt-1.5 sm:mt-2 space-y-0.5 sm:space-y-1">
              <RequirementItem icon={FaWindows} label="OS" value={req.recommended.os} />
              <RequirementItem icon={FaDesktop} label="Processor" value={req.recommended.processor} />
              <RequirementItem icon={FaMemory} label="Memory" value={req.recommended.memory} />
              <RequirementItem icon={FaDesktop} label="Graphics" value={req.recommended.graphics} />
              <RequirementItem icon={FaDesktop} label="Storage" value={req.recommended.storage} />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default GameRequirements;