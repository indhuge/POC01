import React, { useEffect } from "react";
import styles from "./ParticleBackground.module.scss";
import gear from "../../../public/icons/gear.svg";
import Image from "next/image";

export default function ParticleBackground() {
  const [circleSpeeds] = React.useState([...Array(20)].map(() => Math.random() * 0.2));
  const [circleScales] = React.useState([...Array(20)].map(() => Math.random() * 0.2 + 0.8));

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const circles = document.querySelectorAll(`.${styles.circles} li`);

      circles.forEach((circle, index) => {
        const translateY = ((scrollY * circleSpeeds[index]) * 0.5) + "px";
        const scale = circleScales[index];
        circle.style.transform = `translateY(${translateY}) scale(${scale})`;
      });
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [circleSpeeds, circleScales]);

  return (
    <>
      <div className={styles.area}>
        <ul className={styles.circles}>
          {[...Array(25)].map((_, index) => (
            <li key={index}>
              <Image alt="Gear" src={gear} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
