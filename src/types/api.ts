import { Character, CharacterStatus, Episode, Gender } from "./global";

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
  };
  results: {}[];
}

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

export type EpisodeResponse = Episode[];
