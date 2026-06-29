// import GameCard from "../../../Components/gamecard/GameCard";
// import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";

// const GamesGrid = ({ games }) => {
//   return (
//     <StaggerContainer
//       delay={0.2}
//       staggerChildren={0.08}
//       className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//     >
//       {games.map((game) => (
//         <GameCard key={game.id} game={game} />
//       ))}
//     </StaggerContainer>
//   );
// };

// export default GamesGrid;

import GameCard from "../../../Components/gamecard/GameCard";
import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";

const GamesGrid = ({ games }) => {
  return (
    <StaggerContainer
      delay={0.2}
      staggerChildren={0.08}
      className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </StaggerContainer>
  );
};

export default GamesGrid;
