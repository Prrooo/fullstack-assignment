import React, { useEffect } from "react";
import Card from "../components/Card";
import axiox from "axios";

const MainSection = ({ cards, setCards }) => {

  useEffect(() => {
    (async () => {
      try {
        const result = await axiox.get(`http://localhost:4000/api/cards`);
        if (result) {
          setCards(result.data.cards);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (cards.length === 0) {
    return (
      <div className="mb-[10vw] ">
        NO CARD FOUND
        <p>ADD CARD FIRST</p>
      </div>
    );
  }

  return (
    <div className=" w-3/4 text-center mx-auto mb-[10vw] grid grid-cols-2 gap-[2vw]">
      {cards.length > 0 &&
        cards.map((card) => (
          <Card title={card.title} description={card.description} />
        ))}
    </div>
  );
};

export default MainSection;
