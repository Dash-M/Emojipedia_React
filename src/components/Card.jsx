import React from "react";

export default function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img">
          {props.emojiTerm.emoji}
        </span>
        <span>{props.emojiTerm.name}</span>
      </dt>
      <dd>{props.emojiTerm.meaning}</dd>
    </div>
  );
}
