import styled from "styled-components";

import { borderMargins } from "style/g";
import { tText } from "style/typo";

export const SText = styled.p`
  ${tText}
  display: block;
  padding-bottom: 20px;
`;

export const STextDeco = styled.span`
  text-decoration: line-through;
`;

const textContainerWidth = "25vw";

export const STextContainer = styled.main`
  position: fixed;
  color: white;
  position: fixed;
  width: 25vw;
  text-align: left;
  right: calc(
    ((50vw - ${borderMargins}px - ${textContainerWidth}) / 2) +
      ${borderMargins}px
  );
  top: 50%;
  transform: translateY(-50%);
`;
