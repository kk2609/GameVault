import { FaArrowRight, FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";
import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";

const HomeNewsContent = ({ featuredArticle, articles }) => {
  return (
    <StaggerContainer
      delay={0.3}
      staggerChildren={0.1}
      className="lg:col-span-2"
    >
      {/* Featured Article */}
      <div className="group relative overflow-hidden rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-[var(--shadow)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-hover)]">
        <img
          src={featuredArticle.image}
          alt={featuredArticle.title}
          className="h-48 sm:h-56 md:h-64 lg:h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="p-5 sm:p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[var(--text-secondary)]">
            <span className="rounded-full bg-brand-primary/10 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold text-brand-primary font-[var(--font-secondary-font)]">
              {featuredArticle.category}
            </span>
            <span className="flex items-center gap-1">
              <FaUser className="text-xs" /> {featuredArticle.author}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendarAlt className="text-xs" /> {featuredArticle.date}
            </span>
            <span className="flex items-center gap-1">
              <FaClock className="text-xs" /> {featuredArticle.readTime}
            </span>
          </div>
          <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-brand-primary font-[var(--font-primary-font)]">
            {featuredArticle.title}
          </h3>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
            {featuredArticle.excerpt}
          </p>
          {/* <button className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition-all duration-300 hover:gap-4 font-[var(--font-secondary-font)]">
            Read More <FaArrowRight className="text-xs" />
          </button> */}
        </div>
      </div>

      {/* Article Grid */}
      <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
        {articles.map((article) => (
          <div
            key={article.id}
            className="group overflow-hidden rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-[var(--shadow)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-hover)]"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-40 sm:h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-secondary)]">
                <span className="rounded-full bg-brand-primary/10 px-2 py-0.5 text-xs font-semibold text-brand-primary font-[var(--font-secondary-font)]">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-[10px]" /> {article.date}
                </span>
              </div>
              <h4 className="mt-2 sm:mt-3 text-base sm:text-lg font-bold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-brand-primary font-[var(--font-primary-font)]">
                {article.title}
              </h4>
              <p className="mt-1 sm:mt-2 line-clamp-2 text-xs sm:text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                {article.excerpt}
              </p>
              <div className="mt-3 sm:mt-4 flex items-center justify-between">
                <span className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                  {article.readTime}
                </span>
                {/* <button className="text-sm font-semibold text-brand-primary transition-colors duration-300 hover:text-purple-600 font-[var(--font-secondary-font)]">
                  Read More →
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </StaggerContainer>
  );
};

export default HomeNewsContent;
  