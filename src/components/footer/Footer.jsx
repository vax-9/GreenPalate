import style from "./Footer.module.scss";
import {
  transparentWhiteLogo,
  github,
  linkedin,
  personalLogo,
  profile,
  website,
} from "../../assets/images";

function Footer() {
  return (
    <div className={style.footer}>
      <img className={style.footerLogo} src={transparentWhiteLogo} alt="" />
      <ul className={style.footerLinks}>
        <li>
          <a href="https://linkedin.com/in/giuseppe-vassallo-a24885291">
            <img className={style.footerImg} src={linkedin} alt="" />
          </a>
        </li>
        <li>
          <a href="https://github.com/vax-9">
            <img className={style.footerImg} src={github} alt="" />
          </a>
        </li>
        <li>
          <a href="https://talent.start2impact.it/profile/giuseppe-vassallo-9c434f6a-dd31-412a-9276-fad30b9baac8">
            <img className={style.footerImg} src={profile} alt="" />
          </a>
        </li>
        <li>
          <a href="https://giuseppe-vassallo.netlify.app/">
            <img className={style.footerImg} src={website} alt="" />
          </a>
        </li>
      </ul>
      <hr className={style.footerDivider} />
      <div className={style.footerLogoContainer}>
        <img className={style.footerPersonalLogo} src={personalLogo} alt="" />
        <h5 className={style.footerAuthor}>Giuseppe Vassallo © 2024</h5>
      </div>
    </div>
  );
}

export default Footer;
