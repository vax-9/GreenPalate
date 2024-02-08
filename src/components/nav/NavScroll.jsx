import { logo, transparentLogo } from "../../assets/images";
import style from "./NavScroll.module.scss";
import { Link } from "react-scroll";

function NavScroll() {
  return (
    <div className={style.nav}>
      <Link
        to="Hero"
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        activeClass={style.logoActive}>
        <img
          className={style.navLogoText}
          src={transparentLogo}
          alt="GreenPalateLogo"
        />
        <img className={style.navLogo} src={logo} alt="GreenPalateLogo" />
      </Link>

      <ul className={style.navLinks}>
        <li className={style.home}>
          <Link
            to="Hero"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass={style.active}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="About"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            activeClass={style.active}>
            About us
          </Link>
        </li>
        <li>
          <Link
            to="TrendingRecipes"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            activeClass={style.active}>
            Trending Recipes
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavScroll;
