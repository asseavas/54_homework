import React from 'react';
import Cell from "../Cell/Cell";

interface GameBoardProps {
  items: { hasItem: boolean; clicked: boolean }[];
  onCellClick: (index: number) => void;
}

const Board: React.FC<GameBoardProps> = ({ items, onCellClick }) => {
  return (
    <div className="game-board">
      {items.map((item, index) => (
        <Cell key={index} item={item} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
};

export default Board;
