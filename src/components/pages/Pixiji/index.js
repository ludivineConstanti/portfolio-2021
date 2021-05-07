import Title from "components/elements/Title";
import InfosProject from "components/elements/InfosProject";
import { routes as r, prevNextLinks } from "data/routes";
import { projectNumber as pNum, concept, technos } from "./data";

const Pixiji = () => {
  return (
    <>
      <Title useCase="top">Pixiji</Title>
      <InfosProject
        color={r[`project${pNum}`].color}
        technos={{ text: technos, grid: { cStart: 1, cSpan: 2 } }}
        links={{
          data: [
            {
              useCase: "website",
              path: "/",
            },
          ],
          grid: { cStart: 3 },
        }}
      ></InfosProject>
      <InfosProject
        color={r[`project${pNum}`].color}
        concept={{ text: concept, grid: { cStart: 1, cSpan: 3 } }}
        links={{
          data: [
            {
              useCase: "code",
              path: "https://github.com/ludivineConstanti/Pixiji",
            },
          ],
          grid: { cStart: 3, rStart: 2 },
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

export default Pixiji;
