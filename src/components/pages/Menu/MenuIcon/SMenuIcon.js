import styled from "styled-components";
import { motion } from "framer-motion";

import {
  sMenuIcon,
  sMenuIconM,
  zIMenuIcon,
  strokeThickness,
  borderMargins,
  borderMarginsM,
  breakPointD,
} from "style/g";

export const SMenuIcon = styled.div`
  position: fixed;
  top: ${borderMarginsM}px;
  right: ${borderMarginsM}px;
  z-index: ${zIMenuIcon};
  border: ${strokeThickness}px solid white;
  background-color: ${(props) => props.s.color};
  border-radius: 100px;
  height: ${sMenuIconM}px;
  width: ${sMenuIconM}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${breakPointD} {
    height: ${sMenuIcon}px;
    width: ${sMenuIcon}px;
    top: ${borderMargins}px;
    left: ${borderMargins}px;
  }
`;

const iconMargin = `
  margin: 6px;
`;

const iconSize = `
  height: ${strokeThickness}px;
  width: ${sMenuIcon / 3}px;
`;

const iconStroke = `
  border-radius: ${strokeThickness * 2}px;
  background-color: white;
`;

const strokeContainer = `
  ${iconMargin}
  ${iconSize}
`;

const strokeCross = `
  ${iconSize}
  ${iconStroke}
  position: absolute;
`;

const strokeMenu = `
  ${iconMargin}
  ${iconSize}
  ${iconStroke}
`;

const offsetAIsOpen = 3.75;

export const vIcon = {
  topRight: {
    aIsOpen: { x: offsetAIsOpen, rotate: -45 },
    aIsClose: { x: 0, rotate: 0 },
  },
  topLeft: {
    aIsOpen: { x: -offsetAIsOpen, rotate: 45 },
    aIsClose: { x: 0, rotate: 0 },
  },
  middle: {
    aIsOpen: { scaleX: 0 },
    aIsClose: { scaleX: 1 },
  },
  bottomRight: {
    aIsOpen: { x: offsetAIsOpen, rotate: 45 },
    aIsClose: { x: 0, rotate: 0 },
  },
  bottomLeft: {
    aIsOpen: { x: -offsetAIsOpen, rotate: -45 },
    aIsClose: { x: 0, rotate: 0 },
  },
};

// I put it in an object because I had a lot of import, otherwise, but esLint doesn't like it
// so not sure if I should leave it
export const SIcon = {
  top: styled.div`
    ${strokeContainer}
  `,
  topRight: styled(motion.div)`
    ${strokeCross}
    transform-origin: 100% 0%;
  `,
  topLeft: styled(motion.div)`
    ${strokeCross}
    transform-origin: 0% 0%;
  `,
  middle: styled(motion.div)`
    ${strokeMenu}
    width: ${sMenuIcon / 2}px;
  `,
  bottom: styled.div`
    ${strokeContainer}
  `,
  bottomRight: styled(motion.div)`
    ${strokeCross}
    transform-origin: 100% 100%;
  `,
  bottomLeft: styled(motion.div)`
    ${strokeCross}
    transform-origin: 0% 0%;
  `,
};
