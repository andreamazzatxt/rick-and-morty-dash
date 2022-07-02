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
  episode: string[];
  url: string;
  created: string;
};

export type Favourite = {
  id: number;
  name: string;
  url: string;
  image: string;
};
