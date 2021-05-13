import styled from "styled-components";

import {
  sMenuIcon,
  sMenuIconM,
  zIMenuIcon,
  strokeThickness,
  borderMargins,
  borderMarginsM,
  breakPointD,
} from "style/g";

export const SMenuIcon = styled.div`
  position: fixed;
  top: ${borderMarginsM}px;
  right: ${borderMarginsM}px;
  z-index: ${zIMenuIcon};
  border: ${strokeThickness}px solid white;
  background-color: ${(props) => props.s.color};
  border-radius: 100px;
  height: ${sMenuIconM}px;
  width: ${sMenuIconM}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${breakPointD} {
    height: ${sMenuIcon}px;
    width: ${sMenuIcon}px;
    top: ${borderMargins}px;
    left: ${borderMargins}px;
  }
`;

const SIcon = `
  height: ${strokeThickness}px;
  border-radius: ${strokeThickness}px;
  width: ${sMenuIcon / 3}px;
  margin: 6px;
  background-color: white;
`;

export const SIconT = styled.div`
  ${SIcon}
`;

export const SIconM = styled.div`
  ${SIcon}
  width: ${sMenuIcon / 2}px;
`;

export const SIconB = styled.div`
  ${SIcon}
`;
