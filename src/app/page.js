import styles from './page.module.css'
import AbrirModal from '@/components/AbrirModal/AbrirModal'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <AbrirModal/>
        
      </div>
    </main>
  )
}
