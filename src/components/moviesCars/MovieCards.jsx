import React from "react";
import movieCardStyles from "../moviesCars/movieCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

function MovieCards({
  title,
  release_date,
  icon,
  image,
  onClick,
  liked_color,
  overview,
}) {
  return (
    <div className={movieCardStyles.parent_wrapper}>
      <div className={movieCardStyles.wrapper}>
        <section className={movieCardStyles.sec_01}>
          <div className={movieCardStyles.tile_div}>
            <h4>{title}</h4>
          </div>
          <div className={movieCardStyles.img_div}>
            <img src={image} alt="" />
            <div
              className={`${movieCardStyles.icons_div} ${liked_color}`}
              onClick={onClick}
            >
              <FontAwesomeIcon icon={icon} color={liked_color} />
            </div>
          </div>
          <div className={movieCardStyles.overview}>{overview}</div>
          <div className={movieCardStyles.release_date}>
            Release Date: {release_date}
          </div>
        </section>
      
      </div>
    </div>
  );
}

export default MovieCards;
