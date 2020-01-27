import React from "react";
import { Header, Nav, ThemeSelect } from "components";
import pages from "../../fixtures/toc";

const TeachPage = ({ displayNav, id }) => {
  const { nextUrl, text, title } = pages[id];
  return (
    <>
      <Header currentPageTitle={title} />
      <Nav display={displayNav} nextUrl={nextUrl} />
      <ThemeSelect />
      <p>{text}</p>
    </>
  );
};

export default TeachPage;
