import styled from "styled-components";

import { tTitle } from "style/typo";
import { borderMargins } from "style/g";

export const STitle = styled.h1`
  ${tTitle}
  color: ${(props) => props.s.color};
  text-align: center;
  margin: 0;
  display: block;
  padding: ${(props) =>
    props.s.useCase === "top" ? `${borderMargins}px 0` : 0};
`;
