import React from 'react';

const DuplicateTodoButton = ({ onDuplicate }) => {
  return (
    <button className="duplicate-btn" onClick={onDuplicate}>Duplicar</button>
  );
};

export default DuplicateTodoButton;
