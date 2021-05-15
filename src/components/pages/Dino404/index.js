import Title from "components/elements/Title";
import Game from "./Game";
import InfosProject from "components/elements/InfosProject";
import { routes as r, prevNextLinks } from "data/routes";
import { projectNumber as pNum, concept, technos } from "./data";

const Dino404 = () => {
  return (
    <>
      <Title text="Dino 404" useCase="top"></Title>
      <Game></Game>
      <InfosProject
        extraHeight="25vh"
        color={r.project2.color}
        concept={{ text: concept, grid: { cStart: 1, cSpan: 2 } }}
        technos={{ text: technos, grid: { cStart: 3 } }}
        links={{
          data: [
            {
              useCase: "code",
              path: r[`project${pNum}`].pathCode,
            },
          ],
          grid: { cStart: 2, rStart: 2 },
        }}
      ></InfosProject>
      <InfosProject
        backgroundColor={r[`project${pNum}`].color}
        links={{
          data: prevNextLinks(pNum),
        }}
      ></InfosProject>
    </>
  );
};

export default Dino404;
