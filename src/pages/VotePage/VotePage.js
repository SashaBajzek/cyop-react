import React from "react";
import { VoteButton } from "components";
import { Nav } from "components";
import votingBallots from "../../fixtures/voting";
import "./VotePage.scss";

class VotePage extends React.Component {
  state = {
    resultPercentages: [],
    winningOption: null
  };

  collectVotes = () => {
    this.setState({ resultPercentages: [66, 33, 0], winningOption: 0 });
  };

  render() {
    const { displayNav, id } = this.props;
    const { resultPercentages, winningOption } = this.state;
    const { options, question } = votingBallots[id];
    return (
      <>
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
        />
      </>
    );
  }
}

export default VotePage;
