import React from "react";
import { VoteButton } from "components";
import { Nav } from "components";
import votingBallots from "../../fixtures/voting";

class VotePage extends React.Component {
  state = {
    winningOption: null
  };
  render() {
    const { displayNav, id } = this.props;
    const { winningOption } = this.state;
    const { options, question } = votingBallots[id];
    return (
      <>
        <h2>{question}</h2>
        <ul>
          {options.map(option => (
            <li key={option}>
              <VoteButton text={option} />
            </li>
          ))}
        </ul>
        <Nav
          display={displayNav && winningOption}
          nextOptionalText={`: ${winningOption}`}
        />
      </>
    );
  }
}

export default VotePage;
