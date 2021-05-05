import styled from "styled-components";

import { sMenuIcon, zIMenuIcon, strokeThickness, borderMargins } from "style/g";

export const SMenuIcon = styled.div`
  position: fixed;
  top: ${borderMargins}px;
  left: ${borderMargins}px;
  z-index: ${zIMenuIcon};
  border: ${strokeThickness}px solid white;
  background-color: ${(props) => props.s.color};
  border-radius: 100px;
  height: ${sMenuIcon}px;
  width: ${sMenuIcon}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SIcon = `
  height: ${strokeThickness}px;
  border-radius: ${strokeThickness}px;
  width: calc(${sMenuIcon}px / 3);
  margin: 6px;
  background-color: white;
`;

export const SIconT = styled.div`
  ${SIcon}
`;

export const SIconM = styled.div`
  ${SIcon}
  width: calc(${sMenuIcon}px / 2);
`;

export const SIconB = styled.div`
  ${SIcon}
`;
