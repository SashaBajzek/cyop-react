import votingBallots from "./voting";
import aboutMe from "../images/aboutMe.jpg";
import whatReact from "../images/whatReact.png";

let pages = {
  home: {
    bannerText:
      "This presentation has interactive voting using Poll Everywhere.  To participate, text SASHABAJZEK095 to 22333 once to join",
    nextUrl: "/teach/intro_myself",
    photo: null,
    title: "Welcome to my React Presentation!"
  },
  intro_myself: {
    alt: "My desk full of plants",
    nextUrl: "/vote/intro_audience",
    photo: aboutMe,
    text: [
      "Software Engineer on the Customer Experience Dev Standards team at Invitae",
      "Passion for making accessible, interactive user experiences",
      "& Plants!"
    ],
    title: "Hi, I’m Sasha!"
  },
  intro_audience: {
    ...votingBallots["intro_audience"],
    nextUrl: "/teach/what_react",
    title: "Poll: React"
  },
  what_react: {
    alt: "React’s logo, three ellipses around a circle",
    nextUrl: "/teach/intro_presentation",
    photo: whatReact,
    text: [
      "A JavaScript library for building user interfaces",
      "Create modular components that render",
      "Usually making single-page applications (SPA) where React is in charge of rendering everything inside of the <body>",
      "Backend-agnostic",
      "Easy for developers to see what the code is doing",
      "Lots of support"
    ],
    title: "What is React & Why is it so popular?"
  },
  intro_presentation: {
    nextUrl: "/vote/choose_theme",
    photo: null,
    text: [
      "This presentation IS a React app!",
      "We are going to be manipulating it and learning about it",
      "It has 2 features we can set:  theme & text",
      "Please feel free to ask questions at any time  :)"
    ],
    title: "About this presentation"
  },
  choose_theme: {
    ...votingBallots["choose_theme"],
    nextUrl: "/",
    title: "Vote: Theme"
  }
};

export default pages;
