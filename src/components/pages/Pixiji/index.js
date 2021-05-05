import Title from "components/elements/Title";
import InfosProject from "components/elements/InfosProject";
import { routes as r } from "data/routes";
import { concept, technos } from "./text";

const Pixiji = () => {
  return (
    <>
      <Title useCase="top">Pixiji</Title>
      <InfosProject
        color={r.project1.color}
        concept={{ text: concept, columnCount: 2 }}
        technos={technos}
      ></InfosProject>
    </>
  );
};

export default Pixiji;
