import votingBallots from "./voting";

let pages = {
  home: {
    nextUrl: "/teach/intro_myself",
    photo: null,
    text: "Welcome to the homepage!",
    title: "Home"
  },
  intro_myself: {
    nextUrl: "/teach/intro_presentation",
    photo: null,
    text: "Hi I'm Sasha!  I'm a software engineer",
    title: "About Me"
  },
  intro_presentation: {
    nextUrl: "/vote/intro_audience",
    photo: null,
    text: "About this presentation",
    title: "About Presentation"
  },
  intro_audience: {
    ...votingBallots["intro_audience"],
    nextUrl: "/vote/choose_theme",
    title: "Poll: React"
  },
  choose_theme: {
    ...votingBallots["choose_theme"],
    nextUrl: "/",
    title: "Vote: Theme"
  }
};

export default pages;
