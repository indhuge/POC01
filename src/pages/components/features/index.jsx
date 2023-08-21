import styles from "./feature.module.scss"
import Image from "next/image"
import icons from "./icons"

export default function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>A certeza da Gestão de Manutenção bem feita</h1>
        <p>O Software de Manutenção que leva o usuário intuitivamente a fazer uma
          gestão de manutenção que funciona de verdade!</p>
        <div className={styles.cardHolder}>
          <div className={styles.card}>
            <Image src={icons.analytics} />
            <h1>Análise</h1>
            <p>Análise a tudo sobre a manutenção dos seus ativos</p>
          </div>
          <div className={styles.card}>
            <Image src={icons.pie} />
            <h1>Vizualize</h1>
            <p>Vizualize os seus dados de forma intuitiva e prática</p>
          </div>
          <div className={styles.card}>
            <Image src={icons.calendar} />
            <h1>Agende</h1>
            <p>Agende as manutenções dos seus ativos de forma simples e rápida</p>
          </div>
          <div className={styles.card}>
            <Image src={icons.notification} />
            <h1>Notifique</h1>
            <p>Notifique seus fornecedores e técnicos quando há a necessidade de realizar um serviço</p>
          </div>
        </div>
      </div>
    </div>
  )
}