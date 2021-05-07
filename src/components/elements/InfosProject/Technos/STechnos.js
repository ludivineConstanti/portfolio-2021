import styled from "styled-components";

import { tTextProject } from "style/typo";
import { columnGap } from "style/g";

export const STechnos = styled.section`
  grid-column: 2 / span 1;
`;

export const SBulletPoint = styled.div`
  height: 8px;
  width: 8px;
  background-color: ${(props) => props.s.color};
  display: inline-block;
  margin-right: 12px;
  margin-bottom: 2px;
  border-radius: 8px;
`;

export const STechnosList = styled.ul`
  columns: ${(props) => props.s.cSpan};
  column-gap: ${columnGap}px;
`;

export const STechnoEl = styled.li`
  ${tTextProject}
  display: block;
  margin-bottom: 10px;
`;
