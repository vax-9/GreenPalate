import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import TrendingRecipe from "./components/trendingRecipe/TrendingRecipe";
import NavScroll from "./components/nav/NavScroll";

function Home() {
  return (
    <>
      <NavScroll />
      <Hero />
      <About />
      <TrendingRecipe />
    </>
  );
}

export default Home;
