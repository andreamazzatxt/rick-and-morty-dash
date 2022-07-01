import CharactersBoard from "../components/charactersBoard/CharactersBoard";
import SearchForm from "../components/searchForm/SearchForm";
import useRickMorty from "../hooks/useRickMorty";

const App = () => {
  const { characters, getMoreResults, search, isLoading } = useRickMorty();

  return (
    <div>
      <h1>Rick and Morty {isLoading ? "..." : ""}</h1>
      <SearchForm search={search} />
      <CharactersBoard characters={characters} />
      <button onClick={() => getMoreResults()}>Load More</button>
    </div>
  );
};

export default App;
