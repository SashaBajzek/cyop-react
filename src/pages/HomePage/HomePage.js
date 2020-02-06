import React from "react";
import { TeachPage } from "pages";

const HomePage = ({ nextPage, setNextPage, theme }) => (
  <TeachPage
    id="home"
    nextPage={nextPage}
    setNextPage={setNextPage}
    theme={theme}
  />
);

export default HomePage;
