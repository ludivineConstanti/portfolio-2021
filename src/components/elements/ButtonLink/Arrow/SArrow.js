import styled from "styled-components";

import { strokeThickness } from "style/g";

export const SArrow = styled.div`
  position: relative;
  display: flex;
  height: 12px;
  margin: ${(props) =>
    props.s.direction === "right" ? "0 0 0 16px" : "0 16px 0 0"};
  align-items: center;
`;

const stroke = `
    height: ${strokeThickness}px;
    border-radius: ${strokeThickness}px;
`;

export const SArrowMiddle = styled.div`
  ${stroke}
  background-color: ${(props) => props.s.color};
  width: 32px;
`;

const end = `
    width: 12px;
    position: absolute;
`;

export const SArrowTop = styled.div`
  ${stroke}
  ${end}
  background-color: ${(props) => props.s.color};
  top: 0;
  transform: rotate(
    ${(props) => (props.s.direction === "right" ? "45deg" : "-45deg")}
  );
  ${(props) => (props.s.direction === "right" ? "right" : "left")}: 0;
`;

export const SArrowBottom = styled.div`
  ${stroke}
  ${end}
  background-color: ${(props) => props.s.color};
  bottom: 0;
  transform: rotate(
    ${(props) => (props.s.direction === "right" ? "-45deg" : "45deg")}
  );
  ${(props) => (props.s.direction === "right" ? "right" : "left")}: 0;
`;
