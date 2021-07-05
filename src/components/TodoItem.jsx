import React from "react";
export const TodoItem = ({ id, title, complete, onChange }) => {
  return (
    <div>
      <input type="check" value={complete} onChange={() => onChange(id)} />
      <label>{title}</label>
    </div>
  );
};
