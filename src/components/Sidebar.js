import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import FavoQuote from "./FavoQuote";

const Sidebar = ({ isOpen, onClose, quotes, onDelete }) => {
  return (
    <div className={isOpen ? "sidebar sidebar--active" : "sidebar"}>
      <div className="sidebar__heading">
        <h3>Your favorite quotes</h3>
        <FontAwesomeIcon icon={faTimes} onClick={onClose} />
      </div>
      <div className="sidebar__content">
        {quotes.map(quote => (
          <FavoQuote quote={quote} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
