import styled from "styled-components";

import { zIBackground } from "style/g";

export const SBackground = styled.div`
  z-index: ${zIBackground};
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.s.color};
`;
