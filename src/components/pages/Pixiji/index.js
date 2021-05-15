import Title from "components/elements/Title";
import InfosProject from "components/elements/InfosProject";
import CloudDragon from "./CloudDragon";
import RabbitOnMoon from "./RabbitOnMoon";
import { routes as r, prevNextLinks } from "data/routes";
import { projectNumber as pNum, concept, technos } from "./data";

const Pixiji = () => {
  return (
    <>
      <Title text="Pixiji" useCase="top"></Title>
      <RabbitOnMoon></RabbitOnMoon>
      <InfosProject
        color={r[`project${pNum}`].color}
        concept={{ text: concept, grid: { cStart: 1, cSpan: 3 } }}
        links={{
          data: [
            {
              useCase: "website",
              path: r[`project${pNum}`].pathWebsite,
              grid: { cStart: 2, rStart: 2 },
            },
            {
              useCase: "code",
              path: r[`project${pNum}`].pathCode,
              grid: { cStart: 3, rStart: 2 },
            },
          ],
        }}
      ></InfosProject>
      <CloudDragon></CloudDragon>
      <InfosProject
        color={r[`project${pNum}`].color}
        technos={{ text: technos, grid: { cStart: 1, cSpan: 2 } }}
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

export default Pixiji;
