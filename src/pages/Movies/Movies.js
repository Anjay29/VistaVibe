import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomPagination from "../../components/Paginantion/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import "../Trending/Trending.css";
import Genres from "../../components/Genres";
import useGenre from "../../Hooks/useGenre";

const Movies = () => {
  const [pages, setPages] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setnumOfPages] = useState();
  const [genre, setgenre] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforurl = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?with_genres=${genreforurl}`,
      params: {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: pages,
        api_key: process.env.REACT_APP_API_KEY,
        sort_by: "popularity.desc",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWMwMmE5ODIzN2RmNTVjMTVjYTRkZWI5NWVkM2RiZiIsInN1YiI6IjY0ZDdjOTAxMzcxMDk3MDBjNTFhYzQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jku8GeuJh75mg9iVZR0wsGBe4R5uWeETZTgPteuo7xc",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setContent(response.data.results);
        setnumOfPages(response.data.total_pages);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [genreforurl, pages]);

  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genre={genre}
        setgenre={setgenre}
        setPages={setPages}
      />
      <div className="trending">
        {content.map((element) => (
          <SingleContent
            key={element.id}
            name={element.original_title}
            poster={element.poster_path}
            date={element.release_date}
            media_type="movie"
            vote={element.vote_average}
          />
        ))}
      </div>
      <CustomPagination setPages={setPages} numOfPages={numOfPages} />
    </div>
  );
};

export default Movies;
