import React from "react";
import "./FeaturedMovie.css";

export default function FeaturedMovie({ item }) {
  const firstDate = new Date(item.first_air_date);
  const genres = [];
  for (const i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <h1>{item.original_name}</h1>
          <div className="featured-info">
            <h2>{item.vote_average} pontos</h2>
            <h2>{firstDate.getFullYear()}</h2>
            <h2>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </h2>
          </div>
          <p>{item.overview}</p>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`}>Assistir</a>
            <a href={`/list/add/${item.id}`}>+ Minha Lista</a>
          </div>
          <h2>
            <strong>Gêneros:</strong> {genres.join(", ")}
          </h2>
        </div>
      </div>
    </section>
  );
}
