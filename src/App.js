import React from "react";
import { Parser } from "hot-formula-parser";

const store = {
  foo: "43",
  bar: "foo + 10",
  baz: "foo + bar"
};

const parser = new Parser();

parser.on("callVariable", function(name, done) {
  console.log("callVariable", name);
  const res = parser.parse(store[name]);
  console.log("callVariable2", res);
  done(res.result);
});

const final = parser.parse("baz");

console.log("final", final);

function App() {
  return (
    <div className="mw8 avenir center pt4">
      <h3>hello world</h3>
      <p>Lorem ipsum.</p>
    </div>
  );
}

export default App;
