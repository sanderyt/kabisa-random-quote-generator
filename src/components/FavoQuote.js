import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const FavoQuote = ({ quote, onDelete }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="favo-quote"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="favo-quote--quote">{quote.quote}</span>
      <span>- {quote.author}</span>
      <FontAwesomeIcon
        icon={faTrash}
        className={hover ? "delete delete--active" : "delete"}
        onClick={() => onDelete(quote)}
      />
    </div>
  );
};

export default FavoQuote;
