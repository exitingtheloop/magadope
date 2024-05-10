import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import TrackVisibility from "react-on-screen";
import "animate.css";
import navIcon3 from "./assets/img/nav-icon3.svg";
import navIcon4 from "./assets/img/nav-icon4.svg";
import navIcon6 from "./assets/img/nav-icon6.svg";

const ethAdd = "FpKEQAeaUdhu5R32YpyZaeZmEkYCW78PZMrXea1TQmfd";
const shortenedEthAdd = "FpKEQA...1TQmfd";
const ticker = "$MAGADOPE";
const twitter = "https://twitter.com/MAGADOPECTO";
const telegram = "https://t.me/MAGADOPECTO";
const dexscreener =
  "https://dexscreener.com/solana/FpKEQAeaUdhu5R32YpyZaeZmEkYCW78PZMrXea1TQmfd";

function importAll(r) {
  let images = [];
  r.keys().map((item, index) => {
    images.push(r(item));
  });

  console.log(images);
  return images;
}

const listOfImages = importAll(
  require.context("./assets/magadopejpegs", false, /\.(png|jpe?g|svg)$/)
);

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery({ query: "(max-width: 520px)" });

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <Container>
      <Header />
      <Banner mobileMode={isMobile} />
      <Bannerz />
      <Menu />
      <Footer />
    </Container>
  );
}

function Header() {
  return (
    <Row>
      <Col xs={12}>
        <header className="header">
          <h1>{ticker}</h1>
          <h3>COMMUNITY TAKEOVER!</h3>
        </header>
      </Col>
    </Row>
  );
}

function Bannerz() {
  return (
    <section className="chonkybanner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="leftrightchonkbanner">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>
                    MAKE AMERICA <br />
                    GREAT AGAIN!
                  </h1>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="leftrightchonkbanner">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    id="chonky-logo"
                    src="magadopejpegs/magadopelogo.png"
                    alt="Header Img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function Banner(props) {
  const { mobileMode } = props;
  return (
    <Row className="banner">
      <Col xs={12}>
        <h4> {mobileMode ? shortenedEthAdd : ethAdd} </h4>
        <div className="social-icon">
          <a href={twitter}>
            <img src={navIcon3} alt="" />
          </a>
          <a href={telegram}>
            <img src={navIcon4} alt="" />
          </a>
          <a href={dexscreener}>
            <img src={navIcon6} alt="" />
          </a>
        </div>
      </Col>
    </Row>
  );
}

function Menu() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div className="carousel-container">
            <div className="carousel-track">
              {listOfImages.map((img) => (
                <img
                  style={{ width: "250px", padding: "20px" }}
                  src={img}
                  alt="info"
                />
              ))}
              {listOfImages.map((img) => (
                <img
                  style={{ width: "250px", padding: "20px" }}
                  src={img}
                  alt="info"
                />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div style={{ margin: "20px", textAlign: "center" }}>
        Simply by the community, for the community{" "}
        <a href={twitter}>{ticker}</a>
      </div>
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
