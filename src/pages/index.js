import { graphql } from "gatsby";
import * as React from "react";

import "../styles/global.css";
import "../styles/home.css";

import logo from "../images/vervoerregio_amsterdam_logo.svg";
import dark from "../images/dark_mode_icon.svg";
import info from "../images/information_icon.svg";

const IndexPage = ({ data }) => {
  const websites = data.website.websites;

  return (
    <body>
      <header>
        <nav>
          <a href="/">
            <img src={logo} alt="logo vervoerregio" />
          </a>

          <section class="header-icons">
            <a href="/info">
              <img class="information-icon-img" src={info} alt="information icon" />
            </a>
            <img src={dark} alt="darkmode icon" />
          </section>
        </nav>
      </header>

      <main>
        <section class="heading">
          <h1>
            Partners overzicht
          </h1>
        </section>
        
        <ul>
          {websites.map((website, index) => (
            <a><li key={index}>{website.titel}</li></a>
          ))}
        </ul>
      </main>
    </body>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    website {
      websites {
        titel
        homepage
      }
    }
  }
`;

export const Head = () => <title>Vervoerregio Amsterdam</title>;
