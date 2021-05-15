import styled from "styled-components";
import { motion } from "framer-motion";

export const vLetter = {
  initial: { opacity: 0, scale: 0, y: 15 },
  animate: { opacity: 1, scale: 1, y: 0 },
};

// Needs to work both for left and right align content
export const hoverButtonLink = (direction) => ({
  x: [0, direction === "right" ? -10 : 10],
  transition: { repeat: Infinity, repeatType: "reverse", mass: 2 },
});

export const SLetter = styled(motion.span)`
  display: inline-block;
`;
