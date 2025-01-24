import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/NRC@4x.png" alt="Nicotine Resource Consortium Logo" className={styles.logo} />
      </footer>
    </>
  )
}
