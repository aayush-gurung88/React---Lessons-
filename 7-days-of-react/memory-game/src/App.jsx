import { useState, useEffect } from "react";
import "./App.css";

const items = [
  { id: Math.random(), symbol: "🍎", isFlipped: false, isMatched: false },
  { id: Math.random(), symbol: "🍎", isFlipped: false, isMatched: false },
  { id: Math.random(), symbol: "🍌", isFlipped: false, isMatched: false },
  { id: Math.random(), symbol: "🍌", isFlipped: false, isMatched: false },
  { id: Math.random(), symbol: "🍇", isFlipped: false, isMatched: false },
  { id: Math.random(), symbol: "🍇", isFlipped: false, isMatched: false },
  { id: Math.random(), symbol: "🍉", isFlipped: false, isMatched: false },
  { id: Math.random(), symbol: "🍉", isFlipped: false, isMatched: false },
];

function App() {
  const [cards, setCards] = useState(items);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffled = [...items]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, isFlipped: false, isMatched: false }));

    setChoiceOne(null);
    setChoiceTwo(null);

    setCards(shuffled);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    // check if both choices have a card
    if (choiceOne && choiceTwo) {
      if (choiceOne.symbol === choiceTwo.symbol) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.id === choiceOne.id || card.id === choiceTwo.id) {
              return { ...card, isMatched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          setCards((prevCards) => {
            return prevCards.map((card) => {
              if (card.id === choiceOne.id || card.id === choiceTwo.id) {
                return { ...card, isFlipped: false };
              }
              return card;
            });
          });
          resetTurn();
        }, 1000); // 1000ms = 1 second
      }
    }
  }, [choiceOne, choiceTwo]);

  // this is helper function
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  function handleCardClick(clickedCard) {
    if (
      clickedCard.isFlipped ||
      clickedCard.isMatched ||
      clickedCard.id === choiceOne?.id
    ) {
      return;
    }

    choiceOne ? setChoiceTwo(clickedCard) : setChoiceOne(clickedCard);

    // this is the card flip logic
    const updatedCards = cards.map((card) => {
      if (card.id === clickedCard.id) {
        return { ...card, isFlipped: true };
      }
      return card;
    });
    setCards(updatedCards);
  }

  return (
    <div>
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}> Shuffle Cards</button>

      <div className="card-grid">
        {cards.map((card) => (
          <button
            key={card.id}
            className={`memory-card ${
              card.isFlipped || card.isMatched ? "flipped" : ""
            } ${card.isMatched ? "matched" : ""}`}
            onClick={() => handleCardClick(card)}
          >
            <span className="card-inner">
              <span className="card-front">❓</span>
              <span className="card-back">{card.symbol}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
