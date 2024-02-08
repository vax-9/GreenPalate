/* eslint-disable react/prop-types */
import { next, previous } from "../../assets/images";
import style from "./Pagination.module.scss";
import { animateScroll } from "react-scroll";

function Pagination(props) {
  const pageNumbers = [];

  const option = {
    duration: 700,
    smooth: true,
  };

  for (let i = 1; i <= Math.ceil(props.totalRecipes / props.recipePerPage); i++)
    pageNumbers.push(i);
  return (
    <nav className={style.container}>
      <ul className={style.paginationList}>
        <button
          className={style.arrow}
          onClick={() => {
            props.previousPage();
            animateScroll.scrollToTop(option);
          }}>
          <img src={previous} alt="" />
        </button>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              props.currentPage == number
                ? style.pageContainerActive
                : style.pageContainer
            }>
            <button
              className={style.page}
              onClick={() => {
                props.paginate(number);
                animateScroll.scrollToTop(option);
              }}>
              {number}
            </button>
          </li>
        ))}
        <button
          className={style.arrow}
          onClick={() => {
            props.nextPage();
            animateScroll.scrollToTop(option);
          }}>
          <img src={next} alt="" />
        </button>
      </ul>
    </nav>
  );
}

export default Pagination;
