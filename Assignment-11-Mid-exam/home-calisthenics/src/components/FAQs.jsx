import { useState } from "react";
import "./styles/FAQs.css";

export default function FAQs() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);

  return (
    <div className="FAQs-page">
      <div className="FAQs-accordian border rounded-md shadow-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="FAQs-one w-full px-4 py-2 text-left bg-gray-200 hover:bg-gray-300"
        >
          {isOpen ? "▼" : "▶"} What is Tailwind CSS?
        </button>
        {isOpen && (
          <div className="FAQs-one-answer px-4 py-2 bg-white text-gray-700">
            Tailwind CSS is a utility-first CSS framework for rapidly building
            custom designs.
          </div>
        )}

        <button
          onClick={() => setIsOpenTwo(!isOpenTwo)}
          className="FAQs-two w-full px-4 py-2 text-left bg-gray-200 hover:bg-gray-300"
        >
          {isOpenTwo ? "▼" : "▶"} What on your mind?
        </button>
        {isOpenTwo && (
          <div className="FAQs-two-answer px-4 py-2 bg-white text-gray-700">
            Nothing too important.
          </div>
        )}
      </div>
    </div>
  );
}
