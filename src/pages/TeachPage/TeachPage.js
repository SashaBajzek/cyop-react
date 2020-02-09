import React from "react";
import pages from "../../fixtures/toc";
import "./TeachPage.scss";

class TeachPage extends React.Component {
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
    const { id, theme } = this.props;
    const {
      alt = "I’m very sorry I forgot this alt",
      bannerText,
      photo,
      text,
      title
    } = pages[id];
    return (
      <div className="TeachPage">
        <h3 className="TeachPage__heading">{title}</h3>
        <main className="TeachPage__main">
          {bannerText ? (
            <p className="TeachPage__banner">{bannerText}</p>
          ) : null}
          {text ? (
            <ul className="TeachPage__list">
              {text.map(text => (
                <li className="TeachPage__listItem" key={text.text}>
                  {text.link ? (
                    <a
                      className={`TeachPage__link TeachPage__link--${theme}`}
                      href={text.link}
                    >
                      {text.text}
                    </a>
                  ) : (
                    <span>{text.text}</span>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
          {photo ? (
            <img
              alt={alt}
              className={`TeachPage__image TeachPage__image--${theme}`}
              src={photo}
            />
          ) : null}
        </main>
      </div>
    );
  }
}

export default TeachPage;
