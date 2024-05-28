import React from 'react';

interface Props {
  attempts: number;
}

const Attempts: React.FC<Props> = ({ attempts }) => {
  return <div className="attempts">Attempts: {attempts}</div>;
};

export default Attempts;
