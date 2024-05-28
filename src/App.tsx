import React, { useState } from 'react';
import Attempts from "./components/Attempts/Attempts";
import Board from "./components/Board/Board";
import ResetButton from "./components/ResetButton/ResetButton";
import Modal from "./components/Modal/Modal";
import './App.css';

interface Item {
  hasItem: boolean;
  clicked: boolean;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>(createItems());
  const [attempts, setAttempts] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [gameStopped, setGameStopped] = useState(false);

  const handleCellClick = (index: number) => {
    if (gameStopped || items[index].clicked) return;

    const newItems = [...items];
    newItems[index] = { ...newItems[index], clicked: true };
    setItems(newItems);
    setAttempts(attempts + 1);

    if (newItems[index].hasItem) {
      setGameStopped(true);
      setModalVisible(true);
    }
  };

  const resetGame = () => {
    setItems(createItems());
    setAttempts(0);
    setGameStopped(false);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="App">
      <Attempts attempts={attempts} />
      <Board items={items} onCellClick={handleCellClick} />
      <ResetButton onReset={resetGame} />
      <Modal isVisible={isModalVisible} message="Item found! Game over." onClose={closeModal} />
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
