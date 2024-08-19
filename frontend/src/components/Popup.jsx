import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Popup = ({ isOpen, onClose }) => {
  const [cardData, setCardData] = useState({
    id: "",
    title: "",
    description: "",
  });

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/api/cards", cardData)
        .then(() => {
          toast("Created");
        })
        .catch((err) => {
          console.log(err);
          toast("Can't Create Card");
        });
    } catch (error) {
      console.log(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 text-left">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Add Card</h2>
        <form onSubmit={SubmitHandler}>
          <div className="mb-4">
            <label className="block text-gray-700">ID</label>
            <input
              type="text"
              value={cardData.id}
              onChange={(e) => setCardData({ ...cardData, id: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Id"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Card Title</label>
            <input
              type="text"
              value={cardData.title}
              onChange={(e) =>
                setCardData({ ...cardData, title: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Card Description</label>
            <input
              type="text"
              value={cardData.description}
              onChange={(e) =>
                setCardData({ ...cardData, description: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Friend's Name"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Popup;
