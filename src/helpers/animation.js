export const convertText = (text, useCase, Component, variants) => {
  return Array.from(text).map((letter, i) => (
    <>
      <Component key={`${useCase}${i}${letter}`} variants={variants}>
        {letter === " " ? <>&nbsp;</> : letter}
      </Component>
    </>
  ));
};
