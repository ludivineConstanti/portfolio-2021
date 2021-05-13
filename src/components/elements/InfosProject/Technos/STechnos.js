import styled from "styled-components";

import { tTextProject } from "style/typo";
import { columnGap, breakPointT, breakPointD } from "style/g";

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
  ${breakPointT} {
    columns: ${(props) => (props.s.cSpan < 3 ? props.s.cSpan : 2)};
    column-gap: ${columnGap}px;
  }
  ${breakPointD} {
    columns: ${(props) => props.s.cSpan};
    column-gap: ${columnGap}px;
  }
`;

export const STechnoEl = styled.li`
  ${tTextProject}
  display: block;
  margin-bottom: 10px;
`;
