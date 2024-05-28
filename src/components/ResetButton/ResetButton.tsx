import React from 'react';

interface Props {
  onReset: () => void;
}

const ResetButton: React.FC<Props> = ({ onReset }) => {
  return (
    <button className="reset-button" onClick={onReset}>
      Reset
    </button>
  );
};

export default ResetButton;
