import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { getTrendingGames } from "../../../Api/gamesApi";
import GameCard from "../../../Components/gamecard/GameCard";
import AnimationWrapper from "../../../Components/animationwrapper/AnimationWrapper";
import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";

const getRandomDiscount = () => Math.floor(Math.random() * 30) + 10;
const formatPrice = (value) => `₹${value}`;

const HomeWeeklyDeals = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getTrendingGames();
        const filtered = data.filter((game) => game.background_image);
        const withDeals = filtered.map((game) => ({
          ...game,
          discount: getRandomDiscount(),
          originalPrice: Math.floor(Math.random() * 5000) + 1000,
          dealPrice: 0,
        }));
        withDeals.forEach((game) => {
          game.dealPrice = Math.round(
            game.originalPrice * (1 - game.discount / 100),
          );
        });
        setGames(withDeals);
      } catch (error) {
        console.error("Failed to fetch weekly deals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  if (loading) {
    return (
      <section className="bg-[var(--bg-primary)] py-16 sm:py-20 lg:py-24 transition-colors duration-300">
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
      <section className="bg-[var(--bg-primary)] py-16 sm:py-20 lg:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 sm:mb-14 flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-block rounded-full bg-amber-500/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400 font-[var(--font-secondary-font)]">
                🔥 Limited Time Offers
              </span>
              <h2 className="mt-2 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                Weekly Deals
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                Grab the hottest discounts on top-rated games. Offers change
                every week – don't miss out!
              </p>
            </div>
            <Link
              to="/games"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 font-[var(--font-secondary-font)] flex-shrink-0"
            >
              View All Deals
              <FaArrowRight />
            </Link>
          </div>

          <StaggerContainer
            delay={0.3}
            staggerChildren={0.1}
            className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
          >
            {games.slice(0, 4).map((game) => (
              <div key={game.id} className="relative">
                <div className="absolute -top-2 -right-2 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg shadow-amber-500/30 font-[var(--font-primary-font)]">
                  -{game.discount}%
                </div>
                <GameCard game={game} />
                <div className="mt-3 flex items-center justify-between px-1">
                  <span className="text-xs sm:text-sm text-[var(--text-secondary)] line-through font-[var(--font-secondary-font)]">
                    {formatPrice(game.originalPrice)}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-amber-500 dark:text-amber-400 font-[var(--font-primary-font)]">
                    {formatPrice(game.dealPrice)}
                  </span>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default HomeWeeklyDeals;
