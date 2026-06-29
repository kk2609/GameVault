import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import AnimationWrapper from "../../../Components/animationwrapper/AnimationWrapper";

const HomeNewsSidebar = ({ trendingTopics, categories, socialStats }) => {
  return (
    <AnimationWrapper
      animationType="fadeUp" // changed to fadeUp for better mobile experience
      delay={0.2}
      className="space-y-6 sm:space-y-8"
    >
      {/* About Widget */}
      <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-5 sm:p-6 shadow-[var(--shadow)]">
        <h4 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
          About
        </h4>
        <div className="space-y-2 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
          <p>Contacts</p>
          <p>Advertise</p>
          <p>Buy theme</p>
          <p>Work for us</p>
        </div>
        <div className="mt-4 text-xs text-[var(--text-secondary)]">
          <span className="font-[var(--font-primary-font)]">gillion</span>
          <span className="ml-2 font-[var(--font-secondary-font)]">
            MAY 2020
          </span>
        </div>
      </div>

      {/* Custom Ad */}
      <div className="rounded-3xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-6 sm:p-8 text-center border border-amber-500/30">
        <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 font-[var(--font-secondary-font)]">
          CUSTOM AD
        </p>
        <p className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
          AD PLACEHOLDER
        </p>
      </div>

      {/* Trending Topics */}
      <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-5 sm:p-6 shadow-[var(--shadow)]">
        <h4 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
          Trending
        </h4>
        <div className="space-y-2 sm:space-y-3">
          {trendingTopics.map((topic, idx) => (
            <p
              key={idx}
              className="text-sm text-[var(--text-secondary)] hover:text-brand-primary cursor-pointer transition-colors duration-300 font-[var(--font-secondary-font)]"
            >
              {topic}
            </p>
          ))}
        </div>
      </div>

      {/* Trending Products */}
      <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-5 sm:p-6 shadow-[var(--shadow)]">
        <h4 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
          Trending Products
        </h4>
        <div className="space-y-3">
          <div>
            <p className="text-xs font-semibold text-brand-primary font-[var(--font-secondary-font)]">
              Beauty
            </p>
            <p className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
              How To Find Good Spots For Nature Inspired Photo-Shoots
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-brand-primary font-[var(--font-secondary-font)]">
              Sport
            </p>
            <p className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
              Top 5 Unheard Interesting Facts About Basketball
            </p>
            <p className="text-xs text-[var(--text-secondary)] mt-1 font-[var(--font-secondary-font)]">
              Gillion, 3 years ago • 0 • 3 min read
            </p>
          </div>
        </div>
      </div>

      {/* Top Categories */}
      <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-5 sm:p-6 shadow-[var(--shadow)]">
        <h4 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
          Top Categories
        </h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-brand-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-brand-primary hover:bg-brand-primary/20 transition-colors duration-300 cursor-pointer font-[var(--font-secondary-font)]"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Stay Connected */}
      <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-5 sm:p-6 shadow-[var(--shadow)]">
        <h4 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
          Stay Connected
        </h4>
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {socialStats.map((social) => {
            const Icon = social.icon;
            return (
              <div
                key={social.platform}
                className="flex items-center gap-2 sm:gap-3 rounded-xl bg-[var(--bg-secondary)] p-2 sm:p-3 transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                <Icon className="text-base sm:text-lg text-brand-primary flex-shrink-0" />
                <div>
                  <p className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                    {social.count}
                  </p>
                  <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                    {social.platform}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default HomeNewsSidebar;
