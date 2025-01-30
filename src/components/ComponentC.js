import React from "react";
import { useSelector } from "react-redux";

// displays the latest value from the store
const ComponentC = () => {
  const inputValue = useSelector((state) => state.input.value);

  return (
    <div>
      <h2>Component C</h2>
      <p>Entered Text: {inputValue}</p>
    </div>
  );
};

export default ComponentC;
