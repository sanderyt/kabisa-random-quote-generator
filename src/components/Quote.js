import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Quote = ({ quote, onAdd }) => {
  return (
    <div className="quote">
      <span className="text--quote">"{quote.quote}"</span>
      <span className="text--person">- {quote.author}</span>
      <div className="quote__buttons">
        <button className="btn btn--cta" onClick={() => onAdd(quote)}>
          <FontAwesomeIcon icon={faHeart} />
          Add to favorites
        </button>
      </div>
    </div>
  );
};

export default Quote;
