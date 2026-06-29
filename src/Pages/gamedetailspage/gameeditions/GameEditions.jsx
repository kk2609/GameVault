import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

const GameEditions = ({ game }) => {
  const editions = [
    {
      name: "Standard Edition",
      price: "$59.99",
      features: ["Base Game", "Pre-order Bonus"],
      popular: true,
    },
    {
      name: "Deluxe Edition",
      price: "$79.99",
      features: ["Base Game", "Season Pass", "Digital Artbook", "Soundtrack"],
      popular: false,
    },
    {
      name: "Collector's Edition",
      price: "$129.99",
      features: [
        "Base Game",
        "Season Pass",
        "Digital Artbook",
        "Soundtrack",
        "Steelbook Case",
        "Exclusive Figurine",
      ],
      popular: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-2xl sm:rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 sm:p-6 shadow-[var(--shadow)]"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
        Editions
      </h2>

      <div className="mt-4 space-y-3 sm:space-y-4">
        {editions.map((edition, idx) => (
          <div
            key={idx}
            className={`relative rounded-xl sm:rounded-2xl p-3 sm:p-4 border transition-all duration-300 ${
              edition.popular
                ? "border-brand-primary bg-brand-primary/5"
                : "border-[var(--border-color)] hover:border-brand-primary/50"
            }`}
          >
            {edition.popular && (
              <span className="absolute -top-2 right-3 sm:right-4 px-2.5 sm:px-3 py-0.5 rounded-full bg-brand-primary text-white text-[10px] sm:text-xs font-bold font-[var(--font-primary-font)]">
                Most Popular
              </span>
            )}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                  {edition.name}
                </h3>
                <ul className="mt-1.5 sm:mt-2 space-y-0.5 sm:space-y-1">
                  {edition.features.slice(0, 3).map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]"
                    >
                      <span className="text-brand-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                  {edition.features.length > 3 && (
                    <li className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                      +{edition.features.length - 3} more
                    </li>
                  )}
                </ul>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 flex-shrink-0">
                <p className="text-xl sm:text-2xl font-bold text-brand-primary font-[var(--font-primary-font)]">
                  {edition.price}
                </p>
                {/* <button className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 text-white text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300 font-[var(--font-secondary-font)]">
                  <FaShoppingCart className="text-[10px] sm:text-xs" />
                  Buy Now
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default GameEditions;