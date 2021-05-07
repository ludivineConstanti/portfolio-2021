import styled from "styled-components";

import { borderMargins3, columnGap, zIInfosProject } from "style/g";

const mTopBottom = "104px";

export const SInfosProject = styled.div`
  position: relative;
  padding: ${mTopBottom} ${borderMargins3}px;
  padding-top: calc(${mTopBottom} + ${(props) => props.s.extraHeight});
  top: -${(props) => props.s.extraHeight};
  max-width: 100vw;
  background-color: ${(props) => props.s.backgroundColor};
  color: ${(props) => props.s.color};
  z-index: ${zIInfosProject};
  display: grid;
  grid-template: repeat(2, auto) / repeat(3, 1fr);
  column-gap: ${columnGap}px;
  row-gap: ${columnGap / 2}px;
`;

export const SContainer = styled.section`
  grid-column: ${(props) =>
    `${props.s.cStart || 1} / span ${props.s.cSpan || 1}`};
  grid-row: ${(props) => `${props.s.rStart || 1} / span ${props.s.rSpan || 1}`};
`;
