import GrainDivider from '../components/GrainDivider.jsx'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={`container ${styles.wrap}`}>
      <h1 className={styles.title}>About the shop</h1>
      <p className={styles.lead}>
        Voss Studio is a one-person hardwood shop. Every piece is designed,
        milled, joined, and finished in-house — usually over four to eight
        weeks, depending on the joinery.
      </p>

      <GrainDivider />

      <div className={styles.columns}>
        <div>
          <h2 className={styles.subhead}>Materials</h2>
          <p>
            Boards are sourced from small regional mills and picked in
            person for grain, figure, and moisture content before they ever
            reach the shop.
          </p>
        </div>
        <div>
          <h2 className={styles.subhead}>Process</h2>
          <p>
            Hand-cut joinery where it matters — dovetails, mortise and
            tenon — and machine work where precision beats romance. Finishes
            are all low-VOC oil and wax.
          </p>
        </div>
        <div>
          <h2 className={styles.subhead}>Timeline</h2>
          <p>
            Commissions are taken in small batches. Current lead time is
            roughly ten weeks from deposit to delivery.
          </p>
        </div>
      </div>
    </section>
  )
}
