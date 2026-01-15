"use client";

import { useState } from "react";
import sentences from "./Components/sentences";

export default function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(1);

  const generate = (e) => {
    e.preventDefault();
    let amount = count;
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }
    setText(sentences.slice(0, amount));
  };

  return (
    <div className="w-160 text-[25px] font-medium my-40 mx-74 flex flex-col gap-8 items-center justify-center">
      <p>TIRED OF BORING LOREM IPSUM?</p>
      <div className="text-[20px] font-medium flex gap-2 justify-center w-160">
        <label htmlFor="amount">Paragraphs:</label>
        <input
          onChange={(e) => setCount(Number(e.target.value))}
          className="bg-[#cbd5e1] py-1 px-2 rounded-sm w-16"
          type="number"
          name="amount"
          min={1}
          max={8}
          value={count}
        />
        <button
          onClick={generate}
          className="bg-[#10b981] px-4 py-1.5 text-[14px] text-white rounded-sm font-medium cursor-pointer"
        >
          Generate
        </button>
      </div>
      <article className="text-[16px] flex gap-5 flex-col">
        {text.map((sentence, index) => {
          return <li key={index}>{sentence}</li>;
        })}
      </article>
    </div>
  );
}
