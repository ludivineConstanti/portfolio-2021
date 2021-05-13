import styled from "styled-components";

import { strokeThickness, breakPointD, sSocialMedia } from "style/g";

export const SSocialMedia = styled.a`
  border: ${strokeThickness}px solid white;
  height: ${sSocialMedia}px;
  width: ${sSocialMedia}px;
  display: block;
  border-radius: ${sSocialMedia}px;
  margin: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${breakPointD} {
    margin: 0 0 0 16px;
  }
`;
