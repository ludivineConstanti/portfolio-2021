import styled from "styled-components";

import { tTitle } from "style/typo";

export const STitle = styled.h1`
  ${tTitle}
  color: ${(props) => props.s.color};
  text-align: center;
  margin: 0;
`;
