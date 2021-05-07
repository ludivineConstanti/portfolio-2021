import styled from "styled-components";

export const SContainer = styled.nav`
  grid-column: ${(props) =>
    `${props.s.cStart || 1} / span ${props.s.cSpan || 1}`};
  grid-row: ${(props) => `${props.s.rStart || 1} / span ${props.s.rSpan || 1}`};
`;
