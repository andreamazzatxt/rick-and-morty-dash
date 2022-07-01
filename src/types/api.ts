interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
  };
  results: {}[];
}

export type Gender = "Female" | "Male" | "Genderless" | "unknown";
export type CharacterStatus = "alive" | "dead" | "unknown";

export type Location = {
  name: string;
  urls: string;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episodes: string[];
  url: string;
  created: string;
};

export interface CharacterApiParameters {
  page?: number;
  name?: string;
  status?: CharacterStatus;
  species?: string;
  type?: string;
  gender?: Gender;
}

export interface CharacterResponse extends ApiResponse {
  results: Character[];
}
