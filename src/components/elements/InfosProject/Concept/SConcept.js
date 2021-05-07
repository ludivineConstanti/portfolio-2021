import styled from "styled-components";

import { columnGap } from "style/g";
import { tTextProject } from "style/typo";

export const SText = styled.p`
  ${tTextProject};
  column-count: ${(props) => props.s.span};
  column-gap: ${columnGap}px;
`;
