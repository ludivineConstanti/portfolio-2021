import styled from "styled-components";

import { strokeThickness } from "style/g";

export const SArrow = styled.div`
  position: relative;
  display: flex;
  height: 12px;
  margin-left: 16px;
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
    right: 0;
`;

export const SArrowTop = styled.div`
  ${stroke}
  ${end}
  background-color: ${(props) => props.s.color};
  top: 0;
  transform: rotate(45deg);
`;

export const SArrowBottom = styled.div`
  ${stroke}
  ${end}
  background-color: ${(props) => props.s.color};
  bottom: 0;
  transform: rotate(-45deg);
`;
