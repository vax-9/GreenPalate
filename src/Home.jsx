import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import { logo } from "./assets/images";
import TrendingRecipe from "./components/trendingRecipe/TrendingRecipe";
import NavScroll from "./components/nav/NavScroll";
import { Helmet } from "react-helmet-async";

function Home() {
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
      <NavScroll />
      <Hero />
      <About />
      <TrendingRecipe />
    </>
  );
}

export default Home;
