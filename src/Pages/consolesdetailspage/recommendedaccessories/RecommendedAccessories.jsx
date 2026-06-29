import { motion } from "framer-motion";

const mockAccessories = [
  { id: 1, name: "DualSense Wireless Controller", price: "₹5,990", image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=200" },
  { id: 2, name: "Pulse 3D Wireless Headset", price: "₹8,990", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200" },
  { id: 3, name: "Charging Station", price: "₹2,990", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=200" },
];

const RecommendedAccessories = ({ consoleId }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 sm:p-6 shadow-[var(--shadow)]"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)] mb-4">
        Recommended Accessories
      </h2>
      <div className="space-y-3">
        {mockAccessories.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-brand-primary/30 transition-colors duration-200"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-[var(--text-primary)] font-[var(--font-secondary-font)]">
                {item.name}
              </p>
              <p className="text-sm text-brand-primary font-[var(--font-primary-font)]">
                {item.price}
              </p>
            </div>
            {/* <button className="px-3 py-1.5 rounded-lg bg-brand-primary text-white text-xs font-semibold hover:bg-purple-600 transition-colors">
              Add
            </button> */}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecommendedAccessories;