import votingBallots from "./voting";
import aboutMe from "../images/aboutMe.JPG";
import whatReact from "../images/whatReact.png";
import rainbow_theme from "../images/rainbow_theme.png";
import dark_theme from "../images/dark_theme.png";
import light_theme from "../images/light_theme.png";
import component_map from "../images/component_map.png";
import parent_props from "../images/parent_props.png";
import react_app_map from "../images/react_app_map.png";
import render_counter from "../images/render_counter.png";
import console_check from "../images/console_check.gif";
import footer from "../images/footer.png";
import footer_inspected from "../images/footer_inspected.png";
import footer_highlighted from "../images/footer_highlighted.png";
import footer_inspected_highlighted from "../images/footer_inspected_highlighted.png";
import react_devtools from "../images/react_devtools.png";
import jest from "../images/jest.gif";
import react_profiler from "../images/react_profiler.png";
import storybook from "../images/storybook.gif";
import storybook_code from "../images/storybook_code.png";
import react_docs from "../images/react_docs.png";

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
    photos: [{ alt: "Photo of me smiling at the beach", photo: aboutMe }],
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
      {
        text:
          "Declarative:  React handles the views of your app, updating it and rendering the right components when your data changes",
        link: null
      },
      {
        text:
          "Component-based:  Components manage their own state with their logic written in JavaScript",
        link: null
      },
      { text: "Learn Once, Write Anywhere:  Backend-agnostic", link: null }
    ],
    title: "What is React? According to their website..."
  },
  intro_presentation: {
    nextUrl: "/teach/intro_react_app",
    photos: [
      { alt: "Rainbow theme", photo: rainbow_theme },
      { alt: "Dark theme", photo: dark_theme },
      { alt: "Light theme", photo: light_theme }
    ],
    text: [
      { text: "This presentation IS a React app!", link: null },
      {
        text: "Its hosted at react.sashabajzek.com",
        link: "https://react.sashabajzek.com"
      },
      {
        text: "We are going to be manipulating it and learning about it",
        link: null
      },
      {
        text:
          "It has 3 themes & we are going to learn how to set them using React.",
        link: null
      }
    ],
    title: "About this presentation"
  },
  intro_react_app: {
    nextUrl: "/teach/react_app_map",
    photos: [
      { alt: "Simple diagram of a component", photo: component_map },
      { alt: "Parent/child component relationship", photo: parent_props }
    ],
    text: [
      {
        text: "A React app is made up of components",
        link: null
      },
      {
        text:
          "Components take in props(data), manage their own state, and render the appropriate HTML to the page",
        link: null
      },
      {
        text:
          "Components are often nested.  This relationship is called parents and children.  The parent component contains the child component.",
        link: null
      }
    ],
    title: "Intro to a React app"
  },
  react_app_map: {
    nextUrl: "/teach/spa",
    photos: [
      {
        alt: "Overlay of component names",
        photo: react_app_map
      }
    ],
    text: null,
    title: "Map of components"
  },
  spa: {
    nextUrl: "/teach/no_rerender",
    photos: [
      {
        alt: "Overlay of component names",
        photo: react_app_map
      }
    ],
    text: [
      {
        text:
          "This presentation is a SPA (single page app), even though the url changes, you are still on the same page, just rendering different components",
        link: null
      },
      {
        text:
          "Notice how when I move forward a slide, the whole page doesn’t have to render, just the components with changing state or changing props rerender",
        link: null
      },
      {
        text:
          "Looking at the diagram, only the Slide and Nav components need to update.  The Header, ThemeSelect, and Footer do not rerender.",
        link: null
      }
    ],
    title: "Single Page App"
  },
  no_rerender: {
    nextUrl: "/vote/ready_to_see_code",
    photos: [
      {
        alt: "Screenshot of render counter",
        photo: render_counter
      }
    ],
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
          "When I refresh the page, the count resets as the entire app is being rendered for the first time again.  The Header's default state is restored (1)",
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
    nextUrl: "/teach/first_component",
    title: "Ready to see code?"
  },
  console: {
    nextUrl: "/teach/first_component",
    photos: [
      {
        alt: "Demonstrating header only rerenders when props change",
        photo: console_check
      }
    ],
    text: [
      {
        text: "First open developer tools (right click, inspect)",
        link: null
      },
      {
        text: "Go to the console tab",
        link: null
      },
      {
        text:
          "Move forward and backward a slide.  Note the header rerender count staying the same since it’s props did not change",
        link: null
      },
      {
        text:
          "Change the theme. Now the header rerenders since it’s theme prop changed.",
        link: null
      }
    ],
    title: "Console check"
  },
  first_component: {
    nextUrl: "/teach/intro_jsx",
    photos: [
      { alt: "Screenshot of footer component", photo: footer },
      {
        alt: "Screenshot of footer element in the DOM",
        photo: footer_inspected
      }
    ],
    text: [
      {
        text:
          "The Footer in the bottom right corner is a functional React component.  You can see its code in the first photo",
        link: null
      },
      {
        text:
          "The second photo is what is rendered in the DOM as seen via devTools",
        link: null
      },
      {
        text:
          "The component takes in props and returns what React should render.  That part is written in JSX syntax.",
        link: null
      }
    ],
    title: "A Simple Component: the Footer"
  },
  intro_jsx: {
    nextUrl: "/vote/ready_to_change_theme",
    photos: [
      { alt: "Footer with highlights", photo: footer_highlighted },
      {
        alt: "Screenshot of footer element in the DOM highlighted",
        photo: footer_inspected_highlighted
      }
    ],
    text: [
      {
        text:
          "Babel compiles JSX down to React.createElement() calls that create JS objects that React reads and used to construct the DOM, or what you see on the web page",
        link: null
      },
      {
        text:
          "Requires \"import React from 'react' \"at the top of every file. Even though you are not calling React yourself, once JSX is converted, it is being called.",
        link: null
      },
      {
        text:
          "The curly braces {} allow you to embed JS expressions right in the html.  See how the {year} variable gets rendered as 2020.",
        link: null
      },
      {
        text:
          "Differences from html:  use className instead of class and htmlFor instead of for (reserved in JS)",
        link: null
      }
    ],
    title: "What is JSX syntax?"
  },
  ready_to_change_theme: {
    ...votingBallots["ready_to_change_theme"],
    nextUrl: "/teach/intro_components",
    title: "Vote: What Should We Do?"
  },
  intro_components: {
    nextUrl: "/vote/choose_theme",
    photos: null,
    text: [
      {
        text: "There are 2 types of components:  class and functional",
        link: null
      },
      {
        text:
          "Both take in props and return what to render.  But class components have their own state and lifecycle methods",
        link: null
      }
    ],
    title: "Intro to Components"
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
    nextUrl: "/teach/lightning_round",
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
  lightning_round: {
    nextUrl: "/teach/debugging",
    photos: null,
    title: "Lightning Round"
  },
  debugging: {
    nextUrl: "/teach/typescript",
    photos: [
      { alt: "Screenshot of React devTools", photo: react_devtools },
      { alt: "Screenshot of React profiler", photo: react_profiler }
    ],
    text: [
      {
        text: "React Developer Tools!  Click here for Chrome extension",
        link:
          "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en"
      },
      {
        text: "Click here for the Firefox extension",
        link: "https://addons.mozilla.org/en-US/firefox/addon/react-devtools/"
      },
      {
        text:
          "Use React Developer Tools to track the props and state of components",
        link: null
      },
      {
        text:
          "Use the profiler to see how long it takes each component to render.  Looks for bottlenecks.  Can also track how often components are rerendering.",
        link: null
      }
    ],
    title: "Debugging"
  },
  testing: {
    nextUrl: "/teach/storybook",
    photos: [
      { alt: "Screenshot of Jest test running and passing", photo: jest }
    ],
    text: [
      {
        text:
          "Jest is a JavaScript testing framework used for writing unit tests",
        link: "https://jestjs.io/"
      },
      {
        text:
          "Make snapshots of components to track if changes update how your components render",
        link: null
      },
      {
        text:
          "It allows you to mock modules so you can control how code executes.",
        link: null
      }
    ],
    title: "Testing"
  },
  typescript: {
    nextUrl: "/teach/testing",
    photos: null,
    text: [
      {
        text: "Link to TypeScript",
        link: "https://www.typescriptlang.org/"
      }
    ],
    title: "TypeScript"
  },
  storybook: {
    nextUrl: "/teach/backend",
    photos: [
      { alt: "Screenshot of Storybook in action", photo: storybook },
      {
        alt: "Screenshot of code used to create the storybook",
        photo: storybook_code
      }
    ],
    text: [
      {
        text: "Storybook lets you view your React components in isolation",
        link: "https://storybook.js.org/docs/guides/guide-react/"
      },
      {
        text:
          "You can view one component at a time instead of viewing your whole app",
        link: null
      },
      {
        text:
          "Using 'knobs', you can manipulate the conditions the component is under so you can see it in all states",
        link: null
      },
      {
        text: "This is very useful for iterating with designers",
        link: null
      },
      {
        text:
          "Run `npx -p @storybook/cli sb init --type react_scripts` to install, and `npm run storybook` to start",
        link: null
      }
    ],
    title: "Storybook"
  },
  backend: {
    nextUrl: "/teach/next_steps",
    photos: null,
    text: [
      {
        text: "Add fetches to the componentDidMount lifecycle method",
        link: null
      }
    ],
    title: "Connect with a back-end"
  },
  next_steps: {
    nextUrl: "/title/last_page",
    photos: [
      { alt: "Screenshot of React Documentation page", photo: react_docs }
    ],
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
        text:
          "Create React App: It generates a 'Hello World' React app with a single command",
        link: "https://create-react-app.dev/"
      }
    ],
    title: "Try it out!"
  },
  last_page: {
    bannerText: "Feel free to reach out:  @Sasha on slack",
    nextUrl: "/",
    title: "I hope you feel empowered to try React!"
  }
};

export default pages;
