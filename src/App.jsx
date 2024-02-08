import Home from "./Home";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notFound/NotFound";
import SearchResult from "./components/searchResult/SearchResult";
import Recipe from "./components/recipeInfo/RecipeInfo";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/error/:error" element={<NotFound />} />
        <Route path="/searchResult" element={<SearchResult />} />
        <Route path="/searchResult/:type" element={<SearchResult />} />
        <Route
          path="/searchResult/trending/:trend"
          element={<SearchResult />}
        />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
