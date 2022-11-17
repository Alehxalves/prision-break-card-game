import React, { useState } from "react";
import "../styles.scss";
import cn from "classnames";

import hearts from "../images/hearts.png";
import spades from "../images/spades.png";
import clubs from "../images/clubs.png";
import diamonds from "../images/diamonds.png";

function Card() {
  const cards = [hearts, spades, clubs, diamonds];
  const [lastCard, setLastCard] = useState({});
  const [showBack, setShowBack] = useState(true);

  function flipFront() {
    const card = document.getElementById("front-card");
    let nextCard = cards[Math.floor(Math.random() * cards.length)];

    if (nextCard === lastCard) {
      while (nextCard === lastCard) {
        nextCard = cards[Math.floor(Math.random() * cards.length)];
      }
    }
    setLastCard(nextCard);
    card.style.backgroundImage = `url("${nextCard}")`;
    setShowBack(!showBack);
  }

  function flipBack() {
    setShowBack(!showBack);
  }

  return (
    <div className="card-outer">
      <div
        className={cn("card-inner", {
          showBack,
        })}
      >
        <div className="card front" onClick={flipBack} id="front-card">
          <div className="card-body d-flex justify-content-center align-items-center"></div>
        </div>
        <div className="card back" onClick={flipFront}>
          <div className="card-body d-flex justify-content-center align-items-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
