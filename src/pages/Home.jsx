import { Link } from 'react-router-dom'
import GrainDivider from '../components/GrainDivider.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import styles from './Home.module.css'

export default function Home() {
  const featured = projects.slice(0, 4)

  return (
    <>
      <section className={`container ${styles.hero}`}>
        <p className={styles.eyebrow}>Solid wood. One maker. No shortcuts.</p>
        <h1 className={styles.headline}>
          Furniture built the way a tree grew — slow, and on purpose.
        </h1>
        <p className={styles.sub}>
          Voss Studio designs and builds one-off pieces in solid hardwood,
          joined by hand and finished to last generations, not seasons.
        </p>
        <div className={styles.ctas}>
          <Link to="/work" className={styles.primaryCta}>See the work</Link>
          <Link to="/contact" className={styles.secondaryCta}>Start a commission</Link>
        </div>
      </section>

      <GrainDivider />

      <section className={`container ${styles.featured}`}>
        <h2 className={styles.sectionTitle}>Recent pieces</h2>
        <div className={styles.grid}>
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <GrainDivider />

      <section className={`container ${styles.intro}`}>
        <h2 className={styles.sectionTitle}>The shop</h2>
        <p className={styles.introText}>
          Every piece starts as a rough-sawn board, chosen at the mill for
          grain and character. From there it's flattened, jointed, and cut
          entirely in a single small shop — no outsourced parts, no
          production runs.
        </p>
        <Link to="/about" className={styles.textLink}>More about the process →</Link>
      </section>
    </>
  )
}
