export type LocaleStorageKey = "cartProducts" | "favoriteProducts";

export const getLocalStorage = (key: LocaleStorageKey) => {
  return JSON.parse(localStorage.getItem(key) || "[]");
};
