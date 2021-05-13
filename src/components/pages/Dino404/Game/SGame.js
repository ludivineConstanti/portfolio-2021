import styled from "styled-components";

import { borderMargins3, zIDinoGame, breakPointD } from "style/g";

export const SGame = styled.div`
  background-color: white;
  width: 100vw;
  margin: auto;
  height: 50vh;
  display: block;
  position: relative;
  z-index: ${zIDinoGame};
  ${breakPointD} {
    width: calc(100vw - ${borderMargins3 * 2}px);
  }
`;

export const SCanvas = styled.canvas``;
