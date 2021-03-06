import Title from "components/elements/Title";
import InfosProject from "components/elements/InfosProject";
import Bubble from "./Bubble";
import { routes as r, prevNextLinks } from "data/routes";
import { projectNumber as pNum, concept, technos } from "./data";

const Blockchain = () => {
  return (
    <>
      <Bubble></Bubble>
      <Title text="An Intro to Blockchain" useCase="top"></Title>
      <InfosProject
        color={r[`project${pNum}`].color}
        concept={{ text: concept, grid: { cStart: 1, cSpan: 2 } }}
        links={{
          data: [
            {
              useCase: "website",
              path: r[`project${pNum}`].pathWebsite,
            },
          ],
          grid: { cStart: 3 },
        }}
      ></InfosProject>
      <div style={{ height: "240px" }}></div>
      <InfosProject
        color={r[`project${pNum}`].color}
        technos={{ text: technos, grid: { cStart: 1, cSpan: 2 } }}
        links={{
          data: [
            {
              useCase: "code",
              path: r[`project${pNum}`].pathCode,
            },
          ],
          grid: { cStart: 3 },
        }}
      ></InfosProject>
      <InfosProject
        backgroundColor="none"
        links={{
          data: prevNextLinks(pNum),
        }}
      ></InfosProject>
    </>
  );
};

export default Blockchain;
