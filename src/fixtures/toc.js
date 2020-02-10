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
        text: "The Footer (see bottom right) is a functional React component",
        link: null
      },
      {
        text: "The second screenshot is what is rendered in the DOM",
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
    title: "Intro to JSX"
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
