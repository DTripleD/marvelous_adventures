import ComicsList from "../components/comics-list";
import HeroComics from "../components/hero-comics";
import Modal from "../components/modal";
import SearchForm from "../components/search-form";

const ComicsPage = () => {
  return (
    <div>
      <HeroComics />
      <SearchForm />
      <ComicsList />
      <Modal />
    </div>
  );
};

export default ComicsPage;
