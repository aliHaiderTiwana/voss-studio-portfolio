import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <img
        className={styles.swatch}
        src={project.image}
        alt={`${project.title}, ${project.material.toLowerCase()}`}
        loading="lazy"
        width="400"
        height="300"
      />
      <div className={styles.body}>
        <p className={styles.meta}>{project.material} · {project.year}</p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.blurb}>{project.blurb}</p>
      </div>
    </article>
  )
}
