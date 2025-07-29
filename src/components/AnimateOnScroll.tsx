import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

const AnimateOnScroll = ({
  children,
  className = "",
}: AnimateOnScrollProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
      }}
      transition={{
        duration: 0.8,
        ease: [0.17, 0.55, 0.55, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
