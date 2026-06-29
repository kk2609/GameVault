// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// import { getLatestReleases } from "../../../Api/gamesApi";
// import GameCard from "../../../Components/gamecard/GameCard";

// const HomeLatestReleases = () => {
//     const [games, setGames] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchLatestGames = async () => {
//             try {
//                 const data = await getLatestReleases();
//                 setGames(data);
//             } catch (error) {
//                 console.error("Failed to fetch latest releases:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchLatestGames();
//     }, []);

//     if (loading) {
//         return (
//             <section className="bg-slate-50 py-24">
//                 <div className="mx-auto max-w-7xl px-6">

//                     <div className="mb-14">
//                         <div className="h-8 w-72 animate-pulse rounded-lg bg-slate-200" />
//                     </div>

//                     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//                         {[...Array(4)].map((_, index) => (
//                             <div
//                                 key={index}
//                                 className="
//                                 h-[500px]
//                                 animate-pulse
//                                 rounded-3xl
//                                 bg-slate-200
//                                 "
//                             />
//                         ))}
//                     </div>

//                 </div>
//             </section>
//         );
//     }

//     return (
//         <section className="bg-slate-50 py-24">
//             <div className="mx-auto max-w-7xl px-6">

//                 {/* Header */}

//                 <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

//                     <div>

//                         <span
//                             className="
//                             rounded-full
//                             bg-violet-100
//                             px-4
//                             py-2
//                             text-sm
//                             font-semibold
//                             text-violet-600
//                             "
//                         >
//                             Fresh Releases
//                         </span>

//                         <h2
//                             className="
//                             mt-4
//                             text-4xl
//                             font-bold
//                             text-slate-900
//                             lg:text-5xl
//                             "
//                         >
//                             Latest Releases
//                         </h2>

//                         <p className="mt-3 max-w-2xl text-slate-500">
//                             Explore the newest games recently released
//                             across PlayStation, Xbox, PC and Nintendo platforms.
//                         </p>

//                     </div>

//                     <Link
//                         to="/games"
//                         className="
//                         inline-flex
//                         items-center
//                         gap-2
//                         rounded-xl
//                         bg-violet-600
//                         px-6
//                         py-3
//                         font-semibold
//                         text-white
//                         transition-all
//                         hover:bg-violet-700
//                         "
//                     >
//                         View All Games
//                         <FaArrowRight />
//                     </Link>

//                 </div>

//                 {/* Games Grid */}

//                 <div
//                     className="
//                     grid
//                     gap-8
//                     md:grid-cols-2
//                     xl:grid-cols-4
//                     "
//                 >
//                     {games.slice(0, 4).map((game) => (
//                         <GameCard
//                             key={game.id}
//                             game={game}
//                         />
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default HomeLatestReleases;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { getLatestReleases } from "../../../Api/gamesApi";
import GameCard from "../../../Components/gamecard/GameCard";
import AnimationWrapper from "../../../Components/animationwrapper/AnimationWrapper";
import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";

const HomeLatestReleases = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestGames = async () => {
      try {
          const randomPage = Math.floor(Math.random() * 3) + 1; // ✅ pages 1–3 only
        const data = await getLatestReleases(randomPage);
        setGames(data.filter((g) => g.background_image)); // ✅ skip games with no image
      } catch (error) {
        console.error("Failed to fetch latest releases:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLatestGames();
  }, []);

  if (loading) {
    return (
      <section className="bg-[var(--bg-secondary)] py-16 sm:py-20 lg:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 sm:mb-14">
            <div className="h-8 w-48 sm:w-72 animate-pulse rounded-lg bg-[var(--bg-card)]" />
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="h-[400px] sm:h-[450px] lg:h-[500px] animate-pulse rounded-3xl bg-[var(--bg-card)]"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <AnimationWrapper animationType="fadeUp" delay={0.1}>
      <section className="bg-[var(--bg-secondary)] py-16 sm:py-20 lg:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 sm:mb-14 flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-block rounded-full bg-brand-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-brand-primary font-[var(--font-secondary-font)]">
                Fresh Releases
              </span>
              <h2 className="mt-2 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                Latest Releases
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                Explore the newest games recently released across PlayStation,
                Xbox, PC and Nintendo platforms.
              </p>
            </div>
            <Link
              to="/games"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-0.5 font-[var(--font-secondary-font)] flex-shrink-0"
            >
              View All Games
              <FaArrowRight />
            </Link>
          </div>

          <StaggerContainer
            delay={0.3}
            staggerChildren={0.1}
            className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
          >
            {games.slice(0, 4).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </StaggerContainer>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default HomeLatestReleases;