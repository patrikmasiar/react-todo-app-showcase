import React, { useState } from "react";
import "./App.css"; // jednoduché štýly (viď nižšie)

function App() {
  // ====== STATE (pamäť komponentu) ======
  // "text" drží aktuálnu hodnotu z inputu (čo píše používateľ)
  // "todos" je zoznam úloh (každá úloha bude objekt: { id, text, done })
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  // ====== HANDLERS (funkcie, ktoré reagujú na akcie) ======

  // 1) Pridanie novej úlohy cez formulár
  const handleSubmit = (e) => {
    e.preventDefault(); // zastaví klasické správanie formulára (refresh stránky)

    const trimmed = text.trim(); // odstráni medzery na začiatku/konci
    if (!trimmed) return; // ak je prázdny text, nič nepridávame

    // vytvoríme nový objekt úlohy
    const newTodo = {
      id: Date.now(), // jednoduché unikátne id
      text: trimmed,
      done: false, // nová úloha zatiaľ nie je hotová
    };

    // pridáme novú úlohu na začiatok zoznamu
    // (spread syntax ...todos skopíruje aktuálne úlohy)
    setTodos([newTodo, ...todos]);

    // vyčistíme input
    setText("");
  };

  // 2) Označenie úlohy ako hotovej/nehotovej (prepínanie checkboxu)
  const handleToggle = (id) => {
    // "map" prejde všetky úlohy a tú s daným id upraví
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  // 3) Vymazanie úlohy
  const handleDelete = (id) => {
    // "filter" vráti nový zoznam bez úlohy s daným id
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>TODO list</h1>

      {/* Formulár na pridávanie úloh */}
      <form className="todo-form" onSubmit={handleSubmit}>
        {/* input je "kontrolovaný" – jeho hodnota je viazaná na state "text" */}
        <input
          type="text"
          placeholder="Napíš úlohu..."
          value={text}
          onChange={(e) => setText(e.target.value)} // vždy uložíme do state, čo používateľ píše
          aria-label="Zadaj názov úlohy"
        />
        <button type="submit">Pridať</button>
      </form>

      {/* Počet úloh v zozname */}
      <p className="counter">Počet úloh: {todos.length}</p>

      {/* Zoznam úloh pomocou Array.map */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? "done" : ""}>
            {/* Label + checkbox na označenie hotovej úlohy */}
            <label className="todo-item">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleToggle(todo.id)}
                aria-label={`Označiť úlohu "${todo.text}" ako hotovú`}
              />
              {/* Keď je úloha hotová, cez CSS ju prečiarkneme */}
              <span>{todo.text}</span>
            </label>

            {/* Tlačidlo na vymazanie úlohy */}
            <button
              className="delete-btn"
              onClick={() => handleDelete(todo.id)}
              aria-label={`Vymazať úlohu "${todo.text}"`}
            >
              Vymazať
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
