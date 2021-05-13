import styled from "styled-components";

import { columnGap, breakPointT, breakPointD } from "style/g";
import { tTextProject } from "style/typo";

export const SText = styled.p`
  ${tTextProject};
  ${breakPointT} {
    column-count: ${(props) => (props.s.span < 3 ? props.s.span : 2)};
    column-gap: ${columnGap}px;
  }
  ${breakPointD} {
    column-count: ${(props) => props.s.span};
  }
`;
