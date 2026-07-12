import { useState } from 'react'
import styles from './ContactForm.module.css'

const initial = { name: '', email: '', projectType: 'Commission', message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitted

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  function validate() {
    const next = {}
    if (!values.name.trim()) next.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Enter a valid email.'
    if (!values.message.trim()) next.message = 'Tell us a bit about the project.'
    return next
  }

  function handleSubmit(e) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      // Wire this up to your form backend / API route of choice.
      setStatus('submitted')
      setValues(initial)
    }
  }

  if (status === 'submitted') {
    return (
      <p className={styles.confirmation} role="status">
        Thanks — your note is in the shop. We reply within two business days.
      </p>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && <span id="name-error" className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && <span id="email-error" className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="projectType">Project type</label>
        <select id="projectType" name="projectType" value={values.projectType} onChange={handleChange}>
          <option>Commission</option>
          <option>Restoration</option>
          <option>Wholesale inquiry</option>
          <option>Other</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <span id="message-error" className={styles.error}>{errors.message}</span>}
      </div>

      <button type="submit" className={styles.submit}>Send message</button>
    </form>
  )
}
