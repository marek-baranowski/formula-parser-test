import React from "react";
import { observer } from "mobx-react";

function Formula({ formula }) {
  const { name, value, result, setValue } = formula;

  const handleValueChange = () => {
    const newValue = prompt("New value", value);
    setValue(newValue);
  };

  return (
    <div className="dib ba b--black-20 pa2">
      {name}: {result}
      <button className="ml2" onClick={handleValueChange}>
        edit value
      </button>
    </div>
  );
}

export default observer(Formula);
