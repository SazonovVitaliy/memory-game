import React, { FC, useState } from "react";
import Card from "./components/Card";
import { ICard } from "./types/index";

const App: FC = () => {
  const [shuffledArray, setShuffledArray] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<ICard | undefined>();
  const [choiceTwo, setChoiceTwo] = useState<ICard | undefined>();
  const arr: ICard[] = [
    { type: "lion", image: "./assets/2.jpg", status: "" },
    { type: "leopard", image: "./assets/1.jpg", status: "" },
    { type: "rabbit", image: "./assets/3.jpg", status: "" },
    { type: "deer", image: "./assets/4.jpg", status: "" },
    { type: "cat", image: "./assets/5.jpg", status: "" },
    { type: "horse", image: "./assets/6.jpg", status: "" },
    { type: "bear", image: "./assets/7.jpg", status: "" },
    { type: "hedgehog", image: "./assets/8.jpg", status: "" },
    { type: "leopard", image: "./assets/1.jpg", status: "" },
    { type: "lion", image: "./assets/2.jpg", status: "" },
    { type: "rabbit", image: "./assets/3.jpg", status: "" },
    { type: "deer", image: "./assets/4.jpg", status: "" },
    { type: "cat", image: "./assets/5.jpg", status: "" },
    { type: "horse", image: "./assets/6.jpg", status: "" },
    { type: "bear", image: "./assets/7.jpg", status: "" },
    { type: "hedgehog", image: "./assets/8.jpg", status: "" },
  ];
  const handleReset = () => {
    setShuffledArray(arr.sort(() => Math.random() - 0.5));
    setTurns(0);
    setChoiceOne(undefined);
    setChoiceTwo(undefined);
  };
  const handleChoice = (card: ICard) => {
    if (turns === 0) {
      setTurns((prev) => prev + 1);
      card.status = "active";
      setChoiceOne(card);
      setChoiceTwo(undefined);
    }
    if (turns === 1) {
      card.status = "active";
      setChoiceTwo(card);
      setTurns(0);
    }
    if (choiceOne.image !== choiceTwo.image) {
      choiceOne.status = "";
      choiceTwo.status = "";
    } else {
      choiceOne.status = "active";
      choiceTwo.status = "active";
    }
  };
  console.log(turns);

  console.log(choiceOne);
  console.log(choiceTwo);

  return (
    <>
      <div className="container">
        <button className="btn" onClick={handleReset}>
          Начать игру
        </button>
        <div className="game-field">
          {shuffledArray?.map((card) => (
            <Card
              key={Math.random() - 0.5}
              card={card}
              handleChoice={handleChoice}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
