import React from 'react';

interface CellProps {
  item: { hasItem: boolean; clicked: boolean };
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ item, onClick }) => {
  const cellClasses = ['cell'];

  if (item.clicked) {
    cellClasses.push('clicked');
    if (item.hasItem) {
      cellClasses.push('has-item');
    }
  }

  return (
    <div className={cellClasses.join(' ')} onClick={onClick}>
      {item.clicked && item.hasItem && 'O'}
    </div>
  );
};

export default Cell;
