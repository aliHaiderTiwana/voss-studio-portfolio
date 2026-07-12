import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <h1>Page not found</h1>
      <p>That board hasn't been cut yet.</p>
      <Link to="/">Back home</Link>
    </section>
  )
}
