import { CharacterApiParameters, CharacterResponse } from "./../types/api";
const URL = "https://rickandmortyapi.com/api";

const parseApiParameters = (parameters: CharacterApiParameters) => {
  if (Object.values.length === 0) {
    return "";
  }
  return (
    "?" +
    Object.entries(parameters)
      .filter(([_, value]) => !!value)
      .map(([param, value]) => `${param}=${value}`)
      .join("&")
  );
};

export const getCharacters = async (params?: CharacterApiParameters) => {
  let data: CharacterResponse = { info: { count: 0, pages: 0 }, results: [] };
  try {
    const query = params ? parseApiParameters(params) : "";
    const res = await fetch(URL + "/character" + query);
    if (res.status === 200) {
      data = await res.json();
    }
  } catch (error) {
    console.log(error);
  }
  return data;
};
