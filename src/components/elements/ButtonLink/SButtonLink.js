import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { strokeThickness, stButton } from "style/g";
import { tButtonLink } from "style/typo";

const link = `
  ${tButtonLink}
  ${stButton}
  justify-content: flex-end;
`;

export const vLink = {
  initial: { width: 0 },
  animate: { width: "auto" },
};

export const SNavLink = styled(motion(NavLink))`
  ${link}
  color: ${(props) => props.s.color};
  border: ${strokeThickness}px solid ${(props) => props.s.color};
  flex-direction: ${(props) =>
    props.s.direction === "right" ? "row" : "row-reverse"};
`;

export const SExternalLink = styled(motion.a)`
  ${link}
  color: ${(props) => props.s.color};
  border: ${strokeThickness}px solid ${(props) => props.s.color};
  margin-bottom: ${(props) => props.s.marginBottom};
  flex-direction: ${(props) =>
    props.s.direction === "right" ? "row" : "row-reverse"};
`;

export const vText = {
  initial: { scale: 0 },
  animate: { scale: 1 },
};

export const SText = styled(motion.p)``;
