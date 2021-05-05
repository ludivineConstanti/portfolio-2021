import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { strokeThickness } from "style/g";
import { tButtonLink } from "style/typo";

export const SButtonLink = styled(NavLink)`
  ${tButtonLink}
  color: ${(props) => props.s.color};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: ${strokeThickness}px solid ${(props) => props.s.color};
  padding: 24px;
  border-radius: 80px;
`;

export const SArrowStroke = styled.div`
  margin-left: 12px;
  background-color: ${(props) => props.s.color};
  height: ${strokeThickness}px;
  width: 24px;
  border-radius: ${strokeThickness}px;
`;
