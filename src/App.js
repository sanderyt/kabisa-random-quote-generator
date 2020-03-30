import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import Content from "./components/Content";
import Box from "./components/Box";
import Spinner from "./components/Spinner";
import Quote from "./components/Quote";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [quote, setQuote] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [firstClick, setFirstClick] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("favorites");
    if (data) {
      setFavorites(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  });

  const getRandomQuote = () => {
    setFirstClick(true);
    setIsLoading(true);
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
      .then(response => response.json())
      .then(data => {
        setQuote(data);
        setIsLoading(false);
      });
  };

  const toggleFavorites = boolean => {
    setIsOpen(boolean);
  };

  const addFavorite = current => {
    toggleFavorites(true);
    const found = favorites.some(el => el.id === current.id);
    !found && setFavorites([...favorites, current]);
  };

  const deleteFavorite = current => {
    const newArr = favorites.filter(quote => quote.id !== current.id);
    setFavorites(newArr);
  };

  return (
    <div>
      <Header onToggle={toggleFavorites} />
      <Content>
        <Box>
          <h2>Quote of the day</h2>
          {firstClick ? (
            isLoading ? (
              <Spinner />
            ) : (
              <Quote quote={quote} onAdd={addFavorite} />
            )
          ) : (
            <div className="intro">
              <h3>Click for a random quote</h3>
              <FontAwesomeIcon icon={faArrowCircleDown} />
            </div>
          )}
          <button className="btn btn--primary" onClick={getRandomQuote}>
            <FontAwesomeIcon icon={faRandom} />
            Get random quote
          </button>
        </Box>
      </Content>
      <Sidebar
        isOpen={isOpen}
        onClose={() => toggleFavorites(false)}
        onDelete={deleteFavorite}
        quotes={favorites}
      />
    </div>
  );
};

export default App;
