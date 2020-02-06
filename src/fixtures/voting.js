let votingBallots = {
  choose_theme: {
    manipulatesNextPage: false,
    options: [{ text: "Rainbow" }, { text: "Dark" }, { text: "Light" }],
    question: "What theme?"
  },
  intro_audience: {
    manipulatesNextPage: false,
    options: [
      { text: "Not at all" },
      { text: "Learning it" },
      { text: "Use it sparingly" },
      { text: "Use it everyday" }
    ],
    question: "How do you feel about React?"
  },
  ready_to_see_code: {
    manipulatesNextPage: true,
    options: [
      { text: "Ready! Let’s jump in!", url: "/teach/intro_jsx" },
      { text: "Hold up!  Let’s see more examples", url: "/SASHATODO" },
      { text: "I’ve got questions...", url: "/vote/ready_to_see_code" }
    ],
    question: "Ready to see code?"
  },
  test_manipulation: {
    manipulatesNextPage: true,
    options: [
      { text: "intro myself", url: "/teach/intro_myself" },
      { text: "what react", url: "/teach/what_react" }
    ],
    question: "Where do you want to go?"
  }
};

export default votingBallots;
