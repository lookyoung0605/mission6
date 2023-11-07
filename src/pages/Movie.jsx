import React from "react";
import * as S from "./Movie.style.jsx";
import { useNavigate } from "react-router-dom";

const url = "https://image.tmdb.org/t/p/w1280/";

function Movie({ title, vote_average, poster_path }) {
  const navigate = useNavigate();
  const onClickImg = () => {
    navigate(`/movie/${title}`, {
      state: {
        url: { url },
        poster_path: { poster_path },
      },
    });
  };

  return (
    <S.Contain onClick={onClickImg}>
      <S.Imgg src={url + poster_path} alt={title} />
      <S.Textt>
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </S.Textt>
    </S.Contain>
  );
}

export default Movie;
