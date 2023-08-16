
import styles from './Home.module.scss'
import Header from './components/header'
import Welcome from './components/header/welcome'
export default function Home() {
  return (
    <div className={styles.description}>
      <Header />
      <Welcome />
    </div>

  )
}
