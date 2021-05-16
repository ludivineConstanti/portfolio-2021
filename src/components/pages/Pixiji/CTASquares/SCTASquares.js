import styled from "styled-components";
import { motion } from "framer-motion";

import { tPixijiCTA } from "style/typo";

export const SCTASquares = styled(motion.p)`
  position: absolute;
  bottom: 5vw;
  width: 100vw;
  color: white;
  display: flex;
  justify-content: center;
  ${tPixijiCTA}
`;

const SText = `
    position: absolute;
`;

const vText = {
  initial: { opacity: 0 },
  animate: {
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 2,
      repeatDelay: 3,
    },
  },
};

export const vText1 = {
  ...vText,
  animate: { ...vText.animate, opacity: [0, 0, 0, 1] },
};

export const SText1 = styled(motion.span)`
  ${SText}
`;

export const vText2 = {
  ...vText,
  animate: { ...vText.animate, opacity: [1, 0, 0, 0] },
};

export const SText2 = styled(motion.span)`
  ${SText}
`;
