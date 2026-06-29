import { motion } from "framer-motion";
import GameCard from "../../../Components/gamecard/GameCard";
import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";

const WishListItems = ({ items }) => {
  return (
    <StaggerContainer
      delay={0.3}
      staggerChildren={0.08}
      className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {items.map((game) => (
        <motion.div
          key={game.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <GameCard game={game} />
        </motion.div>
      ))}
    </StaggerContainer>
  );
};

export default WishListItems;