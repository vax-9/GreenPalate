import Home from "./Home";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/notFound/NotFound";
import SearchResult from "./pages/searchResult/SearchResult";
import RecipeInfo from "./pages/recipeInfo/RecipeInfo";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Helmet } from "react-helmet-async";
import { logo } from "./assets/images";

function App() {
  return (
    <>
      <Helmet>
        <title>GreenPalate</title>
        <meta name="description" content="the best vegetarian recipes!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greenpalate.netlify.app/" />
        <meta
          property="og:title"
          content="GreenPalate | the best vegeterian recipes"
        />
        <meta property="og:image" content={logo} />
      </Helmet>
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
        <Route path="/recipe/:name" element={<RecipeInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
