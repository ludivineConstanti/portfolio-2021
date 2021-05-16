import { SHiddenText } from "./SLinks";

export const useCases = {
  code: {
    text: (
      <>
        <SHiddenText>See</SHiddenText>
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
  prev: { text: <>Previous</>, external: false },
  next: {
    text: (
      <>
        Next<span>&nbsp;</span>
        <SHiddenText>project</SHiddenText>
      </>
    ),
    external: false,
  },
};
