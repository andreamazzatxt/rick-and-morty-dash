import CharactersBoard from "../components/charactersBoard/CharactersBoard";
import Favourites from "../components/favourites/Favourites";
import Header from "../components/header/Header";
import Pagination from "../components/pagination/Pagination";
import SearchForm from "../components/searchForm/SearchForm";
import MainWrapper from "../components/wrapper/MainWrapper";
import { GlobalContext } from "../contexts/global";
import useFavorites from "../hooks/useFavorites";
import useRickMorty from "../hooks/useRickMorty";

const App = () => {
  const { characters, pages, currentPage, search, goToPage } = useRickMorty();
  const { favourites, addFavourite, removeFavourite } = useFavorites();

  return (
    <GlobalContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      <MainWrapper>
        <Header />
        <SearchForm search={search} />
        <CharactersBoard characters={characters} />
        <Pagination
          goToPage={goToPage}
          currentPage={currentPage}
          totalPages={pages}
        />
        <Favourites />
      </MainWrapper>
    </GlobalContext.Provider>
  );
};

export default App;
