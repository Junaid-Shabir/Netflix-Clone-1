import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../tmdb";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../components/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="banner__contents">
              <h1 className="banner__title text-white mb-3">{movie?.title || movie?.name || movie?.original_name}</h1>
              <div className="banner__buttons">
                <Button variant="primary" className="me-2" style={{ padding: "8px 55px" }}>
                  Play
                </Button>
                <Button className="custom-margin-top" variant="outline-light" style={{ padding: "8px 55px" }}>
                  My List
                </Button>
              </div>
              <p className="banner__description text-white" style={{ fontSize: "25px", marginTop: "20px" }}>
                {movie?.overview}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
