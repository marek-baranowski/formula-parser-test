import { types, getParentOfType } from "mobx-state-tree";
import { Parser } from "hot-formula-parser";
import { generateId } from "./utils";

export const FormulaModel = types
  .model("FormulaModel", {
    id: types.optional(types.identifier, () => generateId()),
    name: types.string,
    value: types.string
  })
  .views(self => ({
    get store() {
      return getParentOfType(self, Store);
    },
    get parsed() {
      return self.store.parser.parse(`${self.value}`);
    }
  }))
  .actions(self => ({
    setValue(value) {
      self.value = value;
    }
  }));

export const Store = types
  .model("StoreModel", {
    formulas: types.optional(types.array(FormulaModel), [])
  })
  .views(self => ({
    findById(id) {
      return self.formulas.find(n => n.id === id);
    },
    findByName(name) {
      return self.formulas.find(n => n.name === name);
    }
  }))
  .volatile(self => {
    const parser = new Parser();

    parser.on("callVariable", function(name, done) {
      console.log("callVariable", name);
      const { parsed } = self.findByName(name);
      console.log("callVariable2", parsed);
      const res = parser.parse(`${parsed.result}`);
      console.log("callVariable3", res);
      done(res.result);
    });

    return {
      parser
    };
  })
  .actions(self => ({
    createAndAddFormula(props = {}) {
      const formula = FormulaModel.create(props);
      self.formulas.push(formula);
    }
  }));
