import React from "react";
import { Header, Nav, ThemeSelect, VoteButton } from "components";
import pages from "../../fixtures/toc";
import "./VotePage.scss";

class VotePage extends React.Component {
  render() {
    const { id } = this.props;
    const { nextUrl, options, question, title } = pages[id];
    return (
      <>
        <Header currentPageTitle={title} />
        <ThemeSelect />
        <h2>{question}</h2>
        <form className="VotePage__form">
          {options.map((option, index) => (
            <VoteButton key={option} text={option} />
          ))}
        </form>
        <Nav nextUrl={nextUrl} />
      </>
    );
  }
}

export default VotePage;
