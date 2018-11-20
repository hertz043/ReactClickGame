import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (


  <div className="card" value={props.id} onClick={props.handleClick} name={props.name} id={props.id}>
    <div className="img-container">
      <img alt={props.name} name={props.id} src={props.image} />
    </div>
  </div>
);

export default CharacterCard;
