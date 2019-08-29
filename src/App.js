import React from "react";
import { observer } from "mobx-react";
import { Store } from "./store";
import Formula from "./components/Formula";

const store = Store.create();

function App() {
  const onClick = () => {
    const name = prompt("name");
    const value = prompt("value");
    store.createAndAddFormula({ name, value });
  };

  return (
    <div className="mw8 avenir center pt4">
      <button onClick={onClick}>create formula</button>
      <div className="mt4">
        {store.formulas.map(formula => (
          <div key={formula.id} className="mt2">
            <Formula formula={formula} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default observer(App);
