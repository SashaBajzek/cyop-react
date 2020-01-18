import React from "react";
import { Nav } from "components";
import pages from "../../fixtures/toc";

const TeachPage = ({ displayNav, id }) => {
  const { nextUrl, text } = pages[id];
  return (
    <>
      {text} <Nav display={displayNav} nextUrl={nextUrl} />
    </>
  );
};

export default TeachPage;
