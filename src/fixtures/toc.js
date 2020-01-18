import votingBallots from "./voting";

let pages = {
  home: {
    nextUrl: "/teach/intro_myself",
    photo: null,
    text: "Welcome to the homepage!"
  },
  intro_myself: {
    nextUrl: "/teach/intro_presention",
    photo: null,
    text: "Hi I'm Sasha!  I'm a software engineer"
  },
  intro_presention: {
    nextUrl: "/vote/intro_audience",
    photo: null,
    text: "About this presentation"
  },
  intro_audience: {
    ...votingBallots["intro_audience"],
    nextUrl: "/vote/choose_theme"
  },
  choose_theme: {
    ...votingBallots["choose_theme"],
    nextUrl: "/"
  }
};

export default pages;
