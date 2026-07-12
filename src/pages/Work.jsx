import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import styles from './Work.module.css'

export default function Work() {
  const materials = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.material))],
    [],
  )
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All'
    ? projects
    : projects.filter((p) => p.material === filter)

  return (
    <section className={`container ${styles.wrap}`}>
      <h1 className={styles.title}>Work</h1>
      <p className={styles.sub}>Every piece is one-off. Filter by species below.</p>

      <div className={styles.filters} role="group" aria-label="Filter by material">
        {materials.map((m) => (
          <button
            key={m}
            className={`${styles.filterBtn} ${filter === m ? styles.filterActive : ''}`}
            onClick={() => setFilter(m)}
            aria-pressed={filter === m}
          >
            {m}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
