import React from "react";
import { Header, Nav, ThemeSelect, VoteButton } from "components";
import pages from "../../fixtures/toc";
import "./VotePage.scss";

class VotePage extends React.Component {
  state = {
    resultPercentages: [],
    winningOption: null
  };

  collectVotes = () => {
    this.setState({ resultPercentages: [66, 33, 0], winningOption: 0 });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({
        resultPercentages: [],
        winningOption: null
      });
    }
  }

  componentWillUnmount() {
    this.setState({
      resultPercentages: [],
      winningOption: null
    });
  }

  render() {
    const { displayNav, id } = this.props;
    const { resultPercentages, winningOption } = this.state;
    const { nextUrl, options, question, title } = pages[id];
    return (
      <>
        <Header currentPageTitle={title} />
        <ThemeSelect />
        <h2>{question}</h2>
        {winningOption === null ? (
          <button onClick={this.collectVotes}>Collect Votes</button>
        ) : null}
        <form className="VotePage__form">
          {options.map((option, index) => (
            <VoteButton
              disable={winningOption !== null}
              key={option}
              result={winningOption !== null ? resultPercentages[index] : null}
              text={option}
              winner={option === options[winningOption]}
            />
          ))}
        </form>
        <Nav
          display={displayNav && winningOption !== null}
          nextOptionalText={`: ${options[winningOption]}`}
          nextUrl={nextUrl}
        />
      </>
    );
  }
}

export default VotePage;
