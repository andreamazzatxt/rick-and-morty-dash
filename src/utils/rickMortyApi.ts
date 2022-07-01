import { CharacterApiParameters, CharacterResponse } from "./../types/api";
const URL = "https://rickandmortyapi.com/api";

const parseApiParameters = (parameters: CharacterApiParameters) => {
  if (Object.values.length === 0) {
    return "";
  }
  return (
    "?" +
    Object.entries(parameters)
      .map(([param, value]) => `${param}=${value}`)
      .join("&")
  );
};

export const getCharacters = async (params?: CharacterApiParameters) => {
  try {
    const query = params ? parseApiParameters(params) : "";
    const res = await fetch(URL + "/character" + query);
    const body: CharacterResponse = await res.json();
    return body;
  } catch (error) {
    console.error(error);
    return { info: { count: 0, pages: 0 }, results: [] };
  }
};
