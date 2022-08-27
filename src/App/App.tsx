import React, { FC, useEffect, useState } from "react";
import Card from "./components/Card";
import { ICard } from "./types/index";
import Modal from "./components/Modal";

const App: FC = () => {
  const [shuffledArray, setShuffledArray] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<ICard | undefined>();
  const [choiceTwo, setChoiceTwo] = useState<ICard | undefined>();
  const [matches, setMatches] = useState(1);
  const [modal, setModal] = useState(false);
  const arr: ICard[] = [
    { type: "lion", image: "./dist/dest/2.jpg", status: "" },
    { type: "leopard", image: "./dist/dest/1.jpg", status: "" },
    { type: "rabbit", image: "./dist/dest/3.jpg", status: "" },
    { type: "deer", image: "./dist/dest/4.jpg", status: "" },
    { type: "cat", image: "./dist/dest/5.jpg", status: "" },
    { type: "horse", image: "./dist/dest/6.jpg", status: "" },
    { type: "bear", image: "./dist/dest/7.jpg", status: "" },
    { type: "hedgehog", image: "./dist/dest/8.jpg", status: "" },
    { type: "leopard", image: "./dist/dest/1.jpg", status: "" },
    { type: "lion", image: "./dist/dest/2.jpg", status: "" },
    { type: "rabbit", image: "./dist/dest/3.jpg", status: "" },
    { type: "deer", image: "./dist/dest/4.jpg", status: "" },
    { type: "cat", image: "./dist/dest/5.jpg", status: "" },
    { type: "horse", image: "./dist/dest/6.jpg", status: "" },
    { type: "bear", image: "./dist/dest/7.jpg", status: "" },
    { type: "hedgehog", image: "./dist/dest/8.jpg", status: "" },
  ];
  const rootClasses = ["game-field"];
  if (modal) {
    rootClasses.push("not-active");
  }
  useEffect(() => {
    matches > 7 && setModal(true);
  }, [matches]);
  const handleReset = () => {
    setShuffledArray(arr.sort(() => Math.random() - 0.5));
    setTurns(0);
    setChoiceOne(undefined);
    setChoiceTwo(undefined);
    setMatches(0);
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
      choiceOne.status = "matches";
      choiceTwo.status = "matches";
      setMatches((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="container">
        <button className="btn" onClick={handleReset}>
          Начать игру
        </button>
        <Modal visible={modal} setVisible={setModal}></Modal>
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
