import React, { useState, useEffect } from "react";
import homeStyles from "../home/home.module.css";
import MovieCards from "../../components/moviesCars/MovieCards";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { FaEye } from "react-icons/fa";
import room01 from "../../assets/images/room1.jpg";
import room02 from "../../assets/images/room2.jpg";
import room03 from "../../assets/images/room3.jpg";
import room04 from "../../assets/images/room4.jpg";
import { useMovieContext } from "../../utils/movieContext";
import Adverts from "../../adverts/Adverts";

function Home() {
  const [search, setSearch] = useState("");
  const { movies } = useMovieContext([]);
  console.log(movies);
  const [likedMovies, setLikedMovies] = useState([]);
  const [showAd, setShowAd] = useState();

  const handleLiked = (movie_id) => {
    setLikedMovies(
      (prev) =>
        prev.includes(movie_id)
          ? prev.filter((id) => id !== movie_id) // unlike
          : [...prev, movie_id] // like
    );
  };

  useEffect(() => {
    setShowAd(true);
    setTimeout(() => {
      setShowAd(false);
    }, 10000);
  }, []);



  return (
    <div className={homeStyles.parent_wrapper}>
      {showAd && <Adverts />}
      <div className={homeStyles.wrapper}>
        <div className={homeStyles.total_movies}>
          <span>Total Movies:</span> <span> {movies.length}</span>
        </div>

        <form action="">
          <div className={homeStyles.search_input_div}>
            <input
              placeholder="Search for movies..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {movies.map(
            (movie, index) =>
              movie.title.toLowerCase().startsWith(search.toLowerCase()) && (
                <MovieCards
                  key={index}
                  title={movie.title}
                  release_date={movie.release_date}
                  onClick={() => handleLiked(movie.id)}
                  liked_color={likedMovies.includes(movie.id) ? "red" : null}
                  icon={
                    likedMovies.includes(movie.id)
                      ? faSolidHeart
                      : faRegularHeart
                  }
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  overview={movie.overview}
                />
              )
          )}
        </form>
      </div>
    </div>
  );
}

export default Home;
