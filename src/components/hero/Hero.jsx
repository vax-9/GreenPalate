import { Element } from "react-scroll";
import style from "./Hero.module.scss";
import SearchBar from "../searchBar/SearchBar";

function Hero() {
  return (
    <Element name="Hero">
      <div className={style.hero}>
        <div className={style.heroContent}>
          <h1 className={style.heroTitle}>The best vegetarian recipes</h1>
          <h5 className={style.heroSubTitle}>
            search the recipe you want or take a look at the most popular
            vegetarian recipes around the world
          </h5>
          <SearchBar />
        </div>
      </div>
    </Element>
  );
}

export default Hero;
