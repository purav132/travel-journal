import React from "react";

export default function Main(props) {
  return (
    <section>
      <img
        className="place-pic"
        src={props.place.imageUrl}
        width="200px"
        alt=""
      />
      <div>
        <div className="place-location">
          <div className="place-location-marker">
            <i className="fa fa-map-marker"></i>
            <span className="place-country">{props.place.location}</span>
          </div>
          <a className="place-ggl-location" href={props.place.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className="place-title">{props.place.title}</h1>
        <h3 className="place-date">
          {props.place.startDate} - {props.place.endDate}
        </h3>
        <p className="place-description">{props.place.description}</p>
      </div>
    </section>
  );
}
