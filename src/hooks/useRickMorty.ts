import { useCallback, useEffect, useState } from "react";
import { CharacterApiParameters } from "../types/api";
import { Character } from "../types/global";
import { getCharacters } from "../utils/rickMortyApi";

type ReturnType = {
  characters: Character[];
  pages: number;
  currentPage: number;
  goToPage: (page: number) => void;
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

  const goToPage = useCallback(
    (page: number) => {
      if (page > pages) {
        return;
      }
      setIsLoading(true);
      setCurrentPage(page);
      getCharacters({ ...params, page })
        .then((data) => {
          setCharacters(data.results);
          setCurrentPage(page);
        })
        .finally(() => setIsLoading(false));
    },
    [pages, params]
  );

  useEffect(() => {
    search({});
  }, [search]);
  return {
    characters,
    pages,
    currentPage,
    search,
    goToPage,
    isLoading,
  };
};

export default useRickMorty;
