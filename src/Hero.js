import React from "react";
import { useAppContext } from "./context";
import phoneImg from "./images/hero.svg";

const Hero = () => {
  const { closeSubmenu } = useAppContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
            nam quas harum enim impedit facilis non officiis. Eveniet fuga in
            odit consequatur ut repellendus sint doloribus, quisquam
            reprehenderit molestias blanditiis.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone-image" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
