import { useCallback, useEffect, useState } from "react";
import { Character, CharacterApiParameters } from "../types/api";
import { getCharacters } from "../utils/rickMortyApi";

type ReturnType = {
  characters: Character[];
  getMoreResults: () => void;
  search: (parameters: CharacterApiParameters) => void;
  isLoading: boolean;
};

const useRickMorty = (): ReturnType => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pages, setPages] = useState<number>(0);
  const [params, setParams] = useState<CharacterApiParameters>({});

  const search = useCallback((parameters: CharacterApiParameters) => {
    setIsLoading(true);
    setPages(0);
    setParams(parameters);

    getCharacters(parameters)
      .then((data) => {
        setCharacters(data.results);
        setCurrentPage(1);
        setPages(data.info.pages);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const getMoreResults = useCallback(() => {
    if (currentPage === pages) {
      return;
    }
    const newCurrentPage = currentPage + 1;
    setCurrentPage(newCurrentPage);
    getCharacters({ ...params, page: newCurrentPage }).then((data) =>
      setCharacters((prev) => [...prev, ...data.results])
    );
  }, [currentPage, pages, params]);

  useEffect(() => {
    search({});
  }, [search]);
  return { characters, getMoreResults, search, isLoading };
};

export default useRickMorty;
