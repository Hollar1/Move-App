import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";

const API_KEY = "eeaee3b697c26c87b1da4731657f763f";

const BASE_URL = "https://api.themoviedb.org/3/";

export const MoviesContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response01 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=1`
      );

      const response02 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=2`
      );

      const response03 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=3`
      );

      const response04 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=4`
      );

      const response05 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=5`
      );

      const response06 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=6`
      );

      const response07 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=7`
      );

      const response08 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=8`
      );

      const response09 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=9`
      );

      const response10 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=10`
      );

      const response11 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=11`
      );

      const response12 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=12`
      );

      const response13 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=13`
      );

      const response14 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=14`
      );

      const response15 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=15`
      );

      const response16 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=16`
      );

      const response17 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=17`
      );

      const response18 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=18`
      );

      const response19 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=19`
      );

      const response20 = await axios.get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=20`
      );

      const allResults = [
        ...response01.data.results,
        ...response02.data.results,
        ...response03.data.results,
        ...response04.data.results,
        ...response05.data.results,
        ...response06.data.results,
        ...response07.data.results,
        ...response08.data.results,
        ...response09.data.results,
        ...response10.data.results,
        ...response11.data.results,
        ...response12.data.results,
        ...response13.data.results,
        ...response14.data.results,
        ...response15.data.results,
        ...response16.data.results,
        ...response17.data.results,
        ...response18.data.results,
        ...response19.data.results,
        ...response20.data.results,
      ];

      console.log(allResults);

      setMovies(allResults);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MoviesContext.Provider value={{ movies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovieContext = () => useContext(MoviesContext);
