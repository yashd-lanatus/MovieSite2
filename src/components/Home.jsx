import DialogBox from "./DialogBox";
import DisplayMovies from "./DisplayMovies";
import SortButtons from "./SortButtons";

function HomePage() {

  return (
    <>
      {<SortButtons />}
      {<DisplayMovies />} 
      {<DialogBox />}
    </>
  );
}

export default HomePage;
