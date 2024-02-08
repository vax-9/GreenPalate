/* eslint-disable react/prop-types */
import NavLinks from "../nav/NavLinks";
import Pagination from "../pagination/Pagination";
import style from "./SearchResult.module.scss";
import { useParams, Link, Navigate } from "react-router-dom";
import { loader, vegan } from "../../assets/images";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

function Card(props) {
  return (
    <div className={style.card}>
      <Link to={`/recipe/${props.id}`}>
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
      </Link>
    </div>
  );
}

function SearchResult() {
  const apiKey = import.meta.env.VITE_API_KEY_2;

  const params = useParams();

  const { isPending, isError, data } = useQuery({
    queryKey: ["searchResult"],
    queryFn: () => searchRecipe(),
    retry: 1,
    placeholderData: keepPreviousData,
  });

  console.log(data);

  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [recipePerPage, setRecipePerPage] = useState(8);

  async function searchRecipe() {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?${
        params.type ? `&query=${params.type}` : ""
      }${
        params.trend ? `&sort=${params.trend}` : ""
      }&number=48&diet=vegetarian&apiKey=${apiKey}`
    );
    return await response.json();
  }

  if (isPending) {
    return (
      <div className={style.loader}>
        <img src={loader} alt="" />
      </div>
    );
  }

  if (isError) {
    return <Navigate to="/error" state={{ error: data.code }} />;
  }

  if (data.totalResults === 0) {
    return (
      <>
        <NavLinks />
        <div className={style.noResultContainer}>
          <h2>no recipe found :/</h2>
          <h5>try to change your search keyword</h5>
        </div>
      </>
    );
  }
  if (
    data.message ===
    "Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API."
  ) {
    return <Navigate to="/error/max" state={{ error: data.code }} />;
  }

  if (data.status === "failure") {
    return <Navigate to="/error" state={{ error: data.code }} />;
  }

  // pagination

  const indexOfLastRecipe = currentPage * recipePerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipePerPage;
  const currentRecipes = data.results.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((currentPage) => currentPage + 1);
  const previousPage = () => setCurrentPage((currentPage) => currentPage - 1);

  return (
    <>
      <NavLinks />
      <div className={style.grid}>
        {currentRecipes.map((recipe) => (
          <Card
            key={recipe.id}
            img={recipe.image.isLoading ? vegan : recipe.image}
            title={recipe.title}
            id={recipe.id}
          />
        ))}
      </div>
      <Pagination
        totalRecipes={data.results.length}
        recipePerPage={recipePerPage}
        currentPage={currentPage}
        paginate={paginate}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </>
  );
}

export default SearchResult;
