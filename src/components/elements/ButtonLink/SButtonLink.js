import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { strokeThickness, columnGap, columnWidth } from "style/g";
import { tButtonLink } from "style/typo";

const link = `
  ${tButtonLink}
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;
  height: 8px;
  border-radius: 80px;
`;

export const SNavLink = styled(NavLink)`
  ${link}
  color: ${(props) => props.s.color};
  border: ${strokeThickness}px solid ${(props) => props.s.color};
`;

export const SExternalLink = styled.a`
  ${link}
  color: ${(props) => props.s.color};
  border: ${strokeThickness}px solid ${(props) => props.s.color};
  width: ${(props) => props.s.width};
  margin: ${(props) =>
    props.s.useCase === "project" ? `0 ${columnGap}px 24px 0` : 0};
    width ${(props) => (props.s.useCase === "project" ? columnWidth : "auto")};
`;
