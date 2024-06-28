import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import { Badge } from "@mui/material";

const SingleContent = ({ name, vote, media_type, poster, date }) => {
  return (
    <div className="media">
      <Badge badgeContent={vote} color={vote > 7 ? "primary" : "secondary"} />

      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={name}
      />
      <b className="title">{name}</b>
      <span className="subTitle">
        {media_type === "movie" ? "Movie" : "TV Series"}
        <span className="subTitle">{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;
