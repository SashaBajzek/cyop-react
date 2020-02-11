let votingBallots = {
  intro_audience: {
    manipulatesNextPage: false,
    options: [
      { text: "I’m not sure what React is" },
      { text: "I’m currently learning React" },
      { text: "I’m very familiar with React" }
    ],
    question: "About you"
  },
  ready_to_see_code: {
    manipulatesNextPage: true,
    options: [
      { text: "Ready! Let’s jump in!", url: "/teach/first_component" },
      {
        text: "Hold up!  Let’s see the console statement",
        url: "/teach/console"
      },
      { text: "I’ve got a question...", url: "/vote/ready_to_see_code" }
    ],
    question: "Ready to see code?"
  },
  ready_to_change_theme: {
    manipulatesNextPage: true,
    options: [
      {
        text: "Let’s learn about components! (Intro to components)",
        url: "/teach/intro_components"
      },
      {
        text: "Let’s change the theme! (Skip intro to components)",
        url: "/vote/choose_theme"
      },
      { text: "I’ve got a question...", url: "/vote/ready_to_change_theme" }
    ],
    question: "What would you like to do next?"
  },
  choose_theme: {
    manipulatesNextPage: false,
    options: [{ text: "Rainbow" }, { text: "Dark" }, { text: "Light" }],
    question: "What theme?"
  },
  ready_to_move_on: {
    manipulatesNextPage: false,
    options: [{ text: "Yes!" }, { text: "I’ve got a question..." }],
    question: "Ready to move on to lightning round?"
  }
};

export default votingBallots;
