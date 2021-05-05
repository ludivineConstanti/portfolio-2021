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
        concept={{ text: concept, columnCount: 1 }}
        technos={technos}
        lCode="https://github.com/ludivineConstanti/Pixiji"
        lWebsite="/"
      ></InfosProject>
    </>
  );
};

export default Dino404;
