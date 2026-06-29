// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const AnimationWrapper = ({
//   children,
//   className = "",
//   animationType = "fadeUp",
//   delay = 0,
//   threshold = 0.1,
//   triggerOnce = true,
//   duration = 0.6,
//   ...props
// }) => {
//   const { ref, inView } = useInView({
//     threshold,
//     triggerOnce,
//   });

//   const animations = {
//     fadeUp: {
//       hidden: { opacity: 0, y: 50 },
//       visible: { opacity: 1, y: 0 },
//     },
//     fadeLeft: {
//       hidden: { opacity: 0, x: -50 },
//       visible: { opacity: 1, x: 0 },
//     },
//     fadeRight: {
//       hidden: { opacity: 0, x: 50 },
//       visible: { opacity: 1, x: 0 },
//     },
//     scale: {
//       hidden: { opacity: 0, scale: 0.8 },
//       visible: { opacity: 1, scale: 1 },
//     },
//     none: {
//       hidden: { opacity: 1 },
//       visible: { opacity: 1 },
//     },
//   };

//   const selected = animations[animationType] || animations.fadeUp;

//   return (
//     <motion.div
//       ref={ref}
//       className={className}
//       initial="hidden"
//       animate={inView ? "visible" : "hidden"}
//       variants={selected}
//       transition={{
//         duration,
//         delay,
//         ease: "easeOut",
//       }}
//       {...props}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default AnimationWrapper;

import React from "react";
import { motion } from "framer-motion";

const AnimationWrapper = ({
  children,
  className = "",
  animationType = "fadeUp",
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  duration = 0.6,
  ...props
}) => {
  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
    none: {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    },
  };

  const selectedAnimation = animations[animationType] || animations.fadeUp;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, amount: threshold }}
      variants={selectedAnimation}
      transition={{ duration, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;