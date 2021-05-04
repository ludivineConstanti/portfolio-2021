import styled from "styled-components";

import { sMenuIcon, zIMenuIcon, strokeThickness, borderMargins } from "style/g";

export const SMenuIcon = styled.div`
  position: fixed;
  top: ${borderMargins};
  left: ${borderMargins};
  z-index: ${zIMenuIcon};
  border: ${strokeThickness} solid ${(props) => props.s.color};
  border-radius: 100px;
  height: ${sMenuIcon};
  width: ${sMenuIcon};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SIcon = `
  height: ${strokeThickness};
  border-radius: ${strokeThickness};
  width: calc(${sMenuIcon} / 3);
  margin: 6px;
`;

export const SIconT = styled.div`
  ${SIcon}
  background-color: ${(props) => props.s.color};
`;

export const SIconM = styled.div`
  ${SIcon}
  background-color: ${(props) => props.s.color};
  width: calc(${sMenuIcon} / 2);
`;

export const SIconB = styled.div`
  ${SIcon}
  background-color: ${(props) => props.s.color};
`;
