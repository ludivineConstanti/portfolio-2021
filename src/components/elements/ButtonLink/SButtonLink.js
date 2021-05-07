import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { strokeThickness } from "style/g";
import { tButtonLink } from "style/typo";

const link = `
  ${tButtonLink}
  display: flex;
  align-items: center;
  padding: 24px;
  height: 8px;
  border-radius: 80px;
  justify-content: flex-end;
`;

export const SNavLink = styled(NavLink)`
  ${link}
  color: ${(props) => props.s.color};
  border: ${strokeThickness}px solid ${(props) => props.s.color};
  flex-direction: ${(props) =>
    props.s.direction === "right" ? "row" : "row-reverse"};
`;

export const SExternalLink = styled.a`
  ${link}
  color: ${(props) => props.s.color};
  border: ${strokeThickness}px solid ${(props) => props.s.color};
  margin-bottom: ${(props) => props.s.marginBottom};
  flex-direction: ${(props) =>
    props.s.direction === "right" ? "row" : "row-reverse"};
`;
