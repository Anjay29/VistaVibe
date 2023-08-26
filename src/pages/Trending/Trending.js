import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Trending.css";
import CustomPagination from "../../components/Paginantion/CustomPagination";

const Trending = () => {
  const [pages, setPages] = useState(1);
  const [content, setContent] = useState([]);

  const fetchList = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${pages}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWMwMmE5ODIzN2RmNTVjMTVjYTRkZWI5NWVkM2RiZiIsInN1YiI6IjY0ZDdjOTAxMzcxMDk3MDBjNTFhYzQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jku8GeuJh75mg9iVZR0wsGBe4R5uWeETZTgPteuo7xc",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
        setContent(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchList();
    // eslint-disable-next-line
  }, [pages]);

  return (
    <div>
      <span className="pageTitle">Trending</span>

      <div className="trending">
        {content.map((element) => (
          <SingleContent
            key={element.id}
            id={element.id}
            name={element.title || element.name}
            poster={element.poster_path}
            date={element.release_date || element.first_air_date}
            media_type={element.media_type}
            vote={element.vote_average}
          />
        ))}
      </div>
      <CustomPagination setPages={setPages} />
    </div>
  );
};

export default Trending;
