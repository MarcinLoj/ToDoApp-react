import { useState } from "react";
import { Item } from "./types/stateTypes";
import AppBar from "./views/AppBar";
import List from "./views/List";
import "./styles/App.css";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addTodo = (value: Item) => {
    setItems([...items, value]);
  };

  const removeTodo = (itemToRemove: Item) => {
    setItems(items.filter((item) => item.id !== itemToRemove.id));
  };

  return (
    <div className="app-container">
      <AppBar handleSubmit={addTodo} />
      <List items={items} handleDelete={removeTodo} />
    </div>
  );
}

export default App;
