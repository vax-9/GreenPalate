import style from "./NotFound.module.scss";
import NavLinks from "../nav/NavLinks";
import { useNavigate, useParams } from "react-router-dom";

function NotFound() {
  const NavigateHome = useNavigate();

  const params = useParams();

  console.log(params);

  return (
    <>
      <NavLinks />
      <div className={style.notFound}>
        <div className={style.notFoundContent}>
          <h2 className={style.notFoundTitle}> Not Found :/</h2>
          <h5 className={style.notFoundSubTitle}>
            {params.error === "max"
              ? "I'm sorry, but the available queries for today have been finished. Please try again tomorrow"
              : "I'm sorry, an error occurred or the page you are searching for doesn't exist"}
          </h5>
          <button
            className={style.returnButton}
            onClick={() => NavigateHome("/")}>
            Return Home
          </button>
        </div>
      </div>
    </>
  );
}

export default NotFound;
