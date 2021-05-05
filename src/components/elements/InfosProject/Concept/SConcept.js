import styled from "styled-components";

import { borderMargins3, columnGap } from "style/g";
import { tTextProject } from "style/typo";

export const SConcept = styled.section`
  width: calc(
    (100vw - ${borderMargins3 * 2}px) * ${(props) => props.s.columnCount} / 3
  );
  margin-right: ${columnGap}px;
`;

export const SText = styled.p`
  ${tTextProject};
  column-count: ${(props) => props.s.columnCount};
  column-gap: ${columnGap}px;
`;
