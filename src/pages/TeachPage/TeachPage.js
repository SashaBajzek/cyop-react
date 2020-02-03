import React from "react";
import { Header, Nav, ThemeSelect } from "components";
import pages from "../../fixtures/toc";
import "./TeachPage.scss";

const TeachPage = ({ id }) => {
  const { nextUrl, text, title } = pages[id];
  return (
    <>
      <Header currentPageTitle={title} />
      <Nav nextUrl={nextUrl} />
      <ThemeSelect />
      <h3>{title}</h3>
      <main className="TeachPage__main">
        <p>{text}</p>
      </main>
    </>
  );
};

export default TeachPage;
