import { fast, trend, cheap, health } from "../../assets/images";
import { Element } from "react-scroll";
import style from "./TrendingRecipe.module.scss";
import { Link } from "react-router-dom";

function TrendingRecipe() {
  return (
    <Element name="TrendingRecipes">
      <div className={style.trend}>
        <div className={style.trendTextContainer}>
          <h2 className={style.trendTitle}>Trending Recipes</h2>
          <p className={style.trendText}>
            Discover a world of popular vegetarian recipes, from budget-friendly
            delights to quick and healthy options. Explore the most-loved,
            affordable, speedy, and nutritious dishes for your vibrant culinary
            journey.
          </p>
        </div>

        <div className={style.trendingRecipes}>
          <Link to="/searchResult/trending/popularity">
            <div className={style.trendingRecipesContainer}>
              <img className={style.trendImg} src={trend} alt="" />
              <h3>Trending</h3>
            </div>
          </Link>
          <Link to="/searchResult/trending/time">
            <div className={style.trendingRecipesContainer}>
              <img className={style.trendImg} src={fast} alt="" />
              <h3>Fastest</h3>
            </div>
          </Link>
          <Link to="/searchResult/trending/price">
            <div className={style.trendingRecipesContainer}>
              <img className={style.trendImg} src={cheap} alt="" />
              <h3>Cheapest</h3>
            </div>
          </Link>
          <Link to="/searchResult/trending/healthiness">
            <div className={style.trendingRecipesContainer}>
              <img className={style.trendImg} src={health} alt="" />
              <h3>Healthiest</h3>
            </div>
          </Link>
        </div>
      </div>
    </Element>
  );
}

export default TrendingRecipe;
