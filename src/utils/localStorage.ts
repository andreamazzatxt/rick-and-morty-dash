export const getLocal = (key: string) =>
  JSON.parse(localStorage.getItem(key) || "[]");

export const setLocal = (key: string, value: {} | []) => {
  localStorage.setItem(key, JSON.stringify(value));
};
