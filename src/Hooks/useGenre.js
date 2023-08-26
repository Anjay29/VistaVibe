import { useEffect, useState } from "react";

const useGenre = (selectedGenres) => {
  const [genreForUrl, setGenreForUrl] = useState("");
  useEffect(() => {
    if (selectedGenres.length >= 1) {
      const GenreIds = selectedGenres.map((g) => g.id).join(",");
      setGenreForUrl(GenreIds);
    }
  }, [selectedGenres, setGenreForUrl]);

  return genreForUrl;
};

export default useGenre;
