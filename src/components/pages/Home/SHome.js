import styled from "styled-components";
import { motion } from "framer-motion";

import { vLetter } from "style/SG";

import {
  borderMargins,
  borderMarginsM,
  breakPointD,
  breakPointT,
  borderMargins3M,
} from "style/g";
import { tText } from "style/typo";

export const SText = styled(motion.p)`
  ${tText}
  display: block;
  padding-bottom: 20px;
`;

const textContainerWidth = "25vw";

export const STextContainer = styled.main`
  position: fixed;
  color: white;
  text-align: left;
  top: ${borderMargins3M + 16}px;
  left: ${borderMarginsM}px;
  width: calc(100vw - ${borderMarginsM * 2}px);
  ${breakPointT} {
    margin: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 50vw;
    left: auto;
    right: calc(
      ((50vw - ${borderMargins}px - ${textContainerWidth}) / 2) +
        ${borderMargins}px
    );
  }
  ${breakPointD} {
    width: 25vw;
  }
`;

export const vText = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.005,
    },
  },
};

export const vLetterLT = {
  initial: { ...vLetter.initial, textDecoration: "none" },
  animate: { ...vLetter.animate, textDecoration: "line-through" },
};
