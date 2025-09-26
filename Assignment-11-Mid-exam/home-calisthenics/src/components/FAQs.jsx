import { useState } from "react";
import "./styles/FAQs.css";

export default function FAQs() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);

  return (
    <div className="FAQs-page">
      <div className="FAQs-heading">
        <h1 className="project-heading text-4xl dark:text-white m-5">FAQs.</h1>
      </div>

      <div className="FAQs-accordian border rounded-lg shadow-lg">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="FAQs-one w-full px-4 py-2 text-left bg-yellow-100 hover:bg-yellow-200"
        >
          {isOpen ? "▼" : "▶"} Why is it harder than gym?
        </button>
        {isOpen && (
          <div className="FAQs-one-answer px-4 py-2 bg-white text-gray-700">
            Because your using your whole body weight at once, unlike in gym, where you decide how much you want.
          </div>
        )}

        <button
          onClick={() => setIsOpenTwo(!isOpenTwo)}
          className="FAQs-two w-full px-4 py-2 text-left bg-yellow-100 hover:bg-yellow-200"
        >
          {isOpenTwo ? "▼" : "▶"} Can I use Calisthenics to lose fat?
        </button>
        {isOpenTwo && (
          <div className="FAQs-two-answer px-4 py-2 bg-white text-gray-700">
            Not by itself. It focuses on muscle building. You need separate fat loss exercises for it. Try rope skipping or spiriting.
          </div>
        )}

        <button
          onClick={() => setIsOpenThree(!isOpenThree)}
          className="FAQs-three w-full px-4 py-2 text-left bg-yellow-100 hover:bg-yellow-200"
        >
          {isOpenThree ? "▼" : "▶"} Why do I need momentum when everyone talks about motivation?
        </button>
        {isOpenThree && (
          <div className="FAQs-three-answer px-4 py-2 bg-white text-gray-700">
            You're your own biggest obstacle. Goals require total completion. Motivation isn't dependable, but momentum—acting even when you don't want to—matters most.
          </div>
        )}

        <button
          onClick={() => setIsOpenFour(!isOpenFour)}
          className="FAQs-four w-full px-4 py-2 text-left bg-yellow-100 hover:bg-yellow-200"
        >
          {isOpenFour ? "▼" : "▶"} When should I expect results?
        </button>
        {isOpenFour && (
          <div className="FAQs-four-answer px-4 py-2 bg-white text-gray-700">
            It takes at least a year. Don't go overboard by doing more than what you can realistically do.
          </div>
        )}
      </div>
    </div>
  );
}
