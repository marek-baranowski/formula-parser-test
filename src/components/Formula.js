import React from "react";
import { observer } from "mobx-react";

function Formula({ formula }) {
  const { name, value, parsed, setValue } = formula;

  const handleValueChange = () => {
    const newValue = prompt("New value", value);
    setValue(newValue);
  };

  return (
    <span className="ba b--black-20">
      {name}: {parsed.result}{" "}
      <button onClick={handleValueChange}>edit value</button>
    </span>
  );
}

export default observer(Formula);
