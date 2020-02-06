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
    nextUrl: "/teach/intro_react_app",
    photo: null,
    text: [
      "This presentation IS a React app!",
      "We are going to be manipulating it and learning about it",
      "It has 2 features we can set:  theme & text",
      "Please feel free to ask questions at any time  :)"
    ],
    title: "About this presentation"
  },
  intro_react_app: {
    nextUrl: "/vote/ready_to_see_code",
    photo: null,
    text: [
      "A React app is made up of components that take in props (information) from parent components and render HTML or other child components (and send props to child components)",
      "This presentation for example:"
    ],
    title: "Intro to a React app"
  },
  ready_to_see_code: {
    ...votingBallots["ready_to_see_code"],
    nextUrl: "/teach/intro_jsx",
    title: "Ready to see code?"
  },
  intro_jsx: {
    nextUrl: "/teach/jsx_example",
    photo: null,
    text: [
      "Babel compiles JSX down to React.createElement() calls that create JS objects that React reads and used to construct the DOM, or what you see on the web page",
      "Requires \"import React from 'react'\"at the top of every file",
      "Differences from HTML:  use className instead of class and htmlFor instead of for (reserved in JS)"
    ],
    title: "JSX"
  },
  jsx_example: {
    nextUrl: "/vote/choose_theme",
    photo: null,
    text: [
      "Consider the title of this slide",
      '<h3 className="TeachPage__heading">{title}</h3>',
      "The curly braces {} allow you to embed JS expressions right in the html",
      "Note className instead of class"
    ],
    title: "JSX Example"
  },
  choose_theme: {
    ...votingBallots["choose_theme"],
    nextUrl: "/teach/how_theme",
    title: "Vote: Theme"
  },
  how_theme: {
    nextUrl: "/teach/props",
    photo: null,
    title: "How did the theme change?"
  },
  props: {
    nextUrl: "/teach/context",
    photo: null,
    text: [
      "Pass in props from parent to child components",
      "Like pouring water, props trickle down the chains of parents and children",
      "When this gets too far and components along the chain don’t actually need the prop, it’s called prop drilling",
      "You have other options!  React context or a state management library"
    ],
    title: "Props!"
  },
  context: {
    nextUrl: "/teach/debugging",
    photo: null,
    text: ["I also changed the theme for some of the components using context"],
    title: "Context"
  },
  debugging: {
    text: [
      "Chrome devTools!  Install the React devTools Chrome extension",
      "Same for firefox"
    ],
    nextUrl: "/teach/next_steps",
    title: "Debugging"
  },
  next_steps: {
    text: ["Create React App", "React Documentation Tutorial"],
    nextUrl: "/teach/end",
    title: "Where to go now?"
  },
  end: {
    bannerText: "Feel free to reach out:  @Sasha on slack",
    nextUrl: "/",
    title: "I hope you feel empowered to try React!"
  }
};

export default pages;
