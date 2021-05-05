import styled from "styled-components";

import { borderMargins3 } from "style/g";

export const SInfosProject = styled.main`
  width: 100vw;
  background-color: white;
  color: ${(props) => props.s.color};
  display: flex;
  padding: 64px 0 64px ${borderMargins3}px;
`;
