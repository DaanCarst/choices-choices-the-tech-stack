import { graphql } from "gatsby";
import * as React from "react";

import "../styles/global.css";
import "../styles/home.css";

import logo from "../images/vervoerregio_amsterdam_logo.svg";
import dark from "../images/dark_mode_icon.svg";
import info from "../images/information_icon.svg";
import walking from "../images/walking_together.svg";
import knowledge from "../images/sharing_knowledge.svg";

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
                Informatie
            </h1>
        </section>

        <div class="content-container">
            <section class="top-container">
              <section class="text-container">
                  <h3><span>Vervoerregio Amsterdam.</span> HvA</h3>
                  <p>
                      Wij hebben samen met studenten van de Hogeschool van Amsterdam een checklist ontwikkeld waarin op eenvoudige wijze wordt uitgelegd wat hierbij komt kijken en welke stappen u kunt nemen om uw website en app toegankelijk te maken.
                  </p>
              </section>
              <section class="image-container">
                  <img src={walking} class="text-image" alt="darkmode icon" />
              </section>
            </section>

            <section class="left-container">
                <h3>is uw website al toegankelijk?</h3>
                <p>
                    Binnen 2025 moet dit al! Voor overheden is dit al verplicht. En vanaf 2025 moet iedere nieuwe website en app digitaal toegankelijk zijn.
                    Dit moet volgens het EAA (European Accessibility Act). Dit zou er mee moeten helpen dat iedereen elke website zou kunnen bezoeken, niet uitmakende dat iemand een beperking heeft
                </p>
            </section>

            <section class="right-container">
                <h3>Wat kunt u doen om uw website toegankelijk te maken?</h3>
                <p>
                    De Vervoerregio Amsterdam heeft samen met studenten van de Hogeschool van Amsterdam een checklist ontwikkeld
                    waarin op eenvoudige wijze wordt uitgelegd wat hierbij komt kijken en welke stappen u kunt nemen om uw website
                    en app toegankelijk te maken.
                </p>
            </section>

            <section class="bot-container">
              <section class="text-container">
                <h3>Wat is de wettelijke achtergrond?</h3>

                <p>
                  In Nederland zijn er ca. 2 miljoen mensen met een beperking. Als deze mensen uw website of app niet kunnen
                  gebruiken, dan zorgt dat dat deze mensen worden uitgesloten van de samenleving. Medio 2025 wordt om die reden door.
                      
                  De Europese Unie de European Accessibility Act (EAA) of Europese Toegankelijkheidswet ingevoerd. De wet zorgt
                  ervoor dat digitale barrières worden verwijderd voor mensen met een beperking. De eisen zijn gebaseerd op de Web
                  Content Accessibility Guidelines (WCAG) van het World Wide Web Consortium.
                </p>
              </section>
              <section class="image-container">
                <img src={knowledge} class="text-image" alt="Sharing Knowledge" />
              </section>
            </section>
        </div>
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
