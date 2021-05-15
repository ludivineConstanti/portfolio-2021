import styled from "styled-components";
import { motion } from "framer-motion";

export const vLetter = {
  initial: { opacity: 0, scale: 0, y: 15 },
  animate: { opacity: 1, scale: 1, y: 0 },
  whileHover: { scale: 0.5 },
};

export const SLetter = styled(motion.span)`
  display: inline-block;
`;

export const vScale = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  whileHover: { scale: 1.25, transition: { type: "spring", bounce: 0.5 } },
};

export const vStaggerChildren = {
  initial: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Needs to work both for left and right align content
export const hoverButtonLink = (direction) => ({
  x: [0, direction === "right" ? -10 : 10],
  transition: {
    repeat: Infinity,
    repeatType: "mirror",
    type: "easeInOut",
    duration: 0.5,
  },
});
