import { Character } from "./../types/global";
import {
  CharacterApiParameters,
  CharacterResponse,
  EpisodeResponse,
} from "./../types/api";
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

export const getSingleCharacter = async (id: number) => {
  try {
    const res = await fetch(URL + "/character/" + id);
    if (res.status === 200) {
      return (await res.json()) as Character;
    }
  } catch (error) {
    console.log(error);
  }
  return {} as Character;
};

export const getMultipleEpisodes = async (
  episodes: string[]
): Promise<EpisodeResponse> => {
  const query = episodes.map((url) => url.split("/").reverse()[0]).join(",");
  try {
    const res = await fetch(URL + "/episode/" + query);
    if (res.status === 200) {
      const parsed = await res.json();
      return Array.isArray(parsed) ? parsed : [parsed];
    }
  } catch (error) {
    console.log(error);
  }
  return [];
};
