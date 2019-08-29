import nanoidGenerate from "nanoid/generate";
import nanoidDictionary from "nanoid-dictionary/lowercase";

export const generateId = (length = 5) =>
  nanoidGenerate(nanoidDictionary, length);
