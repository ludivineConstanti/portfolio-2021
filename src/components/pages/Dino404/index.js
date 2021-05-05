import Title from "components/elements/Title";
import Game from "./Game";
import InfosProject from "components/elements/InfosProject";
import { routes as r } from "data/routes";
import { concept, technos } from "./text";

const Dino404 = () => {
  return (
    <>
      <Title useCase="top">Dino 404</Title>
      <Game></Game>
      <InfosProject
        color={r.project2.color}
        concept={concept}
        technos={technos}
      ></InfosProject>
    </>
  );
};

export default Dino404;
