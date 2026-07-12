import ContactForm from '../components/ContactForm.jsx'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={`container ${styles.wrap}`}>
      <h1 className={styles.title}>Start a commission</h1>
      <p className={styles.sub}>
        Tell us what you're picturing — dimensions, wood preference, budget
        range — and we'll follow up with next steps.
      </p>
      <ContactForm />
    </section>
  )
}
