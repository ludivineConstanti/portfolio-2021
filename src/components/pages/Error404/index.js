import styled from "styled-components";

export const SBackground = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.s.color};
`;
