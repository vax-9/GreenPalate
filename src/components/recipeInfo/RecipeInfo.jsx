import { Navigate, useParams } from "react-router-dom";
import NavLinks from "../nav/NavLinks";
import style from "./RecipeInfo.module.scss";
import {
  time,
  score,
  cost,
  person,
  loader,
  healthScore,
} from "../../assets/images";
import { useQuery } from "@tanstack/react-query";

function RecipeInfo() {
  const apiKey = import.meta.env.VITE_API_KEY_2;

  const params = useParams();

  const { isPending, isError, data } = useQuery({
    queryKey: ["info"],
    queryFn: () => getInfo(),
    retry: 1,
  });

  async function getInfo() {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`
    );
    return await response.json();
  }

  if (isPending) {
    return <img className={style.loader} src={loader} alt="" />;
  }

  if (isError) {
    return (
      <>
        <Navigate to="/error" />
      </>
    );
  }

  if (data.status === "failure") {
    return <Navigate to="/error/max" />;
  }

  return (
    <>
      <NavLinks />
      <div className={style.recipeContainer}>
        <div className={style.recipeTitleContainer}>
          <img className={style.recipeImg} src={data.image} alt="" />
          <div className={style.titleContainer}>
            <h1 className={style.title}>{data.title}</h1>
            <p
              className={style.description}
              dangerouslySetInnerHTML={{ __html: data.summary }}></p>
            <div className={style.valuesContainer}>
              <div>
                <img src={time} alt="time" />
                <h5>{data.readyInMinutes} min</h5>
              </div>
              <div>
                <img src={cost} alt="cost" />
                <h5>{Math.floor(data.pricePerServing) / 100}</h5>
              </div>
              <div>
                <img src={score} alt="score" />
                <h5>{Math.floor(data.spoonacularScore)}</h5>
              </div>
              <div>
                <img src={person} alt="servings" />
                <h5>{data.servings}</h5>
              </div>
              <div>
                <img src={healthScore} alt="health score" />
                <h5>{data.healthScore}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={style.infoContainer}>
          <h2>Ingredients</h2>
          <ul className={style.ingredientContainer}>
            {data.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id}>
                <p>{ingredient.original}</p>
              </li>
            ))}
          </ul>
          <div>
            {data.analyzedInstructions[0]?.steps?.map((step) => (
              <div key={step.number} className={style.steps}>
                <h2>Step {step.number}</h2>
                <p>{step.step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeInfo;
