import React, { useEffect } from "react";
import axios from "axios";
import { Chip } from "@mui/material";

const Genres = ({
  selectedGenres,
  genre,
  setgenre,
  setSelectedGenres,
  setPages,
  type,
}) => {
  const handleAdd = (element) => {
    setSelectedGenres([...selectedGenres, element]);
    setgenre(genre.filter((e) => e.id !== element.id));
    setPages(1);
  };

  const handleRemove = (genres) => {
    setSelectedGenres(
      selectedGenres.filter((element) => element.id !== genres.id)
    );
    setgenre([...genre, genres]);
    setPages(1);
  };

  const fetchGenres = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}`,
      params: { language: "en" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWMwMmE5ODIzN2RmNTVjMTVjYTRkZWI5NWVkM2RiZiIsInN1YiI6IjY0ZDdjOTAxMzcxMDk3MDBjNTFhYzQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jku8GeuJh75mg9iVZR0wsGBe4R5uWeETZTgPteuo7xc",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.genres);
        setgenre(response.data.genres);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchGenres();
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((element) => (
        <Chip
          key={element.id}
          label={element.name}
          size="small"
          color="primary"
          clickable
          onDelete={() => handleRemove(element)}
        />
      ))}

      {genre.map((element) => (
        <Chip
          key={element.id}
          label={element.name}
          style={{ backgroundColor: "wheat", margin: 2 }}
          size="small"
          clickable
          onClick={() => handleAdd(element)}
        />
      ))}
    </div>
  );
};

export default Genres;
