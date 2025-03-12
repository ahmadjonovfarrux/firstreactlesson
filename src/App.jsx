import { useEffect, useState } from "react";
import TitleList from "./components/TitlesList";
import GetForm from "./components/Form";
import Titles from "./components/data";

const initialValue = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

function App() {
  const [text, setText] = useState("");
  const [titles, setTitles] = useState(initialValue());
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        console.log("hello");
      }, 5000);
    }

    if (text) {
      setError(false);
    }
  }, [error, text]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(titles));
  }, [titles]);

  // delete btn
  const deleteTitle = (id) => {
    const filteredTitles = titles.filter((t) => t.id !== id);
    setTitles(filteredTitles);
  };

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length == 0) {
      setError("Write something please");
    } else if (text.length < 4) {
      setError("Write more than 4 words");
    } else {
      setTitles([
        ...titles,
        {
          title: text,
          id: Math.random(),
        },
      ]);

      setText("");
      setError(false);
    }
  };

  return (
    <div className="container   ">
      <h1 className="title text-5xl font-bold mt-5 mb-5">Titles</h1>
      <GetForm
        handleSubmit={handleSubmit}
        error={error}
        text={text}
        setText={setText}
      />
      <ul className="list">
        {!titles.length && <h2 className="">You don't have any titles</h2>}
        {titles.length > 0 && (
          <TitleList titles={titles} deleteTitle={deleteTitle} />
        )}
      </ul>
    </div>
  );
}
export default App;
