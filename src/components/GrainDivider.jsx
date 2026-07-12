import styles from './GrainDivider.module.css'

// The studio's signature mark: an irregular grain line, like a plane
// pass across a board. Purely decorative — hidden from assistive tech.
export default function GrainDivider() {
  return (
    <svg
      className={styles.grain}
      viewBox="0 0 1180 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 20 C 120 5, 200 35, 320 18 S 520 2, 640 22 S 860 38, 980 16 S 1120 6, 1180 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}
