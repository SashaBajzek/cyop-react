import votingBallots from "./voting";

let pages = {
  home: {
    nextUrl: "/teach/intro_myself",
    photo: null,
    text: "Welcome to my React Presentation!",
    title: "Home"
  },
  intro_myself: {
    nextUrl: "/vote/intro_audience",
    photo: null,
    text: "Hi I'm Sasha!  I'm a software engineer",
    title: "About Me"
  },
  intro_audience: {
    ...votingBallots["intro_audience"],
    nextUrl: "/teach/intro_presentation",
    title: "Poll: React"
  },
  intro_presentation: {
    nextUrl: "/vote/choose_theme",
    photo: null,
    text: "A JavaScript library for building user interfaces",
    title: "What is React?"
  },
  choose_theme: {
    ...votingBallots["choose_theme"],
    nextUrl: "/",
    title: "Vote: Theme"
  }
};

export default pages;
