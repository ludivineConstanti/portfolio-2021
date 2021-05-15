import PParis from "./PParis";
import Title from "components/elements/Title";
import ButtonLink from "components/elements/ButtonLink";
import { convertText } from "helpers/animation";
import { vLetter, SLetter } from "style/SG";
import { STextContainer, vText, SText, vLetterLT } from "./SHome";
import { routes as r } from "data/routes";

const Home = () => {
  return (
    <>
      <STextContainer>
        <Title text="Welcome!"></Title>
        <SText
          variants={vText}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          {convertText(
            "My name is Ludivine Constanti, I am a versatile, multilingual, French ",
            "introFirstPart",
            SLetter,
            vLetter
          )}
          {convertText("Art Director", "introSecondPart", SLetter, vLetterLT)}
          {convertText(" developer.", "introThirdPart", SLetter, vLetter)}
        </SText>
        <ButtonLink text="See projects" path={r.project1.path}></ButtonLink>
      </STextContainer>
      <PParis />
    </>
  );
};

export default Home;
