import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const StaggerContainer = ({
  children,
  className = "",
  delay = 0.2,
  staggerChildren = 0.1,
  threshold = 0.1,
  triggerOnce = true,
  ...props
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={itemVariants}>{child}</motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
};

export default StaggerContainer;
