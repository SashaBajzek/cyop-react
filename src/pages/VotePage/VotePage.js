import React from "react";
import { Header, Nav, ThemeSelect, VoteButton } from "components";
import pages from "../../fixtures/toc";
import "./VotePage.scss";

import { ThemeContext } from "context";

const VotePage = ({ id }) => {
  const { nextUrl, options, question, title } = pages[id];
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <>
          <Header currentPageTitle={title} />
          <ThemeSelect />
          <Nav nextUrl={nextUrl} />
          <form className={`VotePage__form VotePage__form--${theme}`}>
            <h2 className="VotePage__heading">{question}</h2>
            <a
              className="VotePage__link"
              href="https://pollev.com/sashabajzek095"
            >
              Go Vote! (Text SASHABAJZEK095 to 22333 once to join)
            </a>
            <ul className="VotePage__list">
              {options.map((option, index) => (
                <li className="VotePage__listItem" key={option}>
                  <VoteButton text={option} theme={theme} />
                </li>
              ))}
            </ul>
          </form>
        </>
      )}
    </ThemeContext.Consumer>
  );
};

export default VotePage;
