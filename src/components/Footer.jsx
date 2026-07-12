import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <p>© {new Date().getFullYear()} Voss Studio. Built by hand, one piece at a time.</p>
        <div className={styles.links}>
          <a href="mailto:hello@vossstudio.example">hello@vossstudio.example</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
