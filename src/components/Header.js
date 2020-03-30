import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onToggle }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <h1>Kabisa's Random Quote Generator</h1>
      </div>
      <div className="header__favorites">
        <button className="btn btn--cta" onClick={onToggle}>
          <FontAwesomeIcon icon={faHeart} />
          Your favorites
        </button>
      </div>
    </div>
  );
};

export default Header;
