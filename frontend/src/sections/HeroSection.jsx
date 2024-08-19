import React from "react";
import { useState, useEffect } from "react";
import Popup from "../components/Popup";
import axios from "axios";

const HeroSection = ({cards,setCards}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchData, setSearchData] = useState("");

  const handleOpenPopup = ({ cards, setCards }) => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    (async () => {
      try {
        await axios.get(
          `http://localhost:4000/api/cards/${searchData}`
        ).then((result)=>{
            setCards(result.data.cards)
        })
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchData]);
  return (
    <div className="h-[25vw] flex flex-col items-center mt-[6vw] gap-[3vw]">
      <h1 className="text-5xl  font-bold">
        Search for assistance or topics below:
      </h1>
      <div className="flex w-1/2 items-center px-[2vw] border-2 rounded-md">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-[3vw] focus:outline-none"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-[1.5vw]"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </div>
      <button
        onClick={handleOpenPopup}
        className="text-white bg-purple-200 mt-[3.5vw] rounded-lg px-[2.5vw] py-[0.7vw] text-[1.1vw]"
      >
        ADD Card
      </button>
      <Popup isOpen={isPopupOpen} onClose={handleOpenPopup} />
    </div>
  );
};

export default HeroSection;
