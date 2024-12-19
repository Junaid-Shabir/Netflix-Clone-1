import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "be29c100f6917e8f664b9efa2e5e6939";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

function MovieDetails() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [scenes, setScenes] = useState([]); // State for storing movie scenes
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        // Fetch movie details
        const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setMovie(data);

        // Fetch movie trailer
        const trailerResponse = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);

        if (!trailerResponse.ok) {
          throw new Error(`Error: ${trailerResponse.status} - ${trailerResponse.statusText}`);
        }

        const trailerData = await trailerResponse.json();
        const youtubeTrailer = trailerData.results.find((video) => video.type === "Trailer" && video.site === "YouTube");

        if (youtubeTrailer) {
          setTrailer(youtubeTrailer.key);
        }

        // Fetch movie scenes (backdrops)
        const scenesResponse = await fetch(`${BASE_URL}/movie/${id}/images?api_key=${API_KEY}`);

        if (!scenesResponse.ok) {
          throw new Error(`Error: ${scenesResponse.status} - ${scenesResponse.statusText}`);
        }

        const scenesData = await scenesResponse.json();
        setScenes(scenesData.backdrops.slice(0, 5)); // Limit to 5 scenes
      } catch (err) {
        console.error("Failed to fetch data:", err.message);
        setError(err.message);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return (
      <div className="container my-5 text-white">
        <h1>Error</h1>
        <p>{error}</p>
        <p>Please check your network connection or try again later. If the issue persists, verify your API key or the server's SSL certificate.</p>
      </div>
    );
  }

  if (!movie) return <div className="container my-5 text-white">Loading...</div>;

  return (
    <>
      <div className="container my-5 text-white">
        <div className="row">
          <div className="col-md-4">
            <img className="img-fluid" src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "placeholder-image-url"} alt={movie.title || "Movie Poster"} />
          </div>
          <div className="col-md-8">
            <h1 className="mb-4">{movie.title}</h1>
            <p>
              <strong>Released:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Genre:</strong> {movie.genres ? movie.genres.map((g) => g.name).join(", ") : "N/A"}
            </p>
            <p>
              <strong>Duration:</strong> {movie.runtime ? movie.runtime : "N/A"} mins
            </p>
            <p>
              <strong>Country:</strong> {movie.production_countries ? movie.production_countries.map((c) => c.name).join(", ") : "N/A"}
            </p>
            <p>
              <strong>Production:</strong> {movie.production_companies ? movie.production_companies.map((p) => p.name).join(", ") : "N/A"}
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <h2>Trailer</h2>
            {trailer ? <iframe width="100%" height="500" src={`https://www.youtube.com/embed/${trailer}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Movie Trailer"></iframe> : <p>Trailer not available.</p>}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <h2>Movie Scenes</h2>
            <div className="row">
              {scenes.length > 0 ? (
                scenes.map((scene, index) => (
                  <div className="col-md-3 mb-4" key={index}>
                    <img className="img-fluid rounded" src={`${IMAGE_BASE_URL}${scene.file_path}`} alt={`Scene ${index + 1}`} />
                  </div>
                ))
              ) : (
                <p>No scenes available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
