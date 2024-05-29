import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGM0OTQ3MDZhYzA1M2E0MDA5MTQ1MTFiNTZkYjYyMyIsInN1YiI6IjY2NTA3ZmRlZmQ3MTczNDZiNGRkODg5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bZtzviyvX8-rDOqxQBTUctIUWxpf3s6TA-U9QQQrY5Q",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  const scrollLeft = () => {
    cardsRef.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    cardsRef.current.scrollLeft += 200;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <MdChevronLeft
        size={40}
        className="icon icon-left"
        onClick={scrollLeft}
      />
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
      <MdChevronRight
        size={40}
        className="icon icon-right"
        onClick={scrollRight}
      />
    </div>
  );
};

export default TitleCards;
