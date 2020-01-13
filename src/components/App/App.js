import React from "react";
import { Router } from "@reach/router";
import "./App.scss";
import { Header, Footer } from "components";
import { HomePage, TeachPage, VotePage } from "pages";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Header />
        <Router>
          <HomePage path="/" />
          <TeachPage path="/teach/:id" />
          <VotePage path="/vote/:id" />
        </Router>
        <Footer />
      </div>
    </React.StrictMode>
  );
}

export default App;
