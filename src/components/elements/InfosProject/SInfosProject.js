import styled from "styled-components";

import {
  borderMargins3,
  borderMargins3M,
  borderMarginsM,
  columnGap,
  zIInfosProject,
  breakPointT,
  breakPointD,
  rowGap,
} from "style/g";

const mTopBottom = "104px";
const mTopBottomM = "80px";

export const SInfosProject = styled.div`
  position: relative;
  top: -${(props) => props.s.extraHeight};
  max-width: 100vw;
  background-color: ${(props) => props.s.backgroundColor};
  color: ${(props) => props.s.color};
  z-index: ${zIInfosProject};
  padding-top: calc(${mTopBottomM} + ${(props) => props.s.extraHeight});
  padding-right: ${borderMarginsM + 16}px;
  padding-bottom: ${mTopBottomM}px;
  padding-left: ${borderMarginsM + 16}px;
  *:last-child {
    margin-bottom: 0;
  }
  ${breakPointT} {
    display: grid;
    column-gap: ${columnGap}px;
    row-gap: ${columnGap / 2}px;
    grid-template: repeat(2, auto) / repeat(2, 1fr);
    padding-top: calc(${mTopBottom} + ${(props) => props.s.extraHeight});
    padding-right: ${borderMargins3M}px;
    padding-bottom: ${mTopBottom}px;
    padding-left: ${borderMargins3M}px;
    padding-top: calc(${mTopBottom} + ${(props) => props.s.extraHeight});
  }
  ${breakPointD} {
    padding-right: ${borderMargins3}px;
    padding-left: ${borderMargins3}px;
    grid-template: repeat(2, auto) / repeat(3, 1fr);
  }
`;

export const SContainer = styled.section`
  margin-bottom: ${rowGap}px;
  ${breakPointT} {
    margin-bottom: 0;
    grid-column: ${(props) =>
      `${props.s.cStart || 1} / span ${
        props.s.cSpan < 3 ? props.s.cSpan : 2 || 1
      }`};
    grid-row: ${(props) =>
      `${props.s.rStart || 1} / span ${props.s.rSpan || 1}`};
  }
  ${breakPointD} {
    grid-column: ${(props) =>
      `${props.s.cStart || 1} / span ${props.s.cSpan || 1}`};
  }
`;
