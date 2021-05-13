import styled from "styled-components";

import { strokeThickness, stButton } from "style/g";
import { tButtonLink, tDinoGame } from "style/typo";

export const SScore = styled.div`
  color: white;
  background-color: ${(props) => props.s.color};
  position: absolute;
  top: 24px;
  right: 24px;
  padding: 8px 16px;
`;

export const SInterface = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${(props) => props.s.color};
`;

export const SButton = styled.button`
  ${tButtonLink}
  ${stButton}
  background-color: white;
  border: ${strokeThickness}px solid ${(props) => props.s.color};
  color: ${(props) => props.s.color};
  margin: 0 auto;
`;

export const SGameOver = styled.p`
  ${tDinoGame};
  margin: 0 0 16px 0;
  padding: 0;
`;
