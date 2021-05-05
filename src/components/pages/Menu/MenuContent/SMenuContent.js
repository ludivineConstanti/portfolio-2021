import styled from "styled-components";

import { zIMenu, borderMargins, sMenuIcon } from "style/g";

export const SMenuContent = styled.div`
  z-index: ${zIMenu};
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #00404e;
`;

export const SLinksContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const SSMContainer = styled.nav`
  position: fixed;
  right: ${borderMargins}px;
  top: ${borderMargins}px;
  display: flex;
  align-items: center;
  height: ${sMenuIcon}px;
`;
