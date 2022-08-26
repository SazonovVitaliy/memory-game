import React, { FC } from "react";
import { ICard } from "../types";
interface ICardProps {
  card: ICard;
  handleChoice: (card: ICard) => void;
}
const Card: FC<ICardProps> = ({ card, handleChoice }) => {
  const itemClass = card.status ? card.status : "";

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (card) {
      handleChoice(card);
    }
  };
  return (
    <div className={"game-card" + itemClass} onClick={handleClick}>
      <img
        src={card.image}
        alt="img"
        className="card-img"
        key={Math.random() - 0.5}
      ></img>
    </div>
  );
};

export default Card;
