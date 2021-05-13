import styled from "styled-components";

import { breakPointT, breakPointD, rowGap } from "style/g";

export const SContainer = styled.nav`
  margin-bottom: ${rowGap}px;
  grid-column: 1;
  ${breakPointT} {
    margin-bottom: 0px;
    grid-column: ${(props) =>
      `${props.s.cStart > 1 ? props.s.cStart - 1 : 1 || 1} / span ${
        props.s.cSpan || 1
      }`};
    grid-row: ${(props) =>
      `${props.s.rStart || 1} / span ${props.s.rSpan || 1}`};
  }
  ${breakPointD} {
    grid-column: ${(props) =>
      `${props.s.cStart || 1} / span ${props.s.cSpan || 1}`};
  }
`;

export const SHiddenText = styled.span`
  display: none;
  ${breakPointT} {
    display: inline-block;
  }
`;
