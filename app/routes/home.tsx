import type { Route } from "./+types/home";
import { useState, useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Random Quote Machine" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const authors = [
    "Albert Einstein",
    "William Shakespeare",
    "Mark Twain",
    "Jane Austen",
    "Leo Tolstoy",
    "Martin Luther King Jr.",
    "Mother Teresa",
    "Mahatma Gandhi",
    "Nelson Mandela",
    "Barack Obama",
  ];

  const [num, setNum] = useState(0);
  const [author, setAuthor] = useState(authors[0]);

  const generateRandom = () => {
    const randomNum = Math.floor(Math.random() * 1000) + 1;
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    setNum(randomNum)
    setAuthor(randomAuthor);
  }

  useEffect(() => {
    generateRandom();
  }, []);

  return (
    <main className="flex flex-1 justify-center flex-col items-center gap-4">
      <div id="quote-box" className="flex flex-col items-center justify-center p-8 bg-slate-800 rounded-xl gap-2">
        <h1 id="text" className="text-4xl font-bold">$ {num.toFixed(2)}</h1>
        <p id="author" className="text-base font-medium text-slate-300">{author}</p>
        <div className="flex gap-4 mt-8">
          <button id="new-quote" className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors" onClick={generateRandom}>
            Generate Quote
          </button>
          <a id="tweet-quote" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors" target="_blank" href={`https://twitter.com/intent/tweet?text=${num} - ${author}`}>
            Tweet
          </a>
        </div>
      </div>
    </main>
  );
}
