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
    const { bannerText, photos, text, title } = pages[id];
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
          {photos ? (
            <div className={`TeachPage__image-container`}>
              {photos.map(photo => (
                <div
                  className={`TeachPage__image-wrapper TeachPage__image-wrapper--${theme}`}
                  key={photo.alt}
                >
                  <img
                    alt={photo.alt}
                    className={`TeachPage__image`}
                    src={photo.photo}
                  />
                </div>
              ))}
            </div>
          ) : null}
        </main>
      </div>
    );
  }
}

export default TeachPage;
