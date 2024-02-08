import style from "./About.module.scss";
import { divider, transparentLogo } from "../../assets/images";
import { Element } from "react-scroll";

function About() {
  return (
    <Element name="About">
      <div className={style.about}>
        <div className={style.aboutTextContainer}>
          <h2 className={style.aboutTitle}>
            Welcome to GreenPalate, our Vegetarian Recipe Wonderland!
          </h2>
          <p className={style.aboutText}>
            Embark on a culinary journey with our user-friendly search
            functionality that allows you to explore a vast array of delicious
            vegetarian recipes tailored to your preferences. Whether you&apos;re
            seeking quick and easy meals, plant-based comfort food, or
            adventurous global cuisines, our search feature makes discovering
            the perfect recipe a breeze.
            <br />
            <br />
            At GreenPalate, we believe that eating healthy is not just a choice;
            it&apos; s a lifestyle. Our recipes are crafted with wholesome
            ingredients, bursting with flavor and nutrition. Embrace the
            countless benefits of a plant-based diet, including improved heart
            health, enhanced digestion, and a boost in energy levels. Explore
            the diverse world of vegetarian cuisine and savor the joy of
            nourishing your body while tantalizing your taste buds. Join us in
            celebrating the vibrant, mouthwatering world of vegetarian cooking.
            Let the journey to a healthier, more flavorful lifestyle begin!
          </p>
        </div>
        <img className={style.aboutLogo} src={transparentLogo} alt="" />
        <img className={style.divider} src={divider} alt="" />
      </div>
    </Element>
  );
}

export default About;
