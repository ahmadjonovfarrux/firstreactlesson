import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [titles, setTitles] = useState([
    { title: "Title-1", id: 1 },
    { title: "Titles-2", id: 2 },
    { title: "Titles-3", id: 3 },
  ]);

  const deleteTitle = (id) => {
    const filteredTitles = titles.filter((t) => t.id !== id);
    setTitles(filteredTitles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitles([
      ...titles,
      {
        title: text,
        id: Math.random(),
      },
    ]);
    setText("");
  };

  return (
    <>
      <h1>Titles</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          type="text"
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
      <ul>
        {titles.map((t) => {
          return (
            <li key={t.id}>
              <p>{t.title}</p>
              <button onClick={() => deleteTitle(t.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default App;
