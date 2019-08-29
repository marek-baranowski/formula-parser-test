import React from "react";
import { Store } from "./store";

const store = Store.create();

store.createAndAddFormula({ name: "foo", value: "2+2" });
store.createAndAddFormula({ name: "bar", value: "foo + 3" });

console.log("final", store);

function App() {
  const onClick = () => {
    store.formulas[0].setValue("123");
    console.log("onClick", store.formulas[1].parsed);
  };

  return (
    <div className="mw8 avenir center pt4">
      <h3>hello world</h3>
      <p>Lorem ipsum.</p>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
