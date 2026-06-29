// import { FaArrowRight, FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";
// import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";

// const HomeNewsContent = ({ featuredArticle, articles }) => {
//   return (
//     <StaggerContainer
//       delay={0.3}
//       staggerChildren={0.1}
//       className="lg:col-span-2"
//     >
//       {/* Featured Article (Large) */}
//       <div
//         className="
//           group
//           relative
//           overflow-hidden
//           rounded-3xl
//           bg-[var(--bg-card)]
//           border
//           border-[var(--border-color)]
//           shadow-[var(--shadow)]
//           transition-all
//           duration-500
//           hover:-translate-y-2
//           hover:shadow-[var(--shadow-hover)]
//         "
//       >
//         <img
//           src={featuredArticle.image}
//           alt={featuredArticle.title}
//           className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//         <div className="p-8">
//           <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
//             <span
//               className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary"
//               style={{ fontFamily: "var(--font-secondary-font)" }}
//             >
//               {featuredArticle.category}
//             </span>
//             <span className="flex items-center gap-1">
//               <FaUser className="text-xs" /> {featuredArticle.author}
//             </span>
//             <span className="flex items-center gap-1">
//               <FaCalendarAlt className="text-xs" /> {featuredArticle.date}
//             </span>
//             <span className="flex items-center gap-1">
//               <FaClock className="text-xs" /> {featuredArticle.readTime}
//             </span>
//           </div>
//           <h3
//             className="mt-4 text-2xl font-bold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-brand-primary lg:text-3xl"
//             style={{ fontFamily: "var(--font-primary-font)" }}
//           >
//             {featuredArticle.title}
//           </h3>
//           <p
//             className="mt-3 text-[var(--text-secondary)]"
//             style={{ fontFamily: "var(--font-secondary-font)" }}
//           >
//             {featuredArticle.excerpt}
//           </p>
//           <button
//             className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition-all duration-300 hover:gap-4"
//             style={{ fontFamily: "var(--font-secondary-font)" }}
//           >
//             Read More <FaArrowRight className="text-xs" />
//           </button>
//         </div>
//       </div>

//       {/* Article Grid (2 columns) */}
//       <div className="mt-8 grid gap-8 md:grid-cols-2">
//         {articles.map((article) => (
//           <div
//             key={article.id}
//             className="
//               group
//               overflow-hidden
//               rounded-3xl
//               bg-[var(--bg-card)]
//               border
//               border-[var(--border-color)]
//               shadow-[var(--shadow)]
//               transition-all
//               duration-500
//               hover:-translate-y-2
//               hover:shadow-[var(--shadow-hover)]
//             "
//           >
//             <img
//               src={article.image}
//               alt={article.title}
//               className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             <div className="p-6">
//               <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-secondary)]">
//                 <span
//                   className="rounded-full bg-brand-primary/10 px-2 py-1 text-xs font-semibold text-brand-primary"
//                   style={{ fontFamily: "var(--font-secondary-font)" }}
//                 >
//                   {article.category}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <FaCalendarAlt className="text-[10px]" /> {article.date}
//                 </span>
//               </div>
//               <h4
//                 className="mt-3 text-lg font-bold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-brand-primary"
//                 style={{ fontFamily: "var(--font-primary-font)" }}
//               >
//                 {article.title}
//               </h4>
//               <p
//                 className="mt-2 line-clamp-2 text-sm text-[var(--text-secondary)]"
//                 style={{ fontFamily: "var(--font-secondary-font)" }}
//               >
//                 {article.excerpt}
//               </p>
//               <div className="mt-4 flex items-center justify-between">
//                 <span className="text-xs text-[var(--text-secondary)]">
//                   {article.readTime}
//                 </span>
//                 <button
//                   className="text-sm font-semibold text-brand-primary transition-colors duration-300 hover:text-purple-600"
//                   style={{ fontFamily: "var(--font-secondary-font)" }}
//                 >
//                   Read More →
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </StaggerContainer>
//   );
// };

// export default HomeNewsContent;

import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import AnimationWrapper from "../../../Components/animationwrapper/AnimationWrapper";
import HomeNewsContent from "./HomeNewsContent";
import HomeNewsSidebar from "./HomeNewsSidebar";

const featuredArticle = {
  id: 1,
  title: "GTA VI Trailer Breaks All Records",
  excerpt:
    "The official trailer for Grand Theft Auto VI has become the most-viewed video game trailer in history, surpassing 100 million views in 24 hours.",
  image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
  author: "GameVault Staff",
  date: "Dec 5, 2024",
  readTime: "5 min read",
  category: "Trailer",
};

const articles = [
  {
    id: 2,
    title: "PlayStation 5 Pro Announced – Everything We Know",
    excerpt:
      "Sony confirms PlayStation 5 Pro is in development, featuring enhanced ray-tracing and 8K support.",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600",
    author: "Tech Team",
    date: "Nov 15, 2024",
    readTime: "3 min read",
    category: "Hardware",
  },
  {
    id: 3,
    title: "Xbox Game Pass Expands With 15 New Titles",
    excerpt:
      "Microsoft adds 15 new titles to Game Pass, including day-one releases and classic RPGs.",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600",
    author: "Gaming Editor",
    date: "Dec 1, 2024",
    readTime: "3 min read",
    category: "Subscription",
  },
  {
    id: 4,
    title: "Elden Ring DLC 'Shadow of the Erdtree' Revealed",
    excerpt:
      "FromSoftware reveals expansion featuring new areas, bosses, and lore.",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600",
    author: "RPG Expert",
    date: "Nov 30, 2024",
    readTime: "3 min read",
    category: "DLC",
  },
  {
    id: 5,
    title: "How To Climb The Career Ladder In Gaming Industry",
    excerpt:
      "Tips and strategies to advance your career in the video game industry.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
    author: "Career Coach",
    date: "Nov 28, 2024",
    readTime: "2 min read",
    category: "Career",
  },
  {
    id: 6,
    title: "Health Tips For Gamers – Benefits of Active Lifestyle",
    excerpt:
      "How to maintain a healthy lifestyle while enjoying your favorite games.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
    author: "Health Expert",
    date: "Nov 25, 2024",
    readTime: "3 min read",
    category: "Health",
  },
];

const trendingTopics = [
  "Japanese Unagi Dumplings That Will Leave You Speechless",
  "How To Find Good Spots For Nature Inspired Photo-Shoots",
  "Coolest Gaming Rig With NZXT Cooling System",
  "Top 5 Unheard Interesting Facts About Basketball",
];

const categories = ["All", "Food", "Cars", "News", "Lifestyle"];

const socialStats = [
  { platform: "Facebook", count: 1423, icon: FaFacebook },
  { platform: "Twitter", count: 727, icon: FaTwitter },
  { platform: "Instagram", count: 386, icon: FaInstagram },
  { platform: "YouTube", count: 284, icon: FaYoutube },
];

const HomeGamingNews = () => {
  return (
    <AnimationWrapper animationType="fadeUp" delay={0.1}>
      <section className="bg-[var(--bg-primary)] py-16 sm:py-20 lg:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 sm:mb-14">
            <span className="inline-block rounded-full bg-amber-500/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400 font-[var(--font-secondary-font)]">
              📰 Latest Updates
            </span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
              Gaming News
            </h2>
            <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
              Stay up-to-date with the latest announcements, trailers, and
              updates from the gaming world.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12 lg:grid-cols-3">
            <HomeNewsContent
              featuredArticle={featuredArticle}
              articles={articles}
            />
            <HomeNewsSidebar
              trendingTopics={trendingTopics}
              categories={categories}
              socialStats={socialStats}
            />
          </div>

          {/* <div className="mt-12 sm:mt-16 text-center">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 font-[var(--font-secondary-font)]"
            >
              View All News
              <FaArrowRight />
            </Link>
          </div> */}
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default HomeGamingNews;
