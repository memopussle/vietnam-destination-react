import React from "react";

export default function Card(props) {
  return (
    <main>
      <div className="card">
        <img
          className="card__img"
          src={`./img/${props.item.imgUrl}`}
          alt="card1"
        />
        <div className="card__text">
          <h1>{props.item.title}</h1>
          <p>Location: {props.item.location}</p>

          <a href={props.item.googleMapUrl}>view location on Google Map</a>

          <p>
            Start Date: <span className="bold">{props.item.startDate}</span>
          </p>
          <p>
            End Date: <span className="bold">{props.item.endDate}</span>
          </p>
          <p>{props.item.description}</p>
          <p>
            <a className="card__button" href="https://google.com">
              Visit now
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
