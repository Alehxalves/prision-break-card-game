import React, { useState, useEffect } from "react";
import "./card-stylesheet.scss";
import cn from "classnames";

import flipCardSound from "../assets/sounds/flip-card.mp3";
import collection from "../assets/themes/themes.json";

function Card() {

  const [cards, setCards] = useState([]);
  const [lastCard, setLastCard] = useState({});
  const [showBack, setShowBack] = useState(true);
  const [backCard, setBackCard] = useState('');
  const [backCardStyle, setBackCardStyle] = useState({});

  useEffect(() => {
    const themeName = localStorage.getItem("theme") || "default";
    let theme = collection.themes.find(theme => theme.name === themeName);
    if (!theme) {
      theme = collection.themes[0];
    }

    setBackCard(theme.cards.find(card => card.tag === 'back').url)
    setCards(theme.cards.map(card => {
      if (card.tag !== 'back') {
        return card.url
      }
      return null;
    }).filter(card => card))
    playSound()
  }, []);

  useEffect(() => {
    setBackCardStyle({
      backgroundImage: `url(${backCard})`
    })
  }, [backCard]);

  function flipFront() {
    playSound();
    let nextCard = cards[Math.floor(Math.random() * cards.length)];

    if (nextCard === lastCard) {
      while (nextCard === lastCard) {
        nextCard = cards[Math.floor(Math.random() * cards.length)];
      }
    }
    setLastCard(nextCard);

    const frontCardDoc = document.getElementById("front-card");
    frontCardDoc.style.backgroundImage = `url("${nextCard}")`;
    setShowBack(!showBack);
  }

  function flipBack() {
    playSound();
    setShowBack(!showBack);
  }

  function playSound() {
    const audio = new Audio(flipCardSound);
    audio.play();
  }

  return (
    <div className="card-container">
      <div className="card-outer">
        <div
          className={cn("card-inner", {
            showBack,
          })}
        >
          <div className="card front" onClick={flipBack} id="front-card">
            <div className="card-body d-flex justify-content-center align-items-center"></div>
          </div>
          <div className="card back" onClick={flipFront} style={backCardStyle}>
            <div className="card-body d-flex justify-content-center align-items-center"></div>
          </div>
        </div>
      </div>
      {/* fast render images */}
      {cards.map((card, index) => (
        <img
          key={index}
          src={card}
          alt="card"
          style={{ display: "none" }}
        />
      ))}
    </div>
  );
}

export default Card;
