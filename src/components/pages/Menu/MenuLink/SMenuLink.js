import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { tMenuLink } from "style/typo";

export const SMenuLink = styled(motion(NavLink))`
  ${tMenuLink}
  color: white;
  display: block;
`;

export const vMenuLink = {
  initial: { y: 50, scale: 0 },
  animate: { y: 0, scale: 1 },
};
