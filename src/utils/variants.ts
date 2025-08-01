import { Variants } from "framer-motion";

export const fadeIn = (
  direction: "left" | "right" | "up" | "down",
  delay: number
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
