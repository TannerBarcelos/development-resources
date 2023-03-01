import React from "react";

import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";
const MovieCard = ({ id, title, vote_average, poster_path, overview }) => {
  return (
    <Card
      style={{
        margin: "20px",
        minWidth: "300px",
        maxWidth: "600px",
        minHeight: "300px",
        overflow: "auto",
        padding: "20px",
        borderRadius: "3px",
        position: "relative",
      }}
    >
      <CardImg
        top
        style={{
          width: "300px",
          height: "400px",
          margin: "0 auto",
        }}
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="Card image cap"
      />
      <CardBody style={{ textAlign: "center" }}>
        <CardTitle style={{ textAlign: "center" }}>{title}</CardTitle>
        <CardSubtitle>{vote_average}</CardSubtitle>
        <CardText>{overview}</CardText>
        {/* Button here will link to a new page with synopsis on this movie or open a modal.. not sure yet */}
        <a
          className="btn btn-primary"
          target="_blank"
          href={`https://www.themoviedb.org/movie/${id}`}
          style={{
            position: "absolute",
            bottom: "10px",
            left: "30%",
            width: "40%",
          }}
        >
          Learn More
        </a>
      </CardBody>
    </Card>
  );
};
export default MovieCard;
