import CharactersBoard from "../components/charactersBoard/CharactersBoard";
import useRickMorty from "../hooks/useRickMorty";

const App = () => {
  const { characters, getMoreResults } = useRickMorty();

  return (
    <div>
      <h1>Rick and Morty</h1>
      <CharactersBoard characters={characters} />
      <button onClick={() => getMoreResults()}>Load More</button>
    </div>
  );
};

export default App;
