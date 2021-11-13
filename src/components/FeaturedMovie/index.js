import React from "react";
import "./FeaturedMovie.css";

export default function FeaturedMovie({ item }) {
  const firstDate = new Date(item.first_air_date);
  const genres = [];
  for (const i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
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
          <div className="featured--info">
            <h2 className="featured--points">{item.vote_average} pontos</h2>
            <h2>{firstDate.getFullYear()}</h2>
            <h2>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </h2>
          </div>
          <p>{description}</p>
          <div className="featured--buttons">
            <a className="featured--watchbutton" href={`/watch/${item.id}`}>
              Assistir
            </a>
            <a className="featured--mylistbutton" href={`/list/add/${item.id}`}>
              + Minha Lista
            </a>
          </div>
          <h3>
            <strong>Gêneros:</strong> {genres.join(", ")}
          </h3>
        </div>
      </div>
    </section>
  );
}
