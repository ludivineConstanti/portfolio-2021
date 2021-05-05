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
        concept={{ text: concept, columnCount: 3 }}
      ></InfosProject>
      <InfosProject
        color={r.project1.color}
        technos={technos}
        lCode="https://github.com/ludivineConstanti/Pixiji"
        lWebsite="/"
      ></InfosProject>
    </>
  );
};

export default Pixiji;
