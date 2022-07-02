import CharactersBoard from "../components/charactersBoard/CharactersBoard";
import Favourites from "../components/favourites/Favourites";
import SearchForm from "../components/searchForm/SearchForm";
import { GlobalContext } from "../contexts/global";
import useFavorites from "../hooks/useFavorites";
import useRickMorty from "../hooks/useRickMorty";

const App = () => {
  const { characters, getMoreResults, search, isLoading } = useRickMorty();
  const { favourites, addFavourite, removeFavourite } = useFavorites();

  return (
    <GlobalContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      <div>
        <h1>Rick and Morty {isLoading ? "..." : ""}</h1>
        <SearchForm search={search} />
        <CharactersBoard characters={characters} />
        <button onClick={() => getMoreResults()}>Load More</button>
        <Favourites />
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
