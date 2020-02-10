import React from "react";
import pages from "../../fixtures/toc";
import { EventExample } from "components";
import "./EventHandlerPage.scss";

class EventHandlerPage extends React.Component {
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
    const { photos, text, title } = pages[id];
    return (
      <div className={`EventHandlerPage EventHandlerPage--${theme}`}>
        <h3 className="EventHandlerPage__heading">{title}</h3>
        <main className="EventHandlerPage__main">
          <div className="EventHandlerPage__toggle-wrapper">
            <EventExample />
            <ul className="EventHandlerPage__list">
              {text.map(text => (
                <li className="EventHandlerPage__listItem" key={text.text}>
                  {text.link ? (
                    <a
                      className={`EventHandlerPage__link EventHandlerPage__link--${theme}`}
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
          </div>
          <div
            className={`EventHandlerPage__image-wrapper EventHandlerPage__image-wrapper--${theme}`}
            key={photos[0].alt}
          >
            <img
              alt={photos[0].alt}
              className={`EventHandlerPage__image`}
              src={photos[0].photo}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default EventHandlerPage;
