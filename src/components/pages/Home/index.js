import PParis from "./PParis";
import Title from "components/elements/Title";
import ButtonLink from "components/elements/ButtonLink";
import { STextContainer, SText, STextDeco } from "./SHome";
import { routes as r } from "data/routes";

const Home = () => {
  return (
    <>
      <STextContainer>
        <Title>Welcome!</Title>
        <SText>
          My name is Ludivine Constanti, I am a versatile, multilingual, French{" "}
          <STextDeco>Art Director</STextDeco> developer.
        </SText>
        <ButtonLink path={r.project1.path}>See projects</ButtonLink>
      </STextContainer>
      <PParis />
    </>
  );
};

export default Home;
