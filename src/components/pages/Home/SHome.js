import styled from "styled-components";

import { borderMargins } from "style/g";
import { tText } from "style/typo";

export const SHome = styled.div`
  position: fixed;
  background-color: #0e184f;
  height: 100vh;
  width: 100vw;
`;

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
    ((50vw - ${borderMargins} - ${textContainerWidth}) / 2) + ${borderMargins}
  );
  top: 50%;
  transform: translateY(-50%);
`;

export const SPParis = styled.div`
  position: fixed;
  bottom: -100vh;
  left: -25vw;
  height: 200vh;
  width: 200vh;
`;
