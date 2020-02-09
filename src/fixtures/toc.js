import votingBallots from "./voting";
import aboutMe from "../images/aboutMe.JPG";
import whatReact from "../images/whatReact.png";
import jsx_import from "../images/jsx_import.png";
import jsx_html_for from "../images/jsx_html_for.png";
import jsx_example from "../images/jsx_example.png";

let pages = {
  home: {
    bannerText:
      "Throughout this presentation, there will be voting using Poll Everywhere.  Text SASHABAJZEK095 to 22333 to join.",
    nextUrl: "/teach/intro_myself",
    photos: null,
    title: "Welcome to my React Presentation!"
  },
  intro_myself: {
    nextUrl: "/vote/intro_audience",
    photos: [{ alt: "My desk full of plants", photo: aboutMe }],
    text: [
      {
        text: "Software Engineer on the Dev Standards team at Invitae",
        link: null
      },
      {
        text: "Passion for making accessible, interactive user experiences",
        link: null
      },
      { text: "& Plants!", link: null }
    ],
    title: "Hi, I’m Sasha!"
  },
  intro_audience: {
    ...votingBallots["intro_audience"],
    nextUrl: "/teach/what_react",
    title: "Poll: React"
  },
  what_react: {
    nextUrl: "/teach/intro_presentation",
    photos: [
      { alt: "React’s logo, three ellipses around a circle", photo: whatReact }
    ],
    text: [
      { text: "A JavaScript library for building user interfaces", link: null },
      { text: "Create modular components that render", link: null },
      {
        text:
          "Usually making single-page applications (SPA) where React is in charge of rendering everything inside of the <body>",
        link: null
      },
      { text: "Backend-agnostic", link: null }
    ],
    title: "What is React?"
  },
  intro_presentation: {
    nextUrl: "/teach/intro_react_app",
    photos: null,
    text: [
      { text: "This presentation IS a React app!", link: null },
      {
        text: "We are going to be manipulating it and learning about it",
        link: null
      },
      { text: "It has 2 features we can set:  theme & text", link: null }
    ],
    title: "About this presentation"
  },
  intro_react_app: {
    nextUrl: "/teach/no_rerender",
    photos: null,
    text: [
      {
        text:
          "A React app is made up of components that take in props (information) from parent components and render HTML or other child components (and send props to child components)",
        link: null
      },
      { text: "This presentation for example:", link: null },
      {
        text:
          "This presentation is a SPA, notice how when I move forward a slide, the whole page doesn’t have to render, just the components with changing props or state",
        link: null
      }
    ],
    title: "Intro to a React app"
  },
  no_rerender: {
    nextUrl: "/vote/ready_to_see_code",
    photos: null,
    text: [
      {
        text:
          "See the number in the top right: I created a counter for the header to track it rerendering.",
        link: null
      },

      {
        text:
          "The header takes in only 1 prop: theme.  The header rerenders each time the theme prop changes.",
        link: null
      },
      {
        text:
          "When I refresh the page, the count resets as the entire app is being rendered for the first time again.  The Header's default state is restored (0)",
        link: null
      },
      {
        text:
          "Can also see this in the dev tools console: I added a console.log for each header rerender.",
        link: null
      }
    ],
    title: "Header does not rerender"
  },
  ready_to_see_code: {
    ...votingBallots["ready_to_see_code"],
    nextUrl: "/teach/intro_jsx",
    title: "Ready to see code?"
  },
  intro_jsx: {
    nextUrl: "/teach/jsx_example",
    photos: [
      { alt: "import react", photo: jsx_import },
      { alt: "className and htmlFor", photo: jsx_html_for }
    ],
    text: [
      {
        text:
          "Babel compiles JSX down to React.createElement() calls that create JS objects that React reads and used to construct the DOM, or what you see on the web page",
        link: null
      },
      {
        text: "Requires \"import React from 'react' \"at the top of every file",
        link: null
      },
      {
        text:
          "Differences from HTML:  use className instead of class and htmlFor instead of for (reserved in JS)",
        link: null
      }
    ],
    title: "JSX"
  },
  jsx_example: {
    nextUrl: "/vote/choose_theme",
    photos: [
      {
        alt: '<h3 className="TeachPage__heading">{title}</h3>',
        photo: jsx_example
      }
    ],
    text: [
      {
        text: "Consider the title of this slide",
        link: null
      },
      {
        text: '<h3 className="TeachPage__heading">{title}</h3>',
        link: null
      },
      {
        text:
          "The curly braces {} allow you to embed JS expressions right in the html",
        link: null
      }
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
    photos: null,
    title: "How did the theme change?"
  },
  props: {
    nextUrl: "/teach/context",
    photos: null,
    text: [
      {
        text: "Pass in props from parent to child components",
        link: null
      },
      {
        text:
          "Like pouring water, props trickle down the chains of parents and children",
        link: null
      },
      {
        text:
          "When this gets too far and components along the chain don’t actually need the prop, it’s called prop drilling",
        link: null
      },
      {
        text:
          "You have other options!  React context or a state management library",
        link: null
      }
    ],
    title: "Props!"
  },
  context: {
    nextUrl: "/teach/debugging",
    photos: null,
    text: [
      {
        text:
          "I also changed the theme for some of the components using context",
        link: null
      }
    ],
    title: "Context"
  },
  debugging: {
    text: [
      {
        text: "Chrome devTools!  Install the React devTools Chrome extension",
        link:
          "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en"
      },
      {
        text: "Same for firefox",
        link: "https://addons.mozilla.org/en-US/firefox/addon/react-devtools/"
      }
    ],
    nextUrl: "/teach/next_steps",
    title: "Debugging"
  },
  next_steps: {
    nextUrl: "/title/last_page",
    text: [
      {
        text: "React Documentation",
        link: "https://reactjs.org/docs/hello-world.html"
      },
      {
        text: "React Documentation Tutorial",
        link: "https://reactjs.org/tutorial/tutorial.html"
      },
      {
        text: "Create React App",
        link: "https://create-react-app.dev/"
      }
    ],
    title: "Where to go now?"
  },
  last_page: {
    bannerText: "Feel free to reach out:  @Sasha on slack",
    nextUrl: "/",
    title: "I hope you feel empowered to try React!"
  }
};

export default pages;
