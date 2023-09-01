// Features.js

import React from 'react';
import styles from "./feature.module.scss"; // Import your styles
import Image from "next/image";

import analytics from "/public/icons/analytics-outline.svg";
import calendar from "/public/icons/calendar-outline.svg";
import notification from "/public/icons/notifications-circle-outline.svg";
import pie from "/public/icons/pie-chart-outline.svg";

export default function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>A certeza da Gestão de Manutenção bem feita</h1>
        <p>O Software de Manutenção que leva o usuário intuitivamente a fazer uma
          gestão de manutenção que funciona de verdade!</p>
        <div className={styles.cardHolder}>
          <div className={styles.card}>
            <Image src={analytics} alt="Analytics Icon" />
            <h1>Análise</h1>
            <p>Análise a tudo sobre a manutenção dos seus ativos</p>
          </div>
          <div className={styles.card}>
            <Image src={pie} alt="Pie Icon" />
            <h1>Vizualize</h1>
            <p>Vizualize os seus dados de forma intuitiva e prática</p>
          </div>
          <div className={styles.card}>
            <Image src={calendar} alt="Calendar Icon" />
            <h1>Agende</h1>
            <p>Agende as manutenções dos seus ativos de forma simples e rápida</p>
          </div>
          <div className={styles.card}>
            <Image src={notification} alt="Notification Icon" />
            <h1>Notifique</h1>
            <p>Notifique seus fornecedores e técnicos quando há a necessidade de realizar um serviço</p>
          </div>
        </div>
      </div>
    </div>
  )
}
