import React from "react";
import { useDispatch } from "react-redux";
import { setInputValue } from "../app/store";

// updates the state when typing
const ComponentB = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Component B</h2>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => dispatch(setInputValue(e.target.value))}
      />
    </div>
  );
};

export default ComponentB;
