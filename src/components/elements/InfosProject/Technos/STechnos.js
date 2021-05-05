import styled from "styled-components";

import { columnGap, columnWidth } from "style/g";
import { tTextProject } from "style/typo";

export const STechnos = styled.section`
  width: ${columnWidth};
  margin-right: ${columnGap}px;
`;

export const STechnoEl = styled.li`
  ${tTextProject}
`;
