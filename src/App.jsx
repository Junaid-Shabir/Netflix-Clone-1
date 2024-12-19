import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieRow from "./components/MovieRow";
import requests from "./tmdb";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import MovieDetails from "./components/MovieDetails";
import "./App.css";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Banner />
                <section id="netflixOriginals">
                  <MovieRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
                </section>
                <section id="trending">
                  <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
                </section>
                <section id="topRated">
                  <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
                </section>
                <section id="actionMovies">
                  <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow />
                </section>
                <section id="horrorMovies">
                  <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow />
                </section>
                {/* <section id="romanceMovies">
                  <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow />
                </section> */}
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
