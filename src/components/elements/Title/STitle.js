import styled from "styled-components";
import { motion } from "framer-motion";

import { tTitle } from "style/typo";
import {
  borderMargins,
  borderMarginsM,
  borderMargins3M,
  breakPointD,
} from "style/g";

export const STitle = styled(motion.h1)`
  ${tTitle}
  color: ${(props) => props.s.color};
  text-align: ${(props) => (props.s.useCase === "top" ? `center` : "left")};
  margin: 0;
  display: block;
  padding: ${(props) =>
    props.s.useCase === "top" ? `${borderMargins3M}px ${borderMarginsM}px` : 0};
  ${breakPointD} {
  }
  ${breakPointD} {
    padding: ${(props) =>
      props.s.useCase === "top" ? `${borderMargins}px 0` : 0};
    ${breakPointD} {
    }
  }
`;

export const vLetter = {
  initial: { scale: 0, rotate: -90 },
  animate: { scale: 1, rotate: 0 },
};

export const SLetter = styled(motion.span)`
  display: inline-block;
`;
