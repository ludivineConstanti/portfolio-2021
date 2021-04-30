import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

export const SHome = styled.div`
  position: fixed;
  background-color: #1d448b;
  height: 100vh;
  width: 100vw;
`;

export const SText = styled.main`
  position: fixed;
  background-color: #1d448b;
  color: white;
  position: fixed;
  width: 25vw;
  text-align: left;
  right: 12.5vw;
  top: 50%;
  transform: translateY(-50%);
`;

export const STitle = styled.h1`
  font-size: 5vw;
`;

export const SPParis = styled(Canvas)`
  position: fixed;
  bottom: -20vh;
  left: -25vw;
`;
