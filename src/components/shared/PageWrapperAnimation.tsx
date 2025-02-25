// PageWrapper.jsx
import { motion } from "framer-motion";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  // Define smoother animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50, // Slight vertical movement for a smoother feel
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -50, // Slight vertical movement when exiting
    },
  };

  // Define a smoother transition with spring physics
  const pageTransition = {
    type: "spring", // Use spring for a bouncy, smooth feel
    stiffness: 100, // Controls the rigidity of the spring
    damping: 20, // Controls the oscillation (lower = more bouncy)
    mass: 0.5, // Controls the weight of the object
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ height: "100%" }} // Ensure the wrapper takes full height
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
