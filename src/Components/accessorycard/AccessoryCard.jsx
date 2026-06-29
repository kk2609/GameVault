import { FaArrowRight } from "react-icons/fa";

const AccessoryCard = ({ accessory }) => {
  const Icon = accessory.icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-[var(--shadow)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[var(--shadow-hover)]">
      {/* Limited Offer Ribbon */}
      {accessory.limitedOffer && (
        <div className="absolute -right-10 top-6 z-10 w-40 rotate-45 bg-gradient-to-r from-amber-500 to-orange-500 py-1 text-center text-[10px] font-bold uppercase tracking-wider text-white shadow-lg font-[var(--font-primary-font)]">
          Limited Offer
        </div>
      )}

      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={accessory.image}
          alt={accessory.name}
          className="h-48 sm:h-56 w-full object-contain p-3 sm:p-4 transition-transform duration-700 group-hover:scale-110"
        />
        {accessory.discount && (
          <span className="absolute bottom-3 left-3 rounded-full bg-amber-500/90 px-2.5 py-0.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm font-[var(--font-secondary-font)]">
            -{accessory.discount}%
          </span>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-0.5 text-xs text-white backdrop-blur-sm font-[var(--font-secondary-font)]">
          {accessory.category}
        </span>
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div
            className={`rounded-full bg-gradient-to-br ${accessory.color} p-4 text-3xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon />
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-bold text-[var(--text-secondary)] line-clamp-1 font-secondary-font">
          {accessory.name}
        </h3>
        <p className="mt-1 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
          {accessory.brand}
        </p>

        <div className="mt-3 flex items-center gap-2 flex-wrap">
          {accessory.originalPrice && (
            <span className="text-xs sm:text-sm text-[var(--text-secondary)] line-through font-[var(--font-secondary-font)]">
              {accessory.originalPrice}
            </span>
          )}
          <span className="text-lg sm:text-xl font-bold text-brand-primary font-[var(--font-secondary-font)]">
            {accessory.price}
          </span>
          {accessory.discount && (
            <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-bold text-amber-600 dark:text-amber-400 font-[var(--font-primary-font)]">
              -{accessory.discount}%
            </span>
          )}
        </div>

        {/* <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-0.5 font-[var(--font-secondary-font)]">
          View Details
        </button> */}
      </div>
    </div>
  );
};

export default AccessoryCard;
