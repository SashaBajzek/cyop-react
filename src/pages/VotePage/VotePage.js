import React from "react";
import { VoteButton } from "components";
import pages from "../../fixtures/toc";
import "./VotePage.scss";

import { ThemeContext } from "context";

class VotePage extends React.Component {
  componentDidMount() {
    const { id, nextPage, setNextPage } = this.props;
    const { nextUrl } = pages[id];
    if (nextPage !== nextUrl) {
      setNextPage(nextUrl);
    }
  }

  componentDidUpdate() {
    const { id, nextPage, setNextPage } = this.props;
    const { nextUrl } = pages[id];
    if (nextPage !== nextUrl) {
      setNextPage(nextUrl);
    }
  }

  updateNextPage = () => {
    const { id, nextPage, setNextPage } = this.props;
    const { nextUrl } = pages[id];
    if (nextPage !== nextUrl) {
      setNextPage(nextUrl);
    }
  };

  render() {
    const { id, setNextPage } = this.props;
    const { manipulatesNextPage = false, options, question } = pages[id];
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <>
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
                  <li className="VotePage__listItem" key={option.text}>
                    {manipulatesNextPage ? (
                      <VoteButton
                        setNextPage={setNextPage}
                        text={option.text}
                        theme={theme}
                        url={option.url}
                      />
                    ) : (
                      <VoteButton text={option.text} theme={theme} />
                    )}
                  </li>
                ))}
              </ul>
            </form>
          </>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default VotePage;
