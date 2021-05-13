import styled from "styled-components";

import { tTitle } from "style/typo";
import {
  borderMargins,
  borderMarginsM,
  borderMargins3M,
  breakPointD,
} from "style/g";

export const STitle = styled.h1`
  ${tTitle}
  color: ${(props) => props.s.color};
  text-align: ${(props) => (props.s.useCase === "top" ? `center` : "left")};
  margin: 0;
  display: block;
  padding: ${(props) =>
    props.s.useCase === "top" ? `${borderMargins3M}px ${borderMarginsM}px` : 0};
  ${breakPointD} {
  }
  ${breakPointD} {
    padding: ${(props) =>
      props.s.useCase === "top" ? `${borderMargins}px 0` : 0};
    ${breakPointD} {
    }
  }
`;
