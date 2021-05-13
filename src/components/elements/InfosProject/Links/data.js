import { SHiddenText } from "./SLinks";

export const useCases = {
  code: {
    text: (
      <>
        <SHiddenText>see</SHiddenText>
        <span>&nbsp;</span>code
      </>
    ),
    external: true,
  },
  website: {
    text: (
      <>
        <SHiddenText>See</SHiddenText>
        <span>&nbsp;</span>website
      </>
    ),
    external: true,
  },
  prev: { text: <SHiddenText>Previous</SHiddenText>, external: false },
  next: {
    text: (
      <>
        <SHiddenText>Next project</SHiddenText>
      </>
    ),
    external: false,
  },
};
