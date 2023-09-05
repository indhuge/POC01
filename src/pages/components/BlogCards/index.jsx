import Styles from "./BlogCards.module.scss";

const cards = [
  {
    image:
      "https://images.wallpaperscraft.com/image/single/nissan_gtr_supercar_121502_1280x720.jpg",
    title: "Titulo",
    text: "Text",
  },
  {
    image:
      "https://images.wallpaperscraft.com/image/single/nissan_gtr_supercar_121502_1280x720.jpg",
    title: "Titulo",
    text: "Text",
  },
  {
    image:
      "https://images.wallpaperscraft.com/image/single/nissan_gtr_supercar_121502_1280x720.jpg",
    title: "Titulo",
    text: "Text",
  },
  {
    image:
      "https://images.wallpaperscraft.com/image/single/nissan_gtr_supercar_121502_1280x720.jpg",
    title: "Titulo",
    text: "Text",
  },
];

export default function Component() {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <h1>Titulo</h1>
        <div className={Styles.cardHolder}>
          {cards.map((c, index) => {
            return (
              <div className={Styles.card} key={index}>
                <div className={Styles.cardText}>
                  <h2>{c.title}</h2>
                  <p>{c.text}</p>
                </div>
                <div className={Styles.imageContainer}>
                  <img src={c.image} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
