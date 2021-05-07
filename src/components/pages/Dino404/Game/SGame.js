import styled from "styled-components";

import { borderMargins3, zIDinoGame } from "style/g";

export const SGame = styled.div`
  background-color: white;
  width: calc(100vw - ${borderMargins3 * 2}px);
  margin: auto;
  height: 50vh;
  display: block;
  position: relative;
  z-index: ${zIDinoGame};
`;
