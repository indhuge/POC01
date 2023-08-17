import styles from './Home.module.scss'
import Header from './components/header'
import Welcome from './components/header/welcome'
import Features from './components/features'

export default function Home() {
  return (
    <div className={styles.description}>
      <Header />
      <Welcome />
      <Features />

    </div>

  )
}
