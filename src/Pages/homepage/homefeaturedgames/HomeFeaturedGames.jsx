// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { FaArrowRight } from "react-icons/fa";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { getTrendingGames } from "../../../Api/gamesApi";
// import GameCard from "../../../Components/gamecard/GameCard";

// const HomeFeaturedGames = () => {
//   const [games, setGames] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchGames = async () => {
//       try {
//         const data = await getTrendingGames();
//         setGames(data);
//       } catch (error) {
//         console.error("Failed to fetch games:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGames();
//   }, []);

//   if (loading) {
//     return (
//       <section className="bg-white py-24">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="mb-10 h-8 w-72 animate-pulse rounded-lg bg-slate-200" />

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//             {[...Array(4)].map((_, index) => (
//               <div
//                 key={index}
//                 className="
//                 h-[500px]
//                 animate-pulse
//                 rounded-3xl
//                 bg-slate-200
//                 "
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="bg-white py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Header */}

//         <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//           <div>
//             <h2
//               className="
//               font-primary-font

//               mt-4

//               text-4xl
//               font-bold

//               text-slate-900

//               lg:text-5xl
//               "
//             >
//               Featured Games
//             </h2>

//             <p className="mt-3 max-w-2xl text-slate-500">
//               Discover the most popular games, top-rated releases and trending
//               titles from around the world.
//             </p>
//           </div>

//           <Link
//             to="/games"
//             className="
//             inline-flex
//             items-center
//             gap-2

//             rounded-xl
//             p-4
//             bg-violet-600
//             flex justify-center items-center

//             font-semibold
//             text-xs
//             text-white

//             transition-all

//             hover:bg-violet-700
//             "
//           >
//             View All Games
//             <FaArrowRight />
//           </Link>
//         </div>

//         {/* Swiper */}

//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           navigation
//           autoplay={{
//             delay: 3500,
//             disableOnInteraction: false,
//           }}
//           speed={900}
//           spaceBetween={24}
//           breakpoints={{
//             0: {
//               slidesPerView: 1.1,
//             },
//             640: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//             1400: {
//               slidesPerView: 4,
//             },
//           }}
//           className="pb-14"
//         >
//           {games.map((game) => (
//             <SwiperSlide key={game.id}>
//               <GameCard game={game} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default HomeFeaturedGames;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getTrendingGames } from "../../../Api/gamesApi";
import GameCard from "../../../Components/gamecard/GameCard";
import AnimationWrapper from "../../../Components/animationwrapper/AnimationWrapper";

const HomeFeaturedGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getTrendingGames();
        setGames(data);
      } catch (error) {
        console.error("Failed to fetch games:", error);
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
          <div className="mb-10 h-8 w-48 sm:w-72 animate-pulse rounded-lg bg-[var(--bg-secondary)]" />
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="h-[400px] sm:h-[450px] lg:h-[500px] animate-pulse rounded-3xl bg-[var(--bg-secondary)]" />
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                Featured Games
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                Discover the most popular games, top-rated releases and trending
                titles from around the world.
              </p>
            </div>
            <Link
              to="/games"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-0.5 font-secondary-font flex-shrink-0"
            >
              View All Games
              <FaArrowRight />
            </Link>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            speed={900}
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1.1, spaceBetween: 12 },
              480: { slidesPerView: 1.3 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1400: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-12 sm:pb-14"
          >
            {games.map((game) => (
              <SwiperSlide key={game.id}>
                <GameCard game={game} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default HomeFeaturedGames;