import { logo, transparentLogo } from "../../assets/images";
import style from "./NavLinks.module.scss";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

function NavLinks() {
  return (
    <div className={style.nav}>
      <Link to="/">
        <img className={style.navLogoText} src={transparentLogo} alt="logo" />
        <img className={style.navLogo} src={logo} alt="logo" />
      </Link>

      <ul className={style.linksContainer}>
        <li className={style.searchBar}>
          <SearchBar nav={true} />
        </li>
        <li className={style.links}>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
