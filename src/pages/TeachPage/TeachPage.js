import React from "react";
import pages from "../../fixtures/toc";
import "./TeachPage.scss";

const TeachPage = ({ id, nextPage, setNextPage, theme }) => {
  const {
    alt = "I’m very sorry I forgot this alt",
    bannerText,
    nextUrl,
    photo,
    text,
    title
  } = pages[id];

  if (nextPage !== nextUrl) {
    setNextPage(nextUrl);
  }

  return (
    <>
      <div className="TeachPage">
        <h3 className="TeachPage__heading">{title}</h3>
        <main className="TeachPage__main">
          {bannerText ? (
            <p className="TeachPage__banner">{bannerText}</p>
          ) : null}
          {text ? (
            <ul className="TeachPage__list">
              {text.map(text => (
                <li className="TeachPage__listItem" key={text}>
                  {text}
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
    </>
  );
};

export default TeachPage;
