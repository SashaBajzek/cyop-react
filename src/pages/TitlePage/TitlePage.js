import React from "react";
import pages from "../../fixtures/toc";
import Superhero from "./Superhero";
import "./TitlePage.scss";

class TitlePage extends React.Component {
  componentDidMount() {
    this.updateNextPage();
  }

  componentDidUpdate() {
    this.updateNextPage();
  }

  updateNextPage = () => {
    const { id, nextPage, setNextPage } = this.props;
    const { nextUrl } = pages[id];
    if (nextPage !== nextUrl) {
      setNextPage(nextUrl);
    }
  };

  render() {
    const { id } = this.props;
    const { bannerText, title } = pages[id];
    return (
      <div className="TitlePage">
        <h3 className="TitlePage__heading">{title}</h3>
        <main className="TitlePage__main">
          {bannerText ? (
            <p className="TitlePage__banner">{bannerText}</p>
          ) : null}
          <Superhero />
        </main>
      </div>
    );
  }
}

export default TitlePage;
