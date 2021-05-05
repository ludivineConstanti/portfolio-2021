import styled from "styled-components";

import { borderMargins3, columnGap } from "style/g";
import { tTextProject } from "style/typo";

export const STechnos = styled.section`
  width: calc(((100vw - ${borderMargins3 * 2}px) - ${columnGap}px * 2) / 3);
`;

export const STechnoEl = styled.li`
  ${tTextProject}
`;
