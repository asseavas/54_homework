import React, { useState } from 'react';
import Attempts from "./components/Attempts/Attempts";
import Board from "./components/Board/Board";
import ResetButton from "./components/ResetButton/ResetButton";
import './App.css';

interface Item {
  hasItem: boolean;
  clicked: boolean;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>(createItems());
  const [attempts, setAttempts] = useState(0);

  const handleCellClick = (index: number) => {
    if (items[index].clicked) return;

    const newItems = [...items];
    newItems[index] = { ...newItems[index], clicked: true };
    setItems(newItems);
    setAttempts(attempts + 1);
  };

  const resetGame = () => {
    setItems(createItems());
    setAttempts(0);
  };

  return (
    <div className="App">
      <Attempts attempts={attempts} />
      <Board items={items} onCellClick={handleCellClick} />
      <ResetButton onReset={resetGame} />
    </div>
  );
};

const createItems = (): Item[] => {
  const items: Item[] = Array(36).fill(null).map(() => ({ hasItem: false, clicked: false }));
  const randomIndex = Math.floor(Math.random() * 36);
  items[randomIndex] = { hasItem: true, clicked: false };
  return items;
};

export default App;
