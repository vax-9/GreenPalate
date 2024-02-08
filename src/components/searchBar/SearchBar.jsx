/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchBar.module.scss";

function SearchBar(props) {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  function handleChange(e) {
    setSearchValue(e.target.value.toLowerCase());
  }

  console.log(searchValue);

  return (
    <form
      className={props.nav ? style.navContainer : style.heroContainer}
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/searchResult/${searchValue}`);
        window.location.reload();
      }}>
      <input
        className={props.nav ? style.navInput : style.heroInput}
        type="text"
        placeholder={props.nav ? "search here" : "ingredient, recipe, diet..."}
        onChange={handleChange}
      />
      <button
        type="submit"
        className={props.nav ? style.navButton : style.heroButton}>
        search
      </button>
    </form>
  );
}

export default SearchBar;
