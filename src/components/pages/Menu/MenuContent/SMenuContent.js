import styled from "styled-components";
import { motion } from "framer-motion";

import {
  zIMenu,
  borderMargins,
  sMenuIcon,
  breakPointD,
  sSocialMedia,
} from "style/g";

export const vBackground = {
  initial: { clipPath: "circle(0%)" },
  animate: { clipPath: "circle(100%)" },
};

export const SBackground = styled(motion.div)`
  z-index: ${zIMenu};
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #00404e;
`;

const marginSocialMediaM = 40;

export const SLinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - ${marginSocialMediaM}px - ${sSocialMedia}px);
  ${breakPointD} {
    height: 100vh;
  }
`;

export const SSMContainer = styled.ul`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: ${sMenuIcon}px;
  bottom: ${marginSocialMediaM}px;
  ${breakPointD} {
    right: ${borderMargins}px;
    top: ${borderMargins}px;
    justify-content: flex-end;
    bottom: auto;
  }
`;
