import "server-only";
export interface IDictionary {
  en: Function;
}

export type TDictionaryKey = keyof IDictionary;

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: TDictionaryKey) =>
  dictionaries[locale]();
