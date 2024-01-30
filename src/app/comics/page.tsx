import ComicsList from "../components/comics-list";
import HeroComics from "../components/hero-comics";
import SearchForm from "../components/search-form";

const ComicsPage = () => {
  return (
    <div>
      <HeroComics />
      <SearchForm />
      <ComicsList />
    </div>
  );
};

export default ComicsPage;
